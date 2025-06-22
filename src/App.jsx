import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function App() {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl font-bold underline text-red-500'>Hello World</h1>
    </div>
  )
}
