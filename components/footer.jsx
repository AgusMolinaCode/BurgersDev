import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {

  return (
    <div className='bg-yellow-100  w-[100%] bottom-0'>

        <div>

            <div className='max-w-[1500px] mx-auto flex justify-center'>
                <hr className='bg-black h-[0.20rem] min-w-[200px] w-[1100px] rounded-full top-20 mx-36 flex justify-center relative ' />
            </div>
            {/* <hr className='bg-black h-[0.10rem] min-w-[200px] rounded-full top-20 mx-36 flex justify-center relative ' /> */}
        
            <div className='grid md:flex items-center pt-24  pb-5 justify-around'>

                <div className='flex justify-center mx-auto gap-8'>
                    <div className='hidden md:flex'>
                        <Link className='flex items-center' href='/'>
                            <Image src='/img/logo.png' width={50} height={50} alt={'logo-footer'} />
                            <h1 className='font-principal font-bold text-black text-2xl hover:underline'>Burgers Dev</h1>
                        </Link>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className=' items-center gap-4 grid grid-cols-2 md:flex'>

                            <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/">Home</Link>

                            <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/burgers">Burgers</Link>

                            <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/news">News</Link>

                            <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/contact">Contact</Link>
                        </div>    
                    </div>
                </div>

                <div className='flex items-center justify-center mx-auto pt-5 md:pt-0 gap-4'>

                    <Link href="https://www.linkedin.com/in/agustin-molina-994635138/" target='_blank'  >
                        <AiFillLinkedin size={35} color='brown' />    
                    </Link>

                    <Link href="https://github.com/AgusMolinaCode" target='_blank'>
                        <AiOutlineGithub size={35} color='brown'/>
                    </Link>

                </div>

            </div>

            </div>

    </div>
  )
}

export default Footer