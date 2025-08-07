'use client'
import React, { useState } from 'react'
import Timeline from '../components/Timeline'
import DateModification from '../components/DateModification'
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Link from 'next/link';

export default function Leaveform() {
  const [selectedValue1,setSelectedValue1] = useState("");
  const [selectedValue2,setSelectedValue2] = useState("");

  const handleRadioChange = (func, val) => {
    func(val);
  };

  return (
    <div className='space-y-2'>
        <div className="flex justify-between items-center">
                    {/* left side */}
            <div>
                <h1 className="text-2xl font-semibold">
                    Leave Request Form
                </h1>
                <p className="text-gray-600 pt-2.5 text-sm font-light">
                    Fill out leave requests
                </p>
            </div>
            
            {/* right side */}
            <div className='space-x-3'>
                <Link href="/leave">
                    <button className='btn btn-outline px-6'>
                        Cancel
                    </button>
                </Link>
                <button className="btn btn-primary px-6">
                    Save
                </button>
            </div>
        </div>
        <div className='flex flex-row justify-between gap-4'>
            <div className='min-w-1/2 min-h-screen border border-gray-200 rounded-lg p-6'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h1 className='text-gray-900 font-semibold text-lg'>Type of Leave</h1>
                    </div>

                    <div>
                        <select defaultValue="PTO" className="select border border-gray-200 bg-white">
                            <option value="PTO">PTO</option>
                            <option value="Medical">Medical</option>
                            <option value="Personal">Personal</option>
                            <option value="Military">Military</option>
                            <option value="Sick">Sick</option>
                            <option value="Jury duty">Jury duty</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className='flex flex-row'>
                        <p className='text-gray-900 mr-3'>Do you have a justification for leave?</p>

                        <div className='flex items-center justify-center'>
                            <input type="radio" id="Yes" value="Yes" checked={selectedValue1 === "Yes"} onChange={() => {handleRadioChange(setSelectedValue1, "Yes")}} className='mr-1 radio radio-info radio-xs'/>
                            <label htmlFor="Yes">Yes</label>
                        </div>

                        <div className='flex items-center justify-center'>
                            <input type="radio" id="No" value="No" checked={selectedValue1 === "No"} onChange={() => {handleRadioChange(setSelectedValue1, "No")}} className=' ml-3 mr-1 radio radio-info radio-xs'/>
                            <label htmlFor="No">No</label>
                        </div>
                    </div>

                    <div className='border rounded-lg border-dashed bg-gray-200 p-8 flex items-center justify-center flex-col'> 
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                        </button>
                        
                        <p className='mt-4 text-sm'><span className='text-blue-600'>Click to upload</span> or drag and drop</p>
                        <p className='text-gray-400 mt-2 text-sm'>SVG, PNG, JPG or GIF</p>
                        <p className='text-gray-400 text-sm'>(max, 800 X 800px)</p>
                    </div>
                    
                    <h1 className='font-semibold text-gray-900 text-lg'>Leave Dates</h1>

                    <div className='flex flex-row'>
                        <p className='text-gray-900 mr-3'>Are you requesting a partial day of leave?</p>

                        <div className='flex items-center justify-center'>
                            <input type="radio" id="Yes" value="Yes" checked={selectedValue2 === "Yes"} onChange={() => {handleRadioChange(setSelectedValue2, "Yes")}} className='mr-1 radio radio-info radio-xs'/>
                            <label htmlFor="Yes">Yes</label>
                        </div>

                        <div className='flex items-center justify-center'>
                            <input type="radio" id="No" value="No" checked={selectedValue2 === "No"} onChange={() => {handleRadioChange(setSelectedValue2, "No")}} className=' ml-3 mr-1 radio radio-info radio-xs'/>
                            <label htmlFor="No">No</label>
                        </div>
                    </div>
                    
                    <div>
                        <div className='flex'>
                            <label className="input bg-white border-gray-200 grow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <input type="search" required placeholder="Hours" />
                            </label>
                        </div>
                        <p className='text-sm text-gray-400'>If you are only requesting a partial day, select the same start and end <br/>date below and enter the number of hours here.</p>
                    </div>

                    <div className='border border-gray-200 w-[350px] rounded-lg p-4'>
                        <DateModification />
                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-semibold text-gray-900 text-lg'>Additional Comments</h1>
                        <div className='flex'>
                            <textarea className="textarea bg-white border-gray-200 grow h-[250px]"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className='min-w-1/2 space-y-8'>
                <div className='border border-gray-200 rounded-lg p-6'>
                    <h1 className='font-semibold text-gray-900 text-xl mb-4'>Track Status</h1>
                    <Timeline />
                </div>

                <div className='border border-gray-200 rounded-lg p-4 flex flex-row space-x-3 justify-center'>
                    <h1 className='text-green-400'>Approve 1 Name</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <h1 className='text-gray-900'>Approve 2 Name</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <h1 className='text-gray-900'>Approve 3 Name</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
