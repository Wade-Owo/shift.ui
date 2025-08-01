'use client'
import { use, useState } from "react";
import Link from "next/link";
import Overtimetable from "../components/Overtimetable";
import SearchBar from "../components/SearchBar";
import { PassThrough } from "stream";

export default function Overtime() {


  return (
        <div className="bg-white text-black">
            <main className="p-6 space-y-25">
                <div className="flex justify-between items-center">
                    {/* left side */}
                    <div>
                        <h1 className="text-2xl font-semibold">
                            Overtime Request
                        </h1>
                        <p className="text-gray-600 pt-2.5 text-sm font-light">
                            Make overtime requests and view previous requests' status.
                        </p>
                    </div>
                    
                    {/* right side */}
                    <div>
                        <button className="btn btn-primary">
                            <Link href='/overtime-request-form'>
                                <h1 className="flex items-center space-x-2">
                                    <span>New Overtime Request</span>   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </h1>
                            </Link>
                        </button>
                    </div>
                </div>
                    <SearchBar 

                        onSubmit={async ()=>{
                            // pass the search to the database so that the the choice reduce 
                        }}
                    />
                <div>
                    {/* Dynamic table, will become dynamic once the backend has started*/}
                    <Overtimetable />
                </div> 
            </main>
        </div>
  )
}
