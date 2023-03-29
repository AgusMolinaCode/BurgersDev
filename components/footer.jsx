import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {

  return (
    <div className='bg-yellow-100  w-[100%] bottom-0'>

        <div>

            <hr className='bg-black h-[0.10rem] rounded-full top-20 mx-36 flex justify-center  relative ' />
        
            <div className='flex items-center pt-24  pb-5 justify-evenly'>

                <div>
                    <Link className='flex items-center' href='/'>
                        <Image src='/img/logo.png' width={50} height={50} alt={'logo-footer'} />
                        <h1 className='font-principal font-bold text-black text-2xl hover:underline'>Burgers Dev</h1>

                    </Link>

                </div>

                <div>
                    <div className='flex items-center gap-4'>

                        <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/">Home</Link>

                        <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/burgers">Burgers</Link>

                        <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/blog">Blog</Link>

                        <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/services">Services</Link>

                        <Link className='font-principal font-bold text-black text-2xl hover:underline' href="/contact">Contact</Link>
                    </div>    
                </div>

                <div className='flex gap-4'>

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