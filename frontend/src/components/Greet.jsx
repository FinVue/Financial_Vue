import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Greet() {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // If the user is stored in Firestore
          const q = query(collection(db, 'users'), where('uid', '==', user.uid));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(doc => {
            const userData = doc.data();
            setName(`${userData.firstName} ${userData.lastName}`);
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }

        // If the user is signed in with Google but not stored in Firestore
        if (!name && user.displayName) {
          setName(user.displayName);
        }
      } else {
        console.log('No user is currently logged in');
      }
    };

    fetchUserData();
  }, [name]); // Include name in the dependencies array to trigger the effect when name changes

  return (
    <article className="px-6 py-8 w-full flex justify-between items-center">
      <h1 className="text-heading-3 leading-tight font-medium text-white">
        Good morning,
        <br />
        <span className="text-secondary text-heading-3 font-bold">{name}</span>
      </h1>
      <img
        className="w-10 h-10 object-cover rounded-full"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A portrait of a woman taken by Aiony Haust from Unsplash"
      />
    </article>
  );
}

export default Greet;
