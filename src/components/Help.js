import React from 'react'
import SearchBar from './SearchBar'
import Data from "./Data.json";

function Help() {
  return (
    <div className='text-black mt-16 h-96 bg-[#DADBF1]'>
        <div className=' text-7xl font-sans text-center pt-24'>
            How can we help?
        </div>
        <div className='pt-8 text-center'><SearchBar placeholder="Search" data={Data}/></div>
    </div>
  )
}

export default Help