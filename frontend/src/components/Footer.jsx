import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10' >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*-----------left------------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo1} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit<br/> Nam eveniet ipsam, assumenda modi magnam ipsa, facere iusto sed laboriosam fugiat corrupti quae sequi quis quaerat et ad. Voluptates sed, nobis illum numquam quos quo consectetur eaque est minima asperiores.</p>
            </div>
             {/*-------------center----------*/}
             <div>
                <p className='text-xl font-medium md:-mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>
              {/*------------right------------*/}
              <div>
                   <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                   <ul className='flex flex-col gap-2 text-gray-600 '>
                        <li>+1-234-567-8901</li>
                        <li>harmony@gmail.com</li>
                    </ul> 
              </div>
        </div>
        {/*-------copyright-------*/}
            <div>
                <hr/>
                <p className='py-5 text-center'>Copyright 2025@ Harmony -all Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer