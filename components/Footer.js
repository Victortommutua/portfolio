import React from 'react'
import Image from "next/image"
function Footer() {
  const socialAccounts = [
    {
      id: 1,
      name: "Whatsapp",
      imageSrc: "/whatsapp.svg",
      imageAlt: "whatsapp",
      href: "",
    },
    {
      id: 2,
      name: "Facebook",
      imageSrc: "/facebook.svg",
      imageAlt: "Facebook",
      href: "https://web.facebook.com/victor.mutua.144?_rdc=1&_rdr",
    },
    {
      id: 3,
      name: "Instagram",
      imageSrc: "/instagram.svg",
      imageAlt: "instagram",
      href: "https://www.instagram.com/victormtom/",
    },
    {
      id: 4,
      name: "Twitter",
      imageSrc: "/twitter2.svg",
      imageAlt: "twitter",
      href: "",
    },
  ]
  return (
    <div className='flex mt-4 bg-gray-500 p-10 min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12'>
      {socialAccounts.map((account)=>(
          <div key={account.id} className='max-w-md w-full pl-3 space-y-8 '>
            <a href={account.href}>
            <Image
            className='rounded-full cursor-pointer'
            width={50}
            height={50}
            src={account.imageSrc}
            alt={account.imageAlt}
            objectFit= "contain"
            />
            </a>
          </div>
      ))}
    </div>
  )
}

export default Footer
