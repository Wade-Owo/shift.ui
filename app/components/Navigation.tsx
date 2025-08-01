'use client'
import Link from "next/link";
import { useState } from "react";


export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <aside className="w-64 h-screen flex flex-col space-y-4 bg-gray p-4 text-black shadow">
        <ul className="menu menu-vertical justify-items-center">
            <li className="pb-30">
                <button>
                    <Link href='/'>
                        <h1 className="flex items-center space-x-2 text-3xl text-bold">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-7"> 
                                <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <span className="text-4xl">Shifts</span>     
                        </h1>
                    </Link>
                </button>
            </li>
            <li>
                <button>
                    <Link href='/dashboard'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="size-5">
                                <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>
                            <span className="text-base">Dashboard</span>
                        </h2>
                    </Link>
                </button>
            </li>
            <li className="pt-3">
                <div className="dropdown hover:bg-blue-100">
                    <div role="button"
                    onClick={() => setOpen(!open)} 
                    className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="size-5">
                                <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <span className="text-base">Time Requests</span>
                        </div>
                        <div className="pl-5">
                            {open ? 
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>) : 
                                
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>)
                            }
                        </div>
                    </div>

                    {open && <ul className="menu mt-2 ml-6 space-y-1">
                        <li>
                            <Link href='/leave' className="block text-sm px-2 py-1">
                                Leave
                            </Link>
                        </li>
                        <li>
                            <Link href='/overtime' className="block text-sm px-2 py-1">
                                Overtime
                            </Link>
                        </li>
                    </ul>}
                </div>
            </li>

            {/* messages */}

            <li className="pt-3">
                <button>
                    <Link href='/messages'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span className="text-base">Messages</span>
                        </h2>
                    </Link>
                </button>
            </li>
            
            {/* Timesheets */}
            <li className="pt-3">
                <button>
                    <Link href='/timesheets'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                            </svg>
                            <span className="text-base">Timesheets</span>
                        </h2>
                    </Link>
                </button>
            </li>
            

            {/* Calendar */}
            
            <li className="pt-3">
                <button>
                    <Link href='/calendar'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            <span className="text-base">Calendar</span>
                        </h2>
                    </Link>
                </button>
            </li>
            

            {/* Documents */}
            
            <li className="pt-3">
                <button>
                    <Link href='/documents'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            <span className="text-base">Documents</span>
                        </h2>
                    </Link>
                </button>
            </li>
        
            {/* Line */}

            <hr className="w-48 h-0.5 mx-auto my-4 bg-gray-200 border-0 md:my-10"></hr>

            {/* chat */}
            
            <li className="pt-3">
                <button>
                    <Link href='/chat'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>


                            <span className="text-base">Chat</span>
                        </h2>
                    </Link>
                </button>
            </li>


            {/* settings */}
            
            <li className="pt-3">
                <button>
                    <Link href='/settings'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="text-base">Settings</span>
                        </h2>
                    </Link>
                </button>
            </li>
            

            {/* Logout */}
                
            <li className="pt-3">
                <button>
                    <Link href='/log-out'>
                        <h2 className="flex items-center space-x-2">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-5">
                                <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>

                            <span className="text-base">Log Out</span>
                        </h2>
                    </Link>
                </button>
            </li>


            {/* fixed to the bottom is the profile */}
            
            {/* use state variable like 'isloggedin' and if not it shows default, if the user is then pull user photo, name and email*/}

            <li className="absolute bottom-0 left-0 pb-5 pl-3">
                <button>
                    <Link href='/profile'>
                        <div className="flex items-center space-x-2 text-3xl text-bold">   
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                    {/* name and email of user */}
                                </div>
                            </div>
                            <div className="flex flex-col">  
                                <h2 className="text-lg pt-0.5 pl-5 text-black">Bot</h2>
                                <p className="text-sm text-gray-400 pl-5">email@email.com</p>
                            </div>
                        </div>
                    </Link>
                </button>
            </li>

        </ul>
    </aside>
  )
}


