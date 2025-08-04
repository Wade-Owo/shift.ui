'use client'
import { use, useState } from "react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import Leavetable from "../components/Leavetable";

export default function Leave() {
  return (
        <div className="bg-white text-black">
            <main className="p-6 space-y-10">
                <div className="flex justify-between items-center">
                    {/* left side */}
                    <div>
                        <h1 className="text-2xl font-semibold">
                            Leave
                        </h1>
                        <p className="text-gray-600 pt-2.5 text-sm font-light">
                            Make leave requests and view previous requests' status.
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
                                    <span>New Leave Request</span>   
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
                    <Leavetable />
                </div> 
            </main>
        </div>
  )
}
