import Image from 'next/image'
import React from 'react'


export default function Shipping() {
  return (
    <div className='bg-amber-900 pt-16 pb-8 px-2 lg:px-[9rem]'>
        <div className='grid lg:flex w-full'>
            <div className='lg:w-[70%] w-full'>
                
                <h1 className='text-4xl lg:text-5xl text-center grid text-white font-secundario'>FASTED FOOD DELIVERY</h1>
            
                <div className='flex-col mx-auto'>

                    <div className='flex mx-auto justify-center mt-16 gap-2'>
                        
                        <div className='grid mx-auto'>
                            <div className='flex'>
                            <Image className='bg-orange-200 p-2 rounded-full' src='/img/dron-small.png' width={90} height={80} alt={'Dron Image'}/>
                                <div className='grid ml-4'>
                                    <h1 className='font-principal text-3xl lg:text-4xl text-yellow-200'>Air Delivery</h1>
                                    <p className='text-white font-principal text-md lg:text-lg'>immediate shipping, your hamburger now flies!</p>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className='flex mx-auto justify-center mt-16 gap-2'>
                        
                        <div className='grid mx-auto'>
                            <div className='flex'>
                                <Image className='bg-orange-200 p-2 rounded-full' src='/img/gear.png' width={90} height={70} alt={'Gear Image'}/>
                                <div className='grid ml-4'>
                                    <h1 className='font-principal text-3xl lg:text-4xl text-yellow-200'>Automated</h1>
                                    <p className='text-white font-principal text-md lg:text-lg'>We process food order based on AI management</p>
                                </div>
                            </div>
                        </div> 
                    </div>

                </div>
            
            
            
            </div>

            <div className='flex mx-auto justify-center w-[30%]'>
                <Image  src='/img/dron.png' className='min-w-[300px]' width={500} height={400} alt='Drone'/> 
            </div>

        </div>
    </div>
  )
}
