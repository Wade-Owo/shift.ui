'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import DateModification from '../components/DateModification'
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function Calendar() {
  const now = new Date();
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
  const final_date = date.toDateString();

  return (
    <div>
        <main className='p-6 space-y-10'>
            <div className="flex justify-between items-center">
                {/* left side */}
                <div>
                    <h1 className="text-2xl font-semibold">
                        Calendar
                    </h1>
                    <p className="text-gray-600 pt-2.5 text-sm font-light">
                        Manage your schedule and upcoming events
                    </p>
                </div>
                
                {/* right side */}
                <div>
                    <button className="btn btn-primary">
                        <Link href='/overtime-request-form'>
                            <h1 className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                                <span>New Event</span>
                            </h1>
                        </Link>
                    </button>
                </div>
            </div>
            
            <div className='flex flex-col gap-4'>

                {/* calendar */}
                <div className='border border-gray-100 shadow-xl rounded-lg flex items-center justify-center w-[350px] h-[360px]'>
                    <DateModification />
                </div>

                {/* Current Events */}
                <div className='shadow-xl border-gray-100 rounded-lg min-w-min h-[160px] p-4 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-900'>Today</h1>
                        <h3 className='text-md text-gray-600 mb-3'>{final_date}</h3>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-900 '>3</h1>
                        <h3 className='text-md text-gray-600'>Events Scheduled</h3>
                    </div>
                </div>

                {/* Upcoming events */}
                <div className='shadow-xl border-gray-100 rounded-lg min-w-min p-4 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-900'>Upcoming Events</h1>
                    </div>
                    
                    {/* event 1 */}
                    <div>
                        <h1 className='text-lg font-semibold mt-3'>AI Workshop</h1>
                        <div className='text-sm text-gray-400 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>12:00 PM</p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p>40</p>
                        </div>
                        <p className='text-sm text-gray-400'>Creative Lab</p>
                        <p className='text-sm text-gray-400'>Tommorow</p>
                    </div>

                    {/* event 2 */}
                    <div>
                        <h1 className='text-lg font-semibold mt-3'>1-on-1 w/ intern mentee</h1>
                        <div className='text-sm text-gray-400 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>4:00 PM</p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p>2</p>
                        </div>
                        <p className='text-sm text-gray-400'>Studio</p>
                        <p className='text-sm text-gray-400'>Tommorow</p>
                    </div>

                </div>

            </div>

        </main>
    </div>
  )
}
