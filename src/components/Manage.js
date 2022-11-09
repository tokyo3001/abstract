import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Manage() {
  return (
    <div className='item-center justify-between '>
        <div className=' ml-32 text-2xl cursor-pointer items-center font-sans pt-36 pl-48 text-black grid grid-rows-3 grid-flow-col gap-4'>
            <div>
              <img src='https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png' alt='pic1' className=' w-28 -ml-36 -mb-28 '/>
              <span className='font-bold'>Using Abstract</span>
              <div className='pt-5 w-2/3'>Abstract lets you manage, version, and document your designs in one place.</div><br/>
              <a href='#' className='text-xl text-blue-500 '>Learn more</a>
              <ArrowRightAltIcon className='text-blue-500'/>
            </div>
            <div className='mt-10'>
              <img src='	https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png' alt='pic1' className=' w-28 -ml-36 -mb-28 '/>
              <span className='font-bold'>Manage organizations, teams, and projects</span>
              <div className='pt-5 w-2/3'>Use Abstract organizations, teams, and projects to organize your people and your work.</div><br />
              <a href='#' className='text-xl text-blue-500'>Learn more</a>
              <ArrowRightAltIcon className='text-blue-500'/>
            </div>
            <div className='mt-10'>
              <img src='https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png' alt='pic1' className=' w-28 -ml-36 -mb-28 '/>
              <span className='font-bold'>Authenticate to Abstract</span>
              <div className='pt-5 w-2/3'>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</div><br/>
              <a href='#' className='text-xl text-blue-500'>Learn more</a>
              <ArrowRightAltIcon className='text-blue-500'/>
            </div>
            <div className=''>
              <img src='	https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png' alt='pic1' className=' w-28 -ml-36 -mb-28 '/>
              <span className='font-bold'>Manage your account</span>
              <div className='pt-5 w-2/3'>Configure your account settings, such as your email, profile details, and password.</div><br/>
              <a href='#' className='text-xl text-blue-500'>Learn more</a>
              <ArrowRightAltIcon className='text-blue-500'/>
            </div>
            <div className=''>
              <img src='	https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png' alt='pic1' className=' w-28 -ml-36 -mb-28 '/>
              <span className='font-bold'>Manage billing</span>
              <div className='pt-5 w-2/3'>Change subscriptions and payment details.</div><br/>
              <a href='#' className='text-xl text-blue-500'>Learn more</a>
              <ArrowRightAltIcon className='text-blue-500'/>
            </div>
            <div className=''>
              <img src='https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png' alt='pic1' className=' w-28 -ml-36 -mb-28 '/>
              <span className='font-bold'>Abstract support</span>
              <div className='pt-5 w-2/3'>Get in touch with a human.</div><br/>
              <a href='#' className='text-xl text-blue-500'>Learn more</a>
              <ArrowRightAltIcon className='text-blue-500'/>
            </div>
        </div>
    </div>
  )
}

export default Manage