
import { Inter } from '@next/font/google'
import Image from 'next/image'
import banner from "../assest/home/Banner/slider-1.webp"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Image src={banner} width="100%" height="100%" alt='banner' />
    </main>
  )
}
