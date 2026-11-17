import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {

  let {setIsCardOpen} = useContext(MyShop)
  
  return (
    <div className='flex rounded items-center justify-between bg-black text-white p-5'>
      <div>Logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={() => setIsCardOpen(false)} className='cursor-pointer' >Home</p>
        <p onClick={() => setIsCardOpen(true)
        } className='cursor-pointer' >Cart</p>
      </div>

      <button>Login</button>

    </div>
  )
}

export default Navbar
