import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.manage.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

  return (
    <div>
        <div>
            <input type="text" placeholder={placeholder} onChange={handleFilter} className='p-5 rounded text-xl border-2 border-black w-2/5'/>
            <EastIcon className=' -ml-10'/>
        </div>
        {filteredData.length != 0 && ( 
         <div className=' ml-44'>   
          <div className='mt-2 w-52 h-44 bg-white ml-96 overflow-hidden overflow-y-auto '>
            {filteredData.map((value, key) => {
                return (
                    <a className=' h-20 flex align-center text-black decoration-none ' href={value.link} target="_blank">
                        <p className='ml-10'>{value.manage}</p>
                    </a>
                );
            })} 
          </div></div>
        )} 
    </div>
  )
}

export default SearchBar