import { useState } from "react";
import Modal from "./Modal";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function SearchBar({ onSubmit }){
    
    const [search, setSearch] = useState("Search here...")
    const [selected, setSelected] = useState<Date>();
    const [isOpen, setisOpen] = useState(false);

    return(
        <div className="bg-gray-50 p-4 rounded shadow flex flex-row items-center justify-between">
            <label className="input flex items-center gap-2 bg-white px-3 py-2 rounded border" onSubmit={(e)=>{
                e.preventDefault();
                if(search === ""){
                    return;
                }
                //WANT TO CHANGE TO ON ENTER THE search value is given to the page.tsx and is given to the database etc...
                onSubmit(search);
                setSearch("")
            }}>
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder={search} onClick={(e)=>{
                    e.target.value= "";
                }}/>

                {/* calendar, and filter 
                    NEED TO USE REACT HOOKS FOR POP-UPS
                    AND ALSO NEED TO TAKE INFO FROM FILTER
                    TO FILTER INFO FROM BACKEND AND GET
                */}

            </label>
            
            <div>
                <button className="btn btn-wide" onClick={() => setisOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    Pick Dates
                </button>
                
                <Modal open={isOpen} onClose={() => setisOpen(false)} />

            </div>
        </div>
    );
}