'use client'
import React, { useState } from 'react'
import Chatbar from '../components/Chatbar';
import { v4 as uuidv4 } from 'uuid'

//define a structure for each chat message
type Message = {
  id: string;
  role: "user" | "system";
  text:string;
};

export default function Chat() {

  const [isLoading, setisLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleChatEnter = async (prompt: string) => {
    if(prompt === "") return;

    //create the user message and add it to the message list
    const userMsg: Message = { id: uuidv4(), role:"user", text: prompt };
    setMessages((m) => [...m, userMsg]);

    //start loading
    setisLoading(true);

    //send POST request
    try{
      const res = await fetch("../api/chat-gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      //if the reponse is good
      if(!res.ok){
        throw new Error(`API error ${res.status}`)
      }

      const result = await res.json();
      //gettin chatgpt's response, "??"(fall back if null or undefined) for both openAI message.content and plain text
      const chatText = result.choices?.[0]?.message.content ?? result.choices?.[0]?.text ?? "No answer";
      
      //creating chatgpt's message
      const chatMessage: Message = {
        id: uuidv4(),
        role: "system",
        text: chatText,
      }

      //adding the message to the chat history
      setMessages((m) => [...m, chatMessage]);

    }catch (err){
      console.error("Fetch failed: ", err);
      const errMsg: Message = {
        id: uuidv4(),
        role: "system",
        text: "Unable to answer right now, Sorry!",
      };
      setMessages((m) => [...m, errMsg]);
    } finally{
      setisLoading(false);
    }

  } 

  
  return (
    <div className='border border-gray-200 h-full rounded-lg relative'>
        
        <div className='overflow-auto flex-1 p-4 space-y-4'>
          {messages.map((msg) => (
            <div
            key={msg.id}
            className={`chat ${msg.role === "system" ? "chat-start" : "chat-end"}`}> 
            {/* chatgpt on left and user on right */}
              <div className='chat-bubble'>
                {msg.text.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                      {line}
                      <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className='chat chat-start'>
              <div className='chat-bubble loading'>...</div>
            </div>
          )}
        </div>

        <div className='bg-white border-t border-gray-200'>
          <Chatbar isLoading={isLoading} onEnter={handleChatEnter}/>
        </div>
          
    </div>
  )
}
