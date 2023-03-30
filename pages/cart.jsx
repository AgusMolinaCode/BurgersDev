import { useState,useEffect } from 'react'
import Layout from '@/components/layout'
import Image from 'next/image'
import React from 'react'
import {RiCloseCircleFill} from 'react-icons/ri'
import Footer from '@/components/footer'

export default function Cart({cart,updateQuantity,removeProduct,getTotal}) {

  const [total, setTotal] = useState();

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(total.toFixed(2));
  }, [cart])


  return (
    <>
    <div className='bg-yellow-50 min-h-[100vh]'>
      <Layout
        title={"Burgers - Shop "}
        description={'Hamburger Delivery - Shop'}
      ></Layout>

      <div className=' '>
        
        <h1 className='text-center mt-14 font-secundario text-6xl'>Cart</h1>

        <div className='flex-wrap lg:flex gap-2 justify-evenly'>

            <div className='flex-col p-2'>

                {cart.length === 0 ? 
                <div>
                  <h1 className='text-center mt-12 font-secundario text-6xl'>Cart Empty</h1>
                </div> : (

                    cart.map(product => (
                      <div key={product.id}>

                          <div className='flex justify-start'>
                            <button  type='button' onClick={() => removeProduct(product.id)}>
                              <RiCloseCircleFill size={35} color='black' />
                            </button>
                          </div>


                          <div className='grid mx-auto justify-center lg:flex'>
                            <Image className='flex mx-auto' width={200} height={280} src={product.image} alt={product.name}/>

                            <div>
                              <h1 className='font-principal text-2xl'>{product.name}</h1>
                              <p className='font-principal text-xl'>${product.price}</p>
                              <p className='font-principal text-xl'>Quantity: {product.quantity}</p>
                              <p className='font-principal text-2xl'>Subtotal: ${(product.quantity * product.price).toFixed(2)}</p>
                            </div>
                          </div>

                            <div className='flex mx-auto w-[15rem]'>
                                <select
                                    className='flex justify-start mx-auto m-6 border-2 border-black w-[15rem] p-1 rounded-xl'
                                    onChange={e => updateQuantity({
                                        id: product.id,
                                        quantity: +e.target.value
                                    })}
                                    value={product.quantity}
                                    >
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
                            </div>

                  
                          </div>
                      
                    ))


                )}
            </div>


            <div className='grid p-2 mt-10'>
              <div className='md:fixed'>
                <h1 className='text-4xl font-principal'>Products:</h1>
                <div className='pt-4'>
                    {cart.map(product => (
                      <div className='pt-2' key={product.id}>
                        <p className='font-principal text-xl'>{product.name}</p>
                      </div>
                    ))}
                </div>
                <div className='pt-5'>
                  <h1 className='font-principal text-3xl'>TOTAL: ${total}</h1>                            
                </div>
              </div>
                
            </div>

        </div>
      </div>
      
      
      
    </div>
    
    <div className='bottom-0'>
      <Footer />
    </div>

    </>
  )
}
