'use client'
import React, { useState } from 'react'

type Chatbarprops = {
    onEnter: (prompt: string) => void;
    isLoading: boolean;
};

export default function Chatbar({ onEnter, isLoading }) {
    const [prompt, setPrompt] = useState("");
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            e.preventDefault();
            setPrompt(e.currentTarget.value);

            if(prompt === ""){
                return;
            };

            onEnter(prompt);
            setPrompt("");
        }
    };

  return (
    <div>
        <label className="input bg-white absolute bottom-0 min-w-full border flex items-center border-gray-200 gap-2 px-3 py-2">
            <svg className="h-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            <input 
            className='flex-1 outline-none bg-transparent'
            type="search" 
            required 
            disabled={isLoading}
            value={prompt}
            onChange={(e) => {setPrompt(e.target.value)}}
            onKeyDown={handleKeyDown}
            placeholder='How can I help you today?'
            onClick={(e) => {(e.target as HTMLInputElement).value = ''}}/>
        </label>
    </div>
  )
}
