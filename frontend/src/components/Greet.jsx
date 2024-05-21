import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../../firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function Greet() {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // If the user is signed in with Google
          if (user.providerData && user.providerData[0].providerId === 'google.com') {
            setPhotoURL(user.photoURL);
          } else {
            // If the user is stored in Firestore
            const q = query(collection(db, 'users'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
              const userData = doc.data();
              setName(`${userData.firstName} ${userData.lastName}`);
            });
  
            // Set the profile picture URL from local storage
            const storedPhotoURL = localStorage.getItem('photoURL');
            if (storedPhotoURL) {
              setPhotoURL(storedPhotoURL);
            } else if (user.photoURL) {
              setPhotoURL(user.photoURL);
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.log('No user is currently logged in');
        setPhotoURL(''); // Clear photoURL when user logs out
      }
    };

    fetchUserData();
  }, []); // Empty dependencies array, so it only runs once on component mount

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const user = auth.currentUser;
    if (file && user) {
      const storageRef = ref(storage, `users/${user.uid}/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        await updateDoc(doc(db, 'users', user.uid), {
          photoURL: downloadURL
        });
        setPhotoURL(downloadURL);
        // Store the profile picture URL in local storage
        localStorage.setItem('photoURL', downloadURL);
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };

  return (
    <article className="px-6 py-8 w-full flex justify-between items-center">
      <div className="flex items-center"> {/* Wrapper div */}
        <h1 className="text-heading-3 leading-tight font-medium text-white">
          Good morning,
          <br />
          <span className="text-secondary text-heading-3 font-bold">{name}</span>
        </h1>
      </div>
      <div> {/* Wrapper div for the profile image */}
        <label htmlFor="profile-image">
          <img
            className="w-10 h-10 object-cover rounded-full cursor-pointer"
            src={photoURL ? photoURL : "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <input
            type="file"
            accept="image/jpeg, image/png"
            id="profile-image"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </label>
      </div>
    </article>
  );
}

export default Greet;
