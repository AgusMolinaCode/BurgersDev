import Image from 'next/image'
import React from 'react'


export default function Shipping() {
  return (
    <div className='bg-amber-900 pt-16 pb-8 px-[9rem]'>
        <div className='flex'>
            <div className='w-[50%]'>
                
                <h1 className='text-5xl text-center text-white font-secundario'>FASTED FOOD DELIVERY</h1>
            
                <div className='grid'>

                    <div className='flex mx-auto mt-16 gap-8'>
                        <Image className='bg-orange-200 p-3 rounded-full' src='/img/dron-small.png' width={80} height={80} alt={'Dron Image'}/>
                        <div className='grid mx-auto'>
                            <h1 className='font-principal text-4xl text-yellow-200'>Air Delivery</h1>
                            <p className='text-white font-principal text-lg'>immediate shipping, your hamburger now flies!</p>
                        </div> 
                    </div>

                    <div className='flex mx-auto mt-16 gap-8'>
                        <Image className='bg-orange-200 p-2 rounded-full' src='/img/gear.png' width={80} height={80} alt={'Gear Image'}/>
                        <div className='grid mx-auto'>
                            <h1 className='font-principal text-4xl text-yellow-200'>Automated</h1>
                            <p className='text-white font-principal text-lg'>We process food order based on AI management</p>
                        </div> 
                    </div>

                </div>
            
            
            
            </div>

            <div className='flex mx-auto justify-center  w-[50%]'>
                <Image  src='/img/dron.png' width={400} height={400} alt='Drone'/> 
            </div>

        </div>
    </div>
  )
}
