'use client';
import { useEffect, useState } from 'react';
export function ScrollProgress() { const [progress,setProgress]=useState(0); useEffect(()=>{const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?(window.scrollY/max)*100:0)};update();addEventListener('scroll',update,{passive:true});return()=>removeEventListener('scroll',update)},[]); return <div className="scroll-progress" aria-hidden="true"><i style={{transform:`scaleX(${progress/100})`}}/></div>; }
