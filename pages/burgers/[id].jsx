import Footer from '@/components/footer';
import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import 'animate.css';

export default function Burger({ burger,addToCart }) {
  const [quantity, setQuantity] = useState(0);
  const [showViewCartButton, setShowViewCartButton] = useState(false);


  const handleSubmit = e => {
    e.preventDefault();

    if (quantity < 1) {
      alert('Invalid Amount');
      return;
    }

    const selectionBurger = {
      id: burger.id,
      image: burger.image,
      name: burger.name,
      price: burger.price,
      quantity,
    };

    addToCart(selectionBurger)
    setShowViewCartButton(true);
  };

  return (
    <div className='bg-yellow-50 h-full'>
      <Layout title={'Burgers - Shop '} description={'Hamburger Delivery - Shop'}></Layout>

      <div className='grid 2xl:flex  justify-center mt-2 px-12'>
        <div className='flex-col justify-end m-2 lg:m-12 mt-20 items-center '>
          <h1 className='text-center flex mx-auto font-secundario font-bold text-3xl lg:text-5xl'>{burger.name}</h1>

          <div className='w-[318px] lg:w-[500px] flex justify-center items-center mx-auto mt-8'>
            <p className='text-center p-2 font-principal font-bold text-md lg:text-xl '>{burger.description}</p>
          </div>

          <p className='text-center mt-5 font-secundario text-5xl'>${burger.price}</p>

          <form action='' onSubmit={handleSubmit}>
            <label className='flex justify-center text-2xl font-principal font-bold mt-5' htmlFor='quantity'>
              Quantity:
            </label>

            <select
              className='flex justify-center mx-auto m-6 border-2 border-black w-[15rem] p-1 rounded-xl'
              name='quantity'
              id='quantity'
              onChange={e => setQuantity(+e.target.value)}
            >
              <option className='text-center' value='0'>
                -- Select --
              </option>
              <option className='text-center' value='1'>
                1
              </option>
              <option className='text-center' value='2'>
                2
              </option>
              <option className='text-center' value='3'>
                3
              </option>
              <option className='text-center' value='4'>
                4
              </option>
            </select>

            <input
              type='submit'
              value='ADD TO CART'
              className='flex mx-auto mt-5 bg-gradient-to-r cursor-pointer from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-lg rounded-xl shadow-2xl hover:text-black duration-500'
            />
          </form>

          {showViewCartButton && (
                
                <div className='animate__backInLeft animate__animated'>
                  <Link href='/cart' className='flex mx-auto mt-5 bg-gradient-to-r cursor-pointer from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-lg w-[150px] rounded-xl shadow-2xl hover:text-black duration-500'>
                     <span className='flex mx-auto'>VIEW CART</span>
                  </Link>
                </div>
                
            )}
        </div>


        <div className='flex items-center mx-auto justify-center mt-10'>
          <Image 
          src={burger.image} 
          width={'800'} 
          height={'500'}  
          alt={burger.name} 
          className='flex w-[320px] sm:w-[800px]'    
          />
        </div>
      </div>

      <div className='mt-[11rem]'>
        <Footer />
      </div>
    </div>
  );
}


export async function getServerSideProps({ params }) {
  const burgersData = (await import('@/data/burgers_data/burgerdata')).default;
  const filteredBurgers = burgersData.filter(burger => burger.id === parseInt(params.id));
  const burger = filteredBurgers[0]
  return {
    props: {
      burger
    }
  }
}



