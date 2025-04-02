
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const doctors = () => {

const { Speciality } = useParams()
const [filterDoc,setFilterDoc] =useState([])
const  navigate =useNavigate()

const {doctors} = useContext(AppContext)

const applyFilter = () =>{
  if(Speciality){
    setFilterDoc(doctors.filter(doc => doc.speciality === Speciality))
  }else{
    setFilterDoc(doctors)
  }


 }
 useEffect(()=>{
    applyFilter()
 },[doctors,Speciality])
  

  return (
    <div>
      <p className='text-gray-600'>Brows through the doctors speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='felx-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>} className={'w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '} >General physician</p>
          <p className={'w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}> Gynoclogist</p>
          <p className={'w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Derrmotologist</p>
          <p className={'w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Pediatricians</p>
          <p className={'w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}> Neaurologist</p>
          <p className={'w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6'>

          {
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'
              >
                <img className='bg-blue-50 ' src={item.image} alt=" " />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
    
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default doctors 