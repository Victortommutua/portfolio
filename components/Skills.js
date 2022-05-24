/* eslint-disable @next/next/no-img-element */


const technologies = [
    {
      id: 1,
      href: 'https://reactjs.org/',
      imageSrc: '../react.svg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
        {
      id: 2,
      href: 'https://nextjs.org/',
      imageSrc: '../nextjs.svg',
      imageAlt: "next-js",
    },
    {
        id: 3,
        href: 'https://tailwindcss.com/',
        imageSrc: '../tailwind.svg',
        imageAlt: "tailwindcss",
      },
      {
        id: 4,
        href: 'https://firebase.google.com/',
        imageSrc: '../firebase.svg',
        imageAlt: "firebase",
      },

      {
        id: 5,
        href: 'https://www.mongodb.com/',
        imageSrc: '../mongodb.svg',
        imageAlt: "mongo db",
      },
      {
        id: 6,
        href: 'https://redux.js.org/',
        imageSrc: '../redux.svg',
        imageAlt: "redux",
      },
      {
        id: 7,
        href: 'https://nodejs.org/',
        imageSrc: '../node-js.svg',
        imageAlt: "node js",
      },
      {
        id: 9,
        href: '../api/hello',
        imageSrc: '../rest-api.svg',
        imageAlt: "rest-api",
      },
      {
        id: 10,
        href: 'https://www.php.net/',
        imageSrc: '../php.svg',
        imageAlt: "php",
      },
      {
        id: 11,
        href: 'https://stripe.com/',
        imageSrc: '../stripe.svg',
        imageAlt: "stripe",
      },
      {
        id: 12,
        href: 'https://en.wikipedia.org/wiki/HTML5',
        imageSrc: '../html.svg',
        imageAlt: "html",
      },
      {
        id: 13,
        href: 'https://www.w3schools.com/js/',
        imageSrc: '../js.svg',
        imageAlt: "html",
      },
  ]
  
  export default function Skills() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Favorite Technologies <span>💝</span>  </h2>
  
          <div className="mt-6 gap-y-10 gap-x-6 flex overflow-scroll scrollbar-hide">
            {technologies.map((technology) => (
              <div key={technology.id} className="group relative">
                <div className="h-40 w-40 bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden 
                hover:bg-gray-300 lg:aspect-none cursor-pointer hover:shadow-xl  space-x-3
                hover:scale-105 transform transition duration-300
                ease-out">
                    <a href={technology.href}>
                  <img
                    loading="lazy"
                    src={technology.imageSrc}
                    className="w-100 h-40 object-center object-cover"
                    alt={technology.imageAlt}
                  />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="font-bold">swipe left</p>
        </div>
      </div>
    )
  }