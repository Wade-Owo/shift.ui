'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Messages() {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  return (
    <div>
        <main className="p-6 space-y-25">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Company Messages
                    </h1>
                    <p className="text-gray-600 pt-2.5 text-sm font-light">
                        View company messages & announcements
                    </p>
                </div>
            </div>

            {/* Search and filter */}
            <div className='bg-white rounded-lg border border-gray-300 shadow-md'>
                <div className='p-4'>
                    <div className='flex flex-wrap gap-4 items-center'>
                        <div className='form-control flex-1 min-w-64'>
                            <input 
                                type="text"
                                placeholder='Search Messages...'
                                className='input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        {/* priority filter */}
                        <div className='form-control'>
                            <select 
                                className='select select-bordered bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white'
                                value={priority}
                                onChange={(e)=>{setPriority(e.target.value)}}
                            >
                                <option value="all">All Priorites</option>
                                <option value="high">High Priority</option>
                                <option value="medium">Medium Priority</option>
                                <option value="low">Low Priority</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* message list */}
            <div className='space-y-3'>
                <div className='bg-white rounded-lg border border-gray-200 shadow-sm border-l-4 hover:shadow-md transition-shadow'>
                    <div className='card-body p-6'>
                        <div className='flex items-start justify-between gap-4'>
                            <div className='flex-1'>
                                <span className="text-xl">Message</span>
                                <h3 className="card-title text-lg">
                                Company Stocks
                                <div className="badge badge-secondary badge-sm">New</div>
                                </h3>
                            </div>
                            <p className='text-gray-700 mb-4 leading-relaxed'>
                                Message Information
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
  )
}
