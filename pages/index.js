import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
export default function Home() {
  //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
  return (
    <div>
      <Head> 
        <title>portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Profile/>
      <Skills/>
      <div className='mx-auto items-center text-center'>
      <p className='text-2xl font-extrabold tracking-tight text-gray-900'>Projects</p>
      </div>
      <Projects/>
      <Contact/>
      <Footer/>
      <div className='bg-gray-500 text-center'>
        <h4>{Date("YYY")} All Rights Reserved <span className='hover:text-white'>sirvic.co.ke</span></h4>
      </div>
    </div>
  )
}
