import Link from 'next/link'
import React from 'react'
import OvertimeFiles from '../components/OvertimeFiles'
import LeaveFiles from '../components/LeaveFiles'

export default function Documents() {
  return (
    <div className='flex flex-row justify-between gap-2'>
        
        {/* file upload */}
        <div className='min-w-1/2 min-h-screen border border-gray-200 rounded-lg flex items-center justify-center'>
                <h1 className='text-3xl fixed top-10 font-semibold'>Upload your file</h1>
                <div className='form-control fixed top-20 flex items-center justify-between gap-2 mt-3'>
                    <label className='label py-1'>
                        <span className='text-gray-600 label-text text-xs'>Select Folder</span>
                    </label>
                    <select className='select select-bordered select-sm bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'>
                        <option value="Overtime Requests">Overtime Requests</option>
                        <option value="Leave Requests">Leave Requests</option>
                    </select>
                </div>
                <div className='min-w-3/4 min-h-3/4 border border-gray-200 bg-gray-200 rounded-lg flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15 animate-bounce">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                    </svg>
                </div>
        </div>
        
        {/* folders */}
        <div className='min-w-1/2'>
            <div className='flex flex-col justify-between gap-20 p-3 min-h-1/2'>
                {/* Overtime files */}
                <div className='min-w-1/2 border border-gray-200 rounded-lg p-6'>
                    <OvertimeFiles />
                </div>
                
                {/* Leave files */}
                <div className='min-w-1/2 border border-gray-200 rounded-lg p-6'>
                    <LeaveFiles />
                </div>

            </div>
        </div>
    </div>
  )
}