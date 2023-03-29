import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cartwidget from '@/pages/cartWidget';

const Header = ({getTotal}) => {

  const router = useRouter();

  console.log(getTotal);

  return (
    <div>
        <div className='flex justify-around pt-4'>
            <div>
              <Link className='flex items-center' href='/'>
                <Image src='/img/logo.png' width={60} height={50} alt='logo-image' />
                <span className={router.pathname === '/' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}> <h1 className={router.pathname === '/' ? 'font-principal text-white text-4xl font-bold' : 'font-principal text-black text-4xl font-bold'} >Burgers Dev</h1></span>
              </Link>
            </div>
            <div className='flex items-center gap-4'>
                <Link className={router.pathname === '/' ? 'font-principal text-white text-2xl' : 'font-principal text-black text-2xl'} href="/burgers">
                  <span className={router.pathname === '/burgers' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>Burgers</span></Link>

                <Link className={router.pathname === '/' ? 'font-principal text-white text-2xl' : 'font-principal text-black text-2xl'}  href="/offers"><span className={router.pathname === '/offers' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>Offers</span></Link>


                <Link className={router.pathname === '/' ? 'font-principal text-white text-2xl' : 'font-principal text-black text-2xl'}  
                href="/contact"><span className={router.pathname === '/contact' ? 'underline decoration-orange-500 decoration-4 underline-offset-4' : ''}>Contact</span></Link>

                <div className='relative'>
                  <Link href='/cart'>
                    <FaShoppingCart size={25} color='orange'/>
                    <span className='absolute bottom-4 left-7 bg-orange-200 pl-2 pr-2 rounded-full text-black font-bold'>
                      
                        <Cartwidget getTotal={getTotal} />    

                    </span>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header