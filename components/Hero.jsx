import React from 'react'

export const Hero = () => {
  return (
    <section className='px-12 py-36'>
      <div className='flex flex-col gap-6 md:pl-14'>
        <button className='sm:w-52 max-h-16 text-lg md:text-xl border border-brand-white bg-brand-white rounded-xl p-3'>
          Buy Qwerty
        </button>
        <button className='w-full sm:w-64 max-h-14 text-lg border border-brand-white bg-brand-white rounded-xl p-3'>
        Hire Talents
        </button>
        <button className='w-full sm:w-64 max-h-14 text-lg border border-brand-white bg-brand-white rounded-xl p-3'>
        Buy E-Books
        </button>
      </div>
    </section>
  )
}
