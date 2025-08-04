import Link from 'next/link'
import React from 'react'

export default function Timesheets() {

  const data = [
    { date: "August 1st, 2025", project: "Zion", task: "ML & WB", start: "9:00 AM", end: "6:00 PM", duration: 9, status: "Approved" },
    { date: "July 1st, 2025", project: "Building Network", task: "Travel trip", start: "8:00 AM", end: "5:00 PM", duration: 9, status: "Submitted" },
    { date: "June 1st, 2025", project: "Oregon State", task: "Communicating with clients", start: "8:00 AM", end: "2:00 PM", duration: 6, status: "Approved" },
  ];
  return (
    <div>
        <main className="p-6 space-y-10">
            <div className="flex justify-between items-center">
                {/* left side */}
                <div>
                    <h1 className="text-2xl font-semibold">
                        Timesheets
                    </h1>
                    <p className="text-gray-600 pt-2.5 text-sm font-light">
                        Track and manage your working hours
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

                                <span>New Entry</span>
                            </h1>
                        </Link>
                    </button>
                </div>
            </div>

            {/* stats: Today, this week, this month, overtime */}

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
                    {/* Today */}
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className="text-sm text-gray-600">Today</p>
                            <p className="text-2xl font-semibold">9h</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Week */}
                <div className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-gray-600 text-sm'>This Week</p>
                            <p className='font-semibold text-2xl'>40h</p>
                        </div>
                        <div className='w-10 h-10 bg-green-50 border border-green-200 rounded-full flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Month */}
                <div className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-gray-600 text-sm'>This Month</p>
                            <p className='font-semibold text-2xl'>160h</p>
                        </div>
                        <div className='w-10 h-10 bg-purple-50 border border-purple-200 rounded-full flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-purple-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* overtime */}
                <div className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
                    <div className='flex items-center justify-between'>
                         <div>
                            <p className='text-gray-600 text-sm'>Overtime</p>
                            <p className='font-semibold text-2xl'>1.5h</p>
                        </div>
                        <div className='w-10 h-10 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-orange-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
                            </svg>

                        </div>
                    </div>
                </div>

            </div>

            {/* current time working */}

            <div className='border border-blue-200 rounded-lg transition-shadow p-4 bg-blue-50 shadow-sm'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div aria-label="success" className="status status-success w-3 h-3 mr-4 animate-pulse"></div>
                        <div>
                            <p className='text-xl font-semibold'>Currently Working</p>
                            <p className='text-gray-500 tex-sm'>Project ZAZU - Machine Learning and Web Dev</p>
                        </div>
                    </div>
                    <div>
                        <span className="countdown font-mono text-2xl font-bold">
                            <span style={{"--value":10} as React.CSSProperties } aria-live="polite">10</span>:
                            <span style={{"--value":24} as React.CSSProperties } aria-live="polite">24</span>:
                            <span style={{"--value":59} as React.CSSProperties } aria-live="polite">59</span>
                        </span>
                        <p>Started at 8:00 AM</p>
                    </div>
                    <div className='m-3'>
                        <button className='btn btn-outline mr-2'>Pause</button>
                        <button className='btn btn-error'>Stop</button>
                    </div>
                </div>
            </div>

            {/* filters */}
            <div className='bg-gray-200 rounded-lg transition-shadow p-4'>
                <div className='flex flex-wrap gap-4 items-center justify-between'>
                    <div className='flex flex-wrap gap-4 items-center'>
            
                        <div className='form-control'>
                            <label className='label py-1'>
                                <span className='text-gray-600 label-text text-xs'>Date Range</span>
                            </label>
                            <select className='select select-bordered select-sm bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'>
                                <option value="This Week">This Week</option>
                                <option value="Last Week">Last Week</option>
                                <option value="This Month">This Month</option>
                                <option value="Last Month">Last Month</option>
                            </select>
                        </div>

                        <div className='form-control'>
                            <label className='label py-1'>
                                <span className='text-gray-600 label-text text-xs'>Project</span>
                            </label>
                            <select className='select select-bordered select-sm bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'>
                                <option value="All Projects">All Projects</option>
                                <option value="Project 1">Project 1</option>
                                <option value="Project 2">Project 2</option>
                                <option value="Project 3">Project 3</option>
                            </select>
                        </div>

                        <div className='form-control'>
                            <label className='label py-1'>
                                <span className='text-gray-600 label-text text-xs'>Status</span>
                            </label>
                            <select className='select select-bordered select-sm bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'>
                                <option value="All Statuses">All Statuses</option>
                                <option value="Approved">Approved</option>
                                <option value="Awaiting">Awaiting</option>
                                <option value="Denied">Draft</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <button className='btn btn-outline mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            Export
                        </button>
                        <button className='btn btn-primary'>Submit Week</button>
                    </div>

                </div>
            </div>

            {/* table that will turn dynamic when the backend works*/}

            {/* to clip content that overflows in within the table  */}
            <div className='border border-bg-gray-200 rounded-lg overflow-hidden'>
                {/* but in the case of the need to scroll horizontally "overflow-x-auto" */}
                <div className='overflow-x-auto'>
                    <table className='table w-full'>
                        <thead>
                            <tr className='bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 text-left px-4 py-3'>
                                <th>Date</th>
                                <th>Project</th>
                                <th>Task</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Duration</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-gray-100'>
                            {data.map((val, key) => {
                                return(
                                    <tr key={key} className='px-4 py-3'>
                                        <td>{val.date}</td>
                                        <td>{val.project}</td>
                                        <td>{val.task}</td>
                                        <td>{val.start}</td>
                                        <td>{val.end}</td>
                                        <td>{val.duration}h</td>
                                        <td>{val.status}</td>
                                        <td>
                                            <div className='flex gap-1'>
                                                <button className='btn btn-ghost'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                    </svg>
                                                </button>
                                                <button className='btn btn-ghost text-red-500'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* weekly summary */}
            <div className='border border-bg-gray-200 bg-white p-4 rounded-lg'>
                <p className='text-lg font-semibold'>Weekly Summary</p>
                {/* could do md:grid-cols-3, so it only does that for medium screens */}
                <div className='grid grid-cols-3 gap-4'>
                    <div className='text-center p-4 bg-gray-100 border-gray-200 rounded-lg'>
                        <p className='text-2xl text-blue-500 font-bold flex-1'>{data.reduce((n, {duration}) => n + duration, 0)}h</p>
                        <p className='text-gray-600'>Regular Hours</p>
                    </div>
                    <div className='text-center p-4 bg-gray-100 border-gray-200 rounded-lg'>
                        <p className='text-2xl text-red-500 font-bold flex-1'>1.5h</p>
                        <p className='text-gray-600'>Overtime</p>
                    </div>
                    
                    <div className='text-center p-4 bg-gray-100 border-gray-200 rounded-lg'>
                        <p className='text-2xl text-green-500 font-bold flex-1'>25.5h</p>
                        <p className='text-gray-600'>Total Hours</p>
                    </div>
                </div>
            </div>

        </main>
    </div>
  )
}


