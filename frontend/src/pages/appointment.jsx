import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docid } = useParams(); // Get doctor ID from route
  const { doctors, currencySymbol } = useContext(AppContext); // Get list of doctors from context
  const [docInfo, setDocInfo] = useState(null); // State to hold matched doctor info
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    
    const docInfo = doctors.find(doc => doc._id === docid); // Find doctor by ID
    setDocInfo(docInfo);
    console.log("Matched doctor:", docInfo);
  };
  const getAvailableSlot = async () => {
    setDocSlots([])
    //getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      //setting n time of the date
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)
      //setting hours 
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots =[]
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit',minute: '2-digit'} )
        //add slots to array 
        timeSlots.push({
          datetime: new Date(currentDate),
          time:formattedTime
        })
        //incremente current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() +30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  };
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docid])

  useEffect(() => {
    getAvailableSlot()


  }, [docInfo])

 
 
   useEffect(() =>{
    console.log(docSlots);
   })
  

return docInfo && (
  <div>
    {/*------------- doctors info -------------*/}
    <div className='flex flex-col sm:flex-row gap-6'>
      <div>
        {<img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name || "Doctor"} />}
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
//2.42
