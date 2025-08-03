'use client'
import Link from "next/link"
import { StaticImageData } from 'next/image';
import vacation_image from "../../public/Vacation_image.png"
import { useEffect } from "react";
import Countdown from "../components/Countdown";
import "cally";

export default function Dashboard() {


  return (
    <div>
      <div className="flex flex-col min-h-screen">
          <main className="p-6 space-y-25">
            {/* Label */}
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-4xl font-semibold">
                        Dashboard
                    </h1>
                </div>
            </div>
          </main>

          <div className="flex flex-row">

              <div>
              {/* Calendar title */}
                <div className="breadcrumbs text-m mb-3 text-3xl font-semibold">
                  <ul>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      Calendar</li>
                    <li></li>
                  </ul>
              </div>

              {/* Calendar */}
              
              <div className="card bg-base-200 w-96 shadow-xl/50">
                <figure className="px-10 pt-10">
                  <calendar-date class="cally border bg-white text-black shadow-lg rounded-box">
                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    <calendar-month></calendar-month>
                  </calendar-date>
                </figure>
                <div className="card-body items-center text-center text-white">
                  <h2 className="card-title">Check Upcoming Events</h2>
                  <div className="card-actions">
                    <Link href='/calendar'>
                      <button className="btn btn-outline btn-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        My Calendar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto mr-40">
              {/* timeoff title */}
              <div className="breadcrumbs text-m mb-3 text-3xl font-semibold">
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Time Off</li>
                  <li></li>
                </ul>
              </div>

              {/* PTO remaining */}
              <div className="card bg-base-200 w-96 shadow-xl/50">
                <figure className="px-10 pt-10">
                  <img
                    src={vacation_image.src}
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-white">
                  <h2 className="card-title">PTO Remaining
                  {/* Need to eventually make this sync with the actual PTO remaining */}
                  <div className="badge badge-neutral">70h</div>
                  </h2>
                  <div className="card-actions">
                    <Link href='/leave'>
                      <button className="btn btn-outline btn-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                        Request Time Off
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
          <div className="flex flex-row">
            <div>
              {/* holiday title */}
              <div className="breadcrumbs text-m mb-3 mt-12 text-3xl font-semibold">
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
                    </svg>
                    Upcoming Holiday</li>
                  <li></li>
                </ul>
              </div>

              {/* Holidays */}
              <div className="card w-96 bg-base-100 card-md shadow-xl/50 mb-2">
                <div className="card-body text-white">
                  <h2 className="card-title"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    Labor Day
                  </h2>
                  <p>
                      Monday, Sep 1st
                  </p>
                  <div className="justify-end card-actions">
                    {/* <button className="badge badge-secondary">Coming soon</button> */}
                      <Countdown />
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto mr-40">
                <div className="breadcrumbs text-m mb-3 mt-12 text-3xl font-semibold">
                  <ul>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                      </svg>
                      Messages</li>
                    <li></li>
                  </ul>
                </div>


                {/* messages */}
                <div className="h-30 overflow-x-auto w-96 shadow-xl/50">
                  <table className="table table-pin-rows ">
                    <thead>
                      <tr>
                        <th>Inbox</th>
                      </tr>
                    </thead>
                    <tbody className="text-lg">
                      {/* display the messages in inbox eventually */}
                      <tr><td>Manager one</td></tr>
      
                    </tbody>
                  </table>
                </div>

            </div>

          </div>

          
      </div>


      {/* Bottom of the page */}

      {/* Link to the chatBot */}
      <Link href="/chat">
        <div className="avatar fixed bottom-0 right-0 duration-100 animate-bounce">
          <div className="w-24">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </div>
        </div>
      </Link>

    </div>
  )
}
