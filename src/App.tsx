import { useState } from 'react'
import axios from 'axios';
import { NeonGradientCard } from './components/ui/neon-gradient-card';
import { Textarea } from "@/components/ui/textarea"
import TypingAnimation from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import ShimmerButton from "@/components/ui/shimmer-button";
import './App.css'
import { TextAnimate } from "./components/magicui/text-animate";
import Footer from './Footer'

interface Response {
  aiWords: number;
  fakePercentage: number;
  isHuman: number;
  otherFeedback: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [resp, setResp] = useState<Response | null>(null); // Changed to `Response | null`
  const [showResult, setShowResult] = useState<boolean>(false);

  const detect = () => {
    axios
      .post<Response>('https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/', // Adjusted the type here
        { text },
        {
          headers: {
            'x-rapidapi-key': '3fec722dc4msh8c8d8e65a11d28bp1c6100jsn8bef6d8cdae8',
            'x-rapidapi-host': 'ai-content-detector-ai-gpt.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        setResp(response.data); // Response is expected to be a single object
        setShowResult(true);
        setDisabled(false);
      })
      .catch(() => {
        setResp(null);
        setShowResult(false);
        setDisabled(false);
      });
  };

  const handleDetect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    detect();
    setDisabled(true);
  };

  return (
    <>
      <div className="bg-black min-h-screen py-10 max-w-full overflow-hidden">

        <div className=" bg-black relative flex h-auto py-8 gap-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">

          <p className="z-10 whitespace-pre-wrap text-center text-9xl font-medium tracking-tighter text-black dark:text-white">
            <TypingAnimation className="text-white text-6xl">Detectly</TypingAnimation>
          </p>
          <p className="z-10 whitespace-pre-wrap text-center text-md px-4 font-normal max-w-screen-md tracking-tighter text-black dark:text-white">
            <TextAnimate animation="blurIn" as="h3" className='text-white text-xl'>
              "AI or Human? Detect Content Instantly!"
            </TextAnimate>
            <TextAnimate animation="blurIn" as="h4" className='text-gray-300 font-light'>
             
              Ensure authenticity with our powerful AI Content Detector. Paste your text, get real-time results, and uncover whether it’s human-written or AI-generated. Perfect for creators, educators, and businesses who value originality and credibility.
              
            </TextAnimate>
            <TextAnimate animation="blurIn" as="h4" className='text-white font-bold py-3'>
             
              Try It Free Today!
            </TextAnimate>
          </p>

        </div>

        <div className="flex flex-col max-w-full items-center justify-center py-10 md:py-10">
          <div className="relative flex h-48  w-3/4 flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-transparent md:shadow-xl ">
            <Textarea
              placeholder="Enter your input text."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="text-white w-full h-48 outline-none border-none"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>

          <div className={`max-w-xl items-center justify-center text-center mt-10 ${showResult ? 'flex' : 'hidden'}`}>
            {resp && (
              <NeonGradientCard className="max-w-2xl">
                <p className="text-lg text-white font-medium">
                  <span className="font-bold">AI Words Count:</span> {resp.aiWords}
                </p>
                <p className="text-lg text-white font-medium">
                  <span className="font-bold">Human:</span> {resp.isHuman}%
                </p>
                <p className="text-lg text-white font-medium">
                  <span className="font-bold">Fake Percentage:</span> {resp.fakePercentage}%
                </p>
                <p className="text-lg text-white font-medium">
                  <span className="font-bold">Other Feedback:</span> {resp.otherFeedback}
                </p>
              </NeonGradientCard>
            )}
          </div>
          <div className="z-10 flex min-h-64 items-center justify-center">
            <ShimmerButton
              className={`shadow-2xl ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={handleDetect}
              disabled={disabled}
            >
              {disabled ? (
                <div className="flex flex-row gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce [animation-delay:.7s]"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce [animation-delay:.3s]"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce [animation-delay:.7s]"></div>
                </div>
              ) : (
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Detect
                </span>
              )}
            </ShimmerButton>
            
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}


export default App
