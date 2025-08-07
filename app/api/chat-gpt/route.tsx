import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  //new instance of openAI
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const params = await request.json();
  
  const res = await openai.chat.completions.create({
    model: "gpt-4.1-nano",
    messages: [
        {
            role:"system",
            content: "Respond factually and concisely"
        },

        {
            role:"user",
            content:params.prompt //what the user passes in
        }
    ],
    temperature: 0,
    max_completion_tokens:1024,
    top_p:1,
    frequency_penalty:0,
    presence_penalty:0,
  })

  return NextResponse.json(res);
}
