import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='bg-brand-red py-5'>
      <div className='max-w-6xl flex items-center justify-between gap-2 mx-auto px-5 lg:px-1.5 py-1'>
        <div className='flex items-center gap-3'>
          {/* humburger btn */}
          <button className='md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={14} viewBox="0 0 20 14" fill="none">
              <path d="M-0.000577927 13.005C-0.000577927 13.555 0.445423 14 0.994423 14H9.00442C9.26831 14 9.52139 13.8952 9.70799 13.7086C9.89459 13.522 9.99942 13.2689 9.99942 13.005C9.99942 12.7411 9.89459 12.488 9.70799 12.3014C9.52139 12.1148 9.26831 12.01 9.00442 12.01H0.994423C0.444424 12.01 -0.000577927 12.455 -0.000577927 13.005ZM-0.000577927 7C-0.000577927 7.55 0.445423 7.995 0.994423 7.995H19.0044C19.2683 7.995 19.5214 7.89017 19.708 7.70357C19.8946 7.51697 19.9994 7.26389 19.9994 7C19.9994 6.73611 19.8946 6.48303 19.708 6.29643C19.5214 6.10983 19.2683 6.005 19.0044 6.005H0.994423C0.444424 6.005 -0.000577927 6.451 -0.000577927 7ZM0.994423 1.99C0.730534 1.99 0.477451 1.88517 0.290852 1.69857C0.104254 1.51197 -0.000577927 1.25889 -0.000577927 0.995C-0.000577927 0.731109 0.104254 0.478027 0.290852 0.291429C0.477451 0.10483 0.730534 7.86455e-09 0.994423 0H13.0044C13.1351 -3.89413e-09 13.2645 0.0257364 13.3852 0.0757399C13.5059 0.125743 13.6156 0.199034 13.708 0.291429C13.8004 0.383823 13.8737 0.493511 13.9237 0.61423C13.9737 0.734949 13.9994 0.864335 13.9994 0.995C13.9994 1.12567 13.9737 1.25505 13.9237 1.37577C13.8737 1.49649 13.8004 1.60618 13.708 1.69857C13.6156 1.79097 13.5059 1.86426 13.3852 1.91426C13.2645 1.96426 13.1351 1.99 13.0044 1.99H0.994423Z" fill="#FEFEFE" />
            </svg>
          </button>
          {/* logo */}
          <Link className='text-xl md:text-[51.68px] md:tracking-[3.101px] text-white' href={'#'}>
            QWERTY
          </Link>
        </div>
        {/* btns */}
        <div className='flex items-center gap-3 md:gap-5'>
          <button className='hidden md:flex h-14 text-lg items-center justify-center bg-brand-yellow rounded-xl px-8'>
            BNB Chain
          </button>
          <button className='flex md:hidden h-10 md:h-14 items-center justify-center gap-1 bg-brand-white rounded-xl px-3 md:px-8'>
            BNB
            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
              <path d="M12.0416 7.08333L8.49998 10.625L4.95831 7.08333" stroke="#030303" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className='flex gap-1.5 h-10 md:h-14 md:text-lg items-center justify-center bg-brand-sky rounded-xl px-3 md:px-8'>
            Connect <span className='hidden md:block'>Wallet</span>
          </button>
        </div>
      </div>
    </header>
  )
}
