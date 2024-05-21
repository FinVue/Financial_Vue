const loginUser = (email, password) => {
  if(!email || !password){
    throw Error('All fields are required.');
  }

  const data = {email, password};
  console.log(data);
  return data;
}

const registerUser = (email, password, confirmedPassword) => {
  if(!email || !password || !confirmedPassword){
    throw Error('All fields are required.');
  }

  if(password < 8){
    throw Error('Password is too short. It must be more than 8 characters.')
  }

  if(password !== confirmedPassword){
    throw Error('Passwords do not match. Please try again.')
  }

  const data = {email, password};
  console.log(data);
  return data;
}

export {loginUser, registerUser};