import React, { useState } from 'react'
import DateModification from './DateModification';

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    //z-10 fixes the issue of the table appearing with the calendar popup, however there might be a better way.
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20":"invisible"} z-10`}>
        <div className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <DateModification />
            <button onClick={onClose} className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            </button>
        </div>
    </div>
  )
}
