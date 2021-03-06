/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Profile() {
  return (
    <div className='mt-5 p-10 items-center sm:flex justify-between'>
      <div className='items-center flex-1 rounded-full'>
          <img
          className='h-40 w-40 mx-auto sm:mx-0 cursor-pointer rounded-full'
          loading='lazy'
          src="https://bit.ly/37UsMyW"
          alt="avatar"
          />
      </div>
      <div className='flex-1 mt-5 items-center'>
        <div className=''>
          <h1 className='text-3xl sm:text-4xl space-x-5 font-extrabold font-serif text-center'>
              Hello, <span className='text-indigo-500'>I'am Victor</span>
              </h1>
              </div>
              <div className=''>
          <p className='text-center mx-auto'>A Full-Stack Dev. I design, modify, develop, write and 
          implement software programming applications. Support and  install software 
               applications/operating systems. Participate in the testing 
               process through test review and analysis, test witnessing and 
               certification of software.
               </p>
               </div>
               <div className=' p-2 mt-5'>
               <button className=" relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600  hover:bg-white group">
    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Hire Me</span>
</button>
</div>
      </div>
    </div>
  )
}

export default Profile
