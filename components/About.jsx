import React from 'react'

export const About = () => {
  return (
    <section className='max-w-6xl md:h-[604px] flex items-center justify-end relative mx-auto px-5 md:px-1.5 py-8 mb-24 md:mb-40'>
      <div className='absolute left-0 opacity-60 z-10 w-56 h-56 md:w-[604px] md:h-[604px] rounded-full bg-brand-red-100 blur-[100px] md:blur-[227.77777099609375px]'></div>
      <div className='relative z-20 text-center sm:text-left sm:pr-12 md:pr-28'>
        <p className='max-w-[555px] text-white text-4xl md:text-[63.611px] leading-normal capitalize'>
        Hire talents, <span className='italic'>buy e-books</span> and pay with cryptos.
        </p>
      </div>
    </section>
  )
}
