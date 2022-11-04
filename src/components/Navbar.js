import React from 'react'

function Navbar() {
    let Links = [
        {name: "HOME",link:"/"},
        {name: "HOME",link:"/"},
    ]
  return (
    <div className='w-full shadow-md fixed top-0 left-0'>
        <div className='md:flex bg-black py-5 item-center justify-between'>
        <div className='font-bold ml-36 text-2xl cursor-pointer flex items-center font-serif text-white'>
            <span className='w-7 '>
                <img className='' src={require('./logo.png')} alt="logo"/>
            </span>
            <span className='text-2xl pr-2 font-sans'>Abstract </span>  | Help Center
        </div>
        <div className='md:flex md:items-center text-white'>
            <button className='text-white bg-neutral-900 font-serif py-2 px-6 rounded md:ml:8 hover:bg-neutral-800 
            duration-500 text-2xl mr-5 border-solid border-2 border-white'>Submit a request
            </button>
            <button className='text-white bg-indigo-600 font-serif py-2 px-6 rounded md:ml:8 hover:bg-white hover:text-black 
            duration-500 text-2xl mr-10 '>Sign in
            </button>
        </div>
        </div>
    </div>
  )
}

export default Navbar