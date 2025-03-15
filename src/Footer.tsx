import { useState } from 'react'
import axios from 'axios';
import { NeonGradientCard } from './components/ui/neon-gradient-card';
import { Textarea } from "@/components/ui/textarea"
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import ShimmerButton from "@/components/ui/shimmer-button";
import './App.css'
import { TextAnimate } from "./components/magicui/text-animate";

function App() {
    return (
        <>
            <div className='text-gray-300 max-w-3xl flex flex-col justify-center text-center px-4 md:px-1'>

                <div className='font-bold text-3xl py-2'>
                    Why Choose Detectly?
                </div>
                <div className='text-gray-400 font-light'>
                    <ul>
                        <li>
                            Authenticity Guaranteed: Ensure your content is 100% human-written and free from AI influence.
                        </li>
                        <li>
                            Real-Time Results: Paste your text, and within seconds, get a precise probability score of AI involvement.
                        </li>
                        <li>
                            Detailed Insights: Receive clear, percentage-based reports to understand your content's origin.
                        </li>
                        <li>
                            Unlimited Scans: Analyze as much content as you need—no restrictions, no limits.
                        </li>
                    </ul>
                </div>

                <div className='font-bold text-3xl pt-8 py-2'>
                    Who Benefits?
                </div>

                <div className='text-gray-400 font-light'>
                <ul>
                        <li>
                        Content Creators: Maintain originality and stand out in a world of AI-generated material.

                        </li>
                        <li>
                        Educators: Verify student submissions for true authorship.
                        </li>
                        <li>
                        Marketers & Businesses: Protect your brand’s credibility by publishing authentic content.
                        </li>
                    </ul>
                    
                    

                    

                </div>


                <div className='font-bold text-3xl pt-8 py-2'>
                    How It Works ?
                </div>
                <div className='text-gray-400 font-light'>
                    Paste your text into our intuitive interface.

                    Let our advanced algorithms analyze linguistic patterns and structures.

                    Instantly uncover whether it’s human-crafted or AI-generated.
                </div>

                <div className='font-bold text-2xl pt-10 py-2'>
                    Your Content, Your Integrity
                </div>
                <div className='text-gray-400 font-light'>
                    In an era of AI-driven content, trust is everything. Our tool empowers you to uphold ethical standards, avoid plagiarism risks, and build credibility with your audience.
                </div>

            </div>
            <div className='flex space-x-1 justify-center mt-20 bottom-0'>
                <p className='text-gray-400 opacity-70'>Made with ❤️ by</p>
                <a className="text-center text-md text-gray-400 opacity-70" href='https://github.com/Shreyansh7676'>Shreyansh</a>
            </div>

        </>
    );
}


export default App
