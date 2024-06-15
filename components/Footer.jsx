import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-transparent md:bg-brand-black-200 pt-7 md:pt-14 md:pb-px'>
      <div className='max-w-6xl mx-auto px-5 lg:px-1.5'>
        <div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-36 pb-5 md:pb-11'>
          <div >
            <Link className='hidden md:block font-outfit text-3xl font-bold uppercase tracking-[2.541px] mb-8 text-white' href={'#'}>
              qwerty
            </Link>
            <div className='flex items-center gap-8'>
              <Link className='relative w-8 h-8 md:w-14 md:h-14 rounded-full overflow-hidden' href={'#'}>
                <svg className='absolute inset-0 size-full object-cover' xmlns="http://www.w3.org/2000/svg" width={56} height={56} viewBox="0 0 56 56" fill="none">
                  <rect width={56} height={56} rx={28} fill="#0F141A" />
                  <path d="M30.8531 26.1263L42.0207 13H39.3738L29.6797 24.3969L21.9332 13H13L24.7124 30.236L13 44H15.6469L25.8858 31.9631L34.0668 44H43L30.8531 26.1263ZM27.2291 30.3866L26.0424 28.6705L16.5997 15.015H20.6649L28.2834 26.0355L29.4701 27.7516L39.376 42.078H35.3109L27.2291 30.3866Z" fill="#FEFEFE" />
                </svg>
              </Link>
              <Link className='relative w-8 h-8 md:w-14 md:h-14 rounded-full overflow-hidden' href={'#'}>
                <Image src={'/telegram.png'} fill alt='' />
              </Link>
              <Link className='relative w-8 h-8 md:w-14 md:h-14 rounded-full overflow-hidden' href={'#'}>
                <svg className='absolute inset-0 size-full object-cover' xmlns="http://www.w3.org/2000/svg" width={56} height={56} viewBox="0 0 56 56" fill="none">
                  <path d="M27.9781 4.17267C14.4539 4.1672 3.5 15.1156 3.5 28.6289C3.5 39.3149 10.3523 48.3984 19.8953 51.7344C21.1805 52.057 20.9836 51.1438 20.9836 50.5203V46.282C13.5625 47.1516 13.2617 42.2406 12.7641 41.4203C11.7578 39.7031 9.37891 39.2656 10.0898 38.4453C11.7797 37.5758 13.5023 38.6641 15.4984 41.6117C16.9422 43.75 19.7586 43.3891 21.1859 43.0336C21.4977 41.7485 22.1648 40.6 23.0836 39.7086C15.3945 38.3305 12.1898 33.6383 12.1898 28.0602C12.1898 25.3531 13.0813 22.8649 14.8313 20.8578C13.7156 17.5492 14.9352 14.7164 15.0992 14.2953C18.2766 14.011 21.5797 16.5703 21.8367 16.7727C23.6414 16.286 25.7031 16.0289 28.0109 16.0289C30.3297 16.0289 32.3969 16.2969 34.218 16.7891C34.8359 16.3188 37.8984 14.1203 40.8516 14.3883C41.0102 14.8094 42.2023 17.5766 41.1523 20.8414C42.9242 22.8539 43.8266 25.3641 43.8266 28.0766C43.8266 33.6656 40.6 38.3633 32.8891 39.7195C33.5495 40.3691 34.0739 41.1437 34.4317 41.9981C34.7894 42.8526 34.9733 43.7698 34.9727 44.6961V50.8484C35.0164 51.3406 34.9727 51.8274 35.793 51.8274C45.4781 48.5625 52.4508 39.4133 52.4508 28.6344C52.4508 15.1156 41.4914 4.17267 27.9781 4.17267Z" fill="white" />
                </svg>
              </Link>
            </div>
          </div>
          <div className='max-w-80 md:max-w-full flex items-center justify-center flex-wrap gap-6 md:grid grid-cols-2 md:gap-y-11 md:gap-x-[75px]'>
            {links.map(link => (
              <Link 
                className='text-sm md:text-lg text-white capitalize hover:text-brand-sky'
                href={link.href} 
                key={link.id}
              >{link.name}</Link>
            ))}
          </div>
        </div>
        <div className='hidden md:block bg-line pt-px'>
          <div className='bg-brand-black-200 py-6'>
            <p className='text-center text-white leading-7'>
            Copyright © 2024 QWERTY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const links = [
  {
    id: 1,
    name: "Tokenomics",
    href: '#'
  },
  {
    id: 2,
    name: "Whitepapers",
    href: '#'
  },
  {
    id: 3,
    name: "About Us",
    href: '#'
  },
  {
    id: 4,
    name: "contact us",
    href: '#'
  },
  {
    id: 5,
    name: "Career",
    href: '#'
  },
  {
    id: 6,
    name: "Career",
    href: '#'
  },
]