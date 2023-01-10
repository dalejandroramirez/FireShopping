import React, { useContext } from 'react'
import { IoLogoFirebase} from 'react-icons/io5'
import { AppContext } from '../../App'
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

export default function Header() {

  const { setRoute, user, setUser } = useContext(AppContext);

  const hazLogout = () => {
    signOut(auth).then(() => {
      setRoute("login")
      setUser(null)
      toast("Usuario logout")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0" >
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setRoute('home')}>
        <IoLogoFirebase className="text-2xl text-orange-600" />
        <span className="text-xl font-semibold text-orange-700"> FireShopping</span>
      </div>
      <div className='flex gap-2'>
        {user ?
          <button className="bg-sky-500 text-white py-1 px-3 rounded-full
        hover:bg-sky-700 transition" onClick={hazLogout}>
          logout
          </button>
          :
          <button className="bg-sky-500 text-white py-1 px-3 rounded-full
        hover:bg-sky-700 transition" onClick={() => setRoute('login')}>
            Login
          </button >}

        <button onClick={() => setRoute('register')}>...o registrate</button>
      </div>
    </header>
  )
}
