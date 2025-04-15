import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

function Appointment() {
  const { docid } = useParams(); // Get doctor ID from route
  const { doctors , currencySymbol} = useContext(AppContext); // Get list of doctors from context
  const [docInfo, setDocInfo] = useState(null); // State to hold matched doctor info

  useEffect(() => {
    const fetchDocInfo = async () => {
      console.log("docid from URL:", docid);
      const doc = doctors.find(doc => doc._id === docid); // Find doctor by ID
      setDocInfo(doc);
      console.log("Matched doctor:", doc);
    };

    if (doctors?.length > 0 && docid) {
      fetchDocInfo(); // Only run if doctors are loaded and docid is available
    }
  }, [doctors, docid]);

  return docInfo && (
    <div>
      {/*------------- doctors info -------------*/}
      <div className='flex flex-col sm:flex-row gap-6'>
        <div>
          { <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name || "Doctor"} />}
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          {/*------------name degree and experience----------------*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-grey-900'> 
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /> 
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p> {docInfo.degree} - {docInfo.speciality} </p>
            <button className='py-0 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*---------------doctors about----------*/}
          <div>
            < p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'> 
              About <img src={assets.info_icon} alt="" />
           </p>
            <p className='text-sm text-gray-500 max-w-[700x] mt-1'> 
              {docInfo.about}
           </p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'> {currencySymbol} {docInfo.fees}  </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Appointment;
