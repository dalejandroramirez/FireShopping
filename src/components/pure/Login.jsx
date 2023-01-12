import React, { useState, useContext } from 'react'


// Copiado de firebase
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../../App';


const provider = new GoogleAuthProvider();
const auth = getAuth();



const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } =useContext(AppContext)



  const hazLoginGoogle = () => {
    // firebase docs
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('token', token);
        console.log('user', user);
        toast('Login exitoso');
        setUser(user)

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const hazLoginConEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast('Login exitoso');
        setUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div >
      <h1 className="text-xl font-semibold mb-8">Bienvenido al Login</h1>
      <div className='flex flex-col items-center'>

        <form
          className='flex flex-col gap-2 max-w-sm'
          onSubmit={hazLoginConEmail}>
          <input
            className='correo-btn border border-gray-500 rounded py-1 px-2 outline-none'
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="example@host.com" />
          <input
            className='password-btn border border-gray-500 rounded py-1 px-2 outline-none'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='************' />
          <button
            className='login-btn bg-orange-600 py-1 text-white rounded-full shadow' >
            Log In
          </button>
        </form>
        <button onClick={hazLoginGoogle}>Login con Google</button>
      </div>
    </div>
  )
}

export default Login