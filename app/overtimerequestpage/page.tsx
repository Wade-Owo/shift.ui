'use client'
import React from 'react'
import Timeline from '../components/Timeline'
import DateModification from '../components/DateModification'
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Link from 'next/link';

export default function Overtimeform() {
  return (
    <div className='space-y-2'>
        <div className="flex justify-between items-center">
                    {/* left side */}
            <div>
                <h1 className="text-2xl font-semibold">
                    Overtime Request Form
                </h1>
                <p className="text-gray-600 pt-2.5 text-sm font-light">
                    Fill out overtime requests
                </p>
            </div>
            
            {/* right side */}
            <div className='space-x-3'>
                <Link href="/overtime">
                    <button className='btn btn-outline px-6'>
                        Cancel
                    </button>
                </Link>
                <button className="btn btn-primary px-6">
                    Save
                </button>
            </div>
        </div>
        <div className='flex flex-row justify-between gap-6'>
            <div className='min-w-1/2 h-screen border border-gray-200 rounded-lg p-6'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h1 className='font-semibold text-gray-900 text-lg'>Overtime Date</h1>
                    </div>
                    <div className='border border-gray-200 w-[350px] rounded-lg p-4'>
                        <DateModification />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-gray-900 text-lg'>Requested Hours</h1>
                        <label className="input bg-white border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <input type="search" required placeholder="Hours" />
                        </label>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-gray-900 text-lg'>Justification of Overtime</h1>
                        <div className='flex'>
                            <textarea className="textarea bg-white border-gray-200 grow h-[280px]"></textarea>
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
