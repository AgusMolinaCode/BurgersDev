import React from 'react'
import Link from 'next/link'

export default function MainText() {
  return (
    <div className='flex justify-center'>
          <div className='pt-[40vh]'>
            <h1 className='text-[4rem] text-center font-secundario text-yellow-100'>Burger Shop</h1>
            <div className='w-[500px]'>
              <p className='text-center  pt-2 font-principal text-lg text-white'>Enim laboris sint nisi culpa. Minim ea cupidatat commodo commodo. Tempor aliquip proident duis magna magna tempor nulla sit fugiat fugiat incididunt.Enim laboris sint nisi culpa. Minim ea cupidatat commodo commodo. Tempor aliquip proident duis magna magna tempor nulla sit fugiat fugiat incididunt.</p>

              <Link href="/burgers">
                <button className='flex mx-auto mt-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-xl rounded-xl shadow-2xl hover:text-black duration-500'>Shop Now</button>
              </Link>

            </div>
          </div>
        </div>
  )
}
