/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

function Projects() {
    const projects = [
            {
                id: 1,
                title: "Netflix clone",
                description: "React Js, tmdb API, Styled components, Stripe API",
                href: '#',
                imageSrc: "../netflix.png",
                imageAlt: "Netflix-clone-img.",
              },
              {
                id: 2,
                title: "Hulu 2.0 clone",
                description: "Next Js, Tailwindcss, tmdb API",
                href: '#',
                imageSrc: '../hulu.png',
                imageAlt: "Hulu-clone-img.",
              },
              {
                id: 3,
                title: "Medium Blog clone",
                description: "Typescript, Next Js, Sanity Cms, Tailwindcss",
                href: '#',
                imageSrc: '../medium.png',
                imageAlt: "Medium-blog-clone-img.",
              },
              {
                id: 4,
                title: "Google Search clone",
                description: "Next Js, Google Search Api, Tailwindcss, Pagination",
                href: 'https://google-clone-78guf4oyz-victortommutua.vercel.app',
                imageSrc: '../google.png',
                imageAlt: "Google-search-clone-img.",
              },
              {
                id: 5,
                title: "Twitter clone",
                description: "Next Js, Tailwindcss, NextAuth, Firebase, Recoil",
                href: '#',
                imageSrc: '../twitter.png',
                imageAlt: "Twitter-clone-img.",
              },
              {
                id: 6,
                title: "Airbnb clone",
                description: "Next Js, Tailwindcss, Custom Search",
                href: '#',
                imageSrc: '../airbnb.png',
                imageAlt: "Airbnb-clone-img.",
              },
              {
                id: 7,
                title: "Amazon clone",
                description: "Next Js, Tailwindcss, NextAuth,Fakestore API, Redux, Stripe API",
                href: '',
                imageSrc: '../amazon.png',
                imageAlt: "Amazon-clone-img.",
              },
              {
                id: 8,
                title: "Nft",
                description: "Next-js, Tailwindcss, Metamask, Rinkeby test Network",
                href: 'https://nft-p9a1be3ca-victortommutua.vercel.app/',
                imageSrc: '../nft.png',
                imageAlt: "nft-img.",
              },
              {
                id: 9,
                title: "Twitter-clone-2",
                description: "TypeScript, Tailwindcss, NextAuth, Sanity CMS",
                href: '',
                imageSrc: '../twitter-clone-2.png',
                imageAlt: "Twitter-clone-img.",
              },
    ]
  return (
    <div className='p-10 grid sm:grid-cols-2 md:grid-cols-3 space-x-7'>
    {projects.map((project)=>(           
      <div key={project.id} className='cursor-pointer 
      hover:bg-gray-100 hover:scale-105 shadow-lg
      transform transition duration-300 ease-out '>
          <div className='relative h-100 w-100 grid'>
              <a href={project.href}>
             <img
             loading='lazy'
             className='rounded-md'
             src= {project.imageSrc}
             layout="fill"
             objectfit= "contain"
             alt=""
             />
             <div className='mt-5 bg-gray-100 hover:bg-gray-50'>
          <h3 className='text-lg mt-3 hover:underline font-semibold'>{project.title}</h3>
          <h4 className='text-sm mt-3 text-gray-500'>{project.description}</h4>
          </div>
          </a>
          </div>
      </div>
      ))}
    </div>
  )
}

export default Projects
