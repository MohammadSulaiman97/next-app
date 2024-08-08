import Image from "next/image";
import coffee from '@/public/images/coffee.jpg'
import { Metadata } from "next";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello!!</h1>
      {/* <Image 
        src='https://bit.ly/react-cover'
        alt="Coffee" 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw "
        quality={100}
      /> */}
    </main>
  )
}


export async function generateMatedata(): Promise<Metadata>{
  const product = await fetch('');
  return {
    title: 'product.title',
    description: '..'
  }
}
