import React from 'react'

export default function Settings() {
  return (
    <div className='flex flex-row justify-between gap-2'>
        <div className='min-w-1/3'>
            <h1 className='text-2xl font-semibold text-gray-900 mb-2 mt-7'>Personal Information</h1>
            <p className='text-md text-gray-500'>Account details.</p>
        </div>

        <div className='min-w-2/3 min-h-screen border border-gray-200 rounded-lg p-4 space-y-8 overflow-auto'>
            <div className='p-4 flex flex-row items-center'>
                <div className="avatar mr-10">
                    <div className="w-30 rounded">
                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                </div>
                
                <div>
                    <button className='btn btn-neutral'>
                        Change avatar
                    </button>
                    <p className='text-sm text-gray-500 mt-2'>JPG, GIF or PNG. 1MB max.</p>
                </div>
            </div>

            <div className='flex flex-row items-center justify-between gap-3'>
                <div className='basis-1/2'>
                    <fieldset className="fieldset flex">
                        <legend className="fieldset-legend text-lg font-semibold text-gray-900">First name</legend>
                        <input type="text" className="input border border-gray-200 bg-gray-50 rounded-lg grow" placeholder="Type here" />
                    </fieldset>
                </div>

                <div className='basis-1/2'>
                    <fieldset className="fieldset flex">
                        <legend className="fieldset-legend text-lg font-semibold text-gray-900">Last name</legend>
                        <input type="text" className="input border border-gray-200 bg-gray-50 rounded-lg grow" placeholder="Type here" />
                    </fieldset>
                </div>
            </div>

            <div>
                <div>
                    <fieldset className="fieldset flex">
                        <legend className="fieldset-legend text-lg font-semibold text-gray-900">Email address</legend>
                        <input type="text" className="input border border-gray-200 bg-gray-50 rounded-lg grow" placeholder="Type here" />
                    </fieldset>
                </div>
            </div>
            
            <div>
                <div>
                    <fieldset className="fieldset flex">
                        <legend className="fieldset-legend text-lg font-semibold text-gray-900">Username</legend>
                        <input type="text" className="input border border-gray-200 bg-gray-50 rounded-lg grow" placeholder="Type here" />
                    </fieldset>
                </div>
            </div>

            <div>
                <div>
                    <fieldset className="fieldset flex">
                        <legend className="fieldset-legend text-lg font-semibold text-gray-900">Company</legend>
                        <input type="text" disabled={true} className=" border border-gray-200 bg-gray-50 rounded-lg grow text-lg font-semibold p-2" placeholder="ZAZU Sensor" />
                    </fieldset>
                </div>
            </div>

            <div>
                <button className='btn btn-primary'>
                    Save
                </button>
            </div>

            

        </div>

    </div>
  )
}
