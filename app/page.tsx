'use client';
import { useState } from "react";


import dynamic from "next/dynamic";
const HeavyComponent = dynamic(
  () => import('./components/HeavyComponent'),
    { 
      // pre render make it false ssr
      ssr: false,
      loading: () => <p>Loading..</p> 
    }
);

export default function Home() {
  const [isVisible, setVisible]= useState(false);
  return (
    <main>
      <h1>Hello World!</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      { isVisible && <HeavyComponent /> }
    </main>
  )
}


