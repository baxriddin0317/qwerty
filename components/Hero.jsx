import React from 'react'

export const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto px-12 md:px-1.5 py-36'>
      <div className='flex flex-col gap-6 md:pl-14'>
        <button className='sm:w-52 max-h-16 text-lg md:text-xl border border-brand-white bg-brand-white rounded-xl px-3 md:px-8 py-5'>
          Buy Qwerty
        </button>
        <button className='sm:w-52 max-h-16 text-lg md:text-xl border border-brand-white bg-brand-white rounded-xl px-3 md:px-8 py-5'>
        Hire Talents
        </button>
        <button className='sm:w-52 max-h-16 text-lg md:text-xl border border-brand-white bg-brand-white rounded-xl px-3 md:px-8 py-5'>
        Buy E-Books
        </button>
      </div>
    </section>
  )
}