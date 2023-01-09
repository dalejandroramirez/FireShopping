import React, { useContext } from 'react'
import { IoHome } from 'react-icons/io5'
import {BsList} from 'react-icons/bs'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { AppContext } from '../../App'


const Footer = () => {
  const { setRoute } = useContext(AppContext)

  return (
    <footer className="fixed h-12 w-full bg-orange-400 bottom-0 flex justify-evenly 
    items-center" >
      <div className='bg-orange-700 text-2xl p-2 rounded-full
      text-white cursor-pointer hover:bg-white transition hover:text-orange-700' onClick={()=> setRoute('home')}>
        <IoHome />
      </div>
      <div className='bg-orange-700 text-2xl p-2 rounded-full
      text-white cursor-pointer hover:bg-white transition hover:text-orange-700 ' onClick={()=> setRoute('shopping')}>
        <MdOutlineShoppingCart />
      </div>
      <div className='bg-orange-700 text-2xl p-2 rounded-full
      text-white cursor-pointer hover:bg-white transition hover:text-orange-700 ' onClick={()=> setRoute('tasklist')}>
        <BsList />
      </div>

    </footer>
  )
}

export default Footer 