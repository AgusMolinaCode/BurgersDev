import React from 'react'
import AutoPlay from '@/components/index_components/slider';
import Image from 'next/image'
import Link from 'next/link';
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';

export default function BurgerBest({burger}) {
  return (
    <div>
                <div className='bg-yellow-100 pb-10'>
                    <div className='pt-16'>
                        <h1 className='text-center font-secundario text-5xl'>Favorite of the Week</h1>
                    </div>
                    <div className='grid mx-auto w-full md:flex '>
                        <div className='w-[60%] flex mx-auto justify-center'>
                            <Image className='min-w-[318px]' src={burger.image} width={500} height={500} alt={'Best-Burger'}/>
                        </div>

                        <div className='w-full md:w-[40%] mt-8 mx-auto'>
    
                            <h1 className='text-center font-principal font-bold text-4xl'>{burger.name}</h1>

                            <h2 className='text-center p-2 font-principal text-lg'>{burger.description}</h2>

                            <div className='flex justify-center gap-1 mt-3'>
                                <FaStar size={25} color='gold' />
                                <FaStar size={25} color='gold' />
                                <FaStar size={25} color='gold' />
                                <FaStar size={25} color='gold' />
                            </div>

                            <h1 className='text-center pt-5 text-5xl font-principal font-bold'>${burger.price}</h1>

                            <Link href='/burgers'>
                                <button className='flex mx-auto mt-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-lg rounded-xl shadow-2xl hover:text-black duration-500 items-center'>
                                    VIEW ALL BURGERS
                                    <FaArrowAltCircleRight className='ml-1' />
                                </button>
                            </Link>


                        </div>
                    </div>

                    {/* <AutoPlay /> */}

                </div>
    </div>
  )
}
