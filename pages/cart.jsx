import { useState,useEffect } from 'react'
import Layout from '@/components/layout'
import Image from 'next/image'
import React from 'react'
import {RiCloseCircleFill} from 'react-icons/ri'
import Footer from '@/components/footer'
import Confetti from 'react-confetti'
import Swal from 'sweetalert2'

export default function Cart({cart,updateQuantity,removeProduct,clearCart}) {

  const [total, setTotal] = useState();
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});
  const [showConfetti, setShowConfetti] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  

  const detectSize = () => {
    setDimensions({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [dimensions])

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(total.toFixed(2));
  }, [cart])

  const handleBuyNow = () => {
    setShowConfetti(true);
    Toast.fire({
      icon: 'success',
      title: 'Thank you for your purchase!'
    })
    setTimeout(() => {
      clearCart();
    }, 4000);
    
    setTimeout(() => {
      setShowConfetti(false);
      window.location.href = '/';
    }, 6000);
  };
  

  return (
    <>
    <div className='bg-yellow-50 min-h-[100vh]'>

    {showConfetti &&
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      tweenDuration={5000}
      numberOfPieces={1000}
      recycle={false}
    />}

      <Layout
        title={"Burgers - Shop "}
        description={'Hamburger Delivery - Shop'}
      ></Layout>

      <div className=' '>
        
        <h1 className='text-center mt-14 font-secundario text-6xl'>Cart</h1>
        <div>

        </div>

        <div className='flex-wrap md:flex gap-2 justify-evenly'>

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


                          <div className='flex-col mx-auto w-[310px] lg:w-[500px] justify-center lg:flex'>

                            <Image className='flex min-w[280px] mx-auto' width={250} height={280} src={product.image} alt={product.name}/>

                            <div className='flex-col mx-auto'>
                              <h1 className='font-principal text-2xl'>{product.name}</h1>
                              <p className='font-principal text-xl'>${product.price}</p>
                              <p className='font-principal text-xl'>Quantity: {product.quantity}</p>
                              <p className='font-principal text-2xl'>Subtotal: ${(product.quantity * product.price).toFixed(2)}</p>
                            </div>
                          </div>

                            <div className='flex mx-auto w-[310px] justify-center'>
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


            <div className='flex-col mt-10 p-2 pb-10'>
              
              <div className='md:fixed'>

                  <h1 className='text-3xl lg:text-4xl font-principal'>Products:</h1>

                  <div className='pt-4'>
                      {cart.map(product => (
                        <div className='pt-2' key={product.id}>
                          <p className='font-principal text-lg lg:text-xl'>{product.name}</p>
                        </div>
                      ))}
                  </div>

                  <div className='pt-5'>
                    <h1 className='font-principal text-2xl lg:text-3xl'>TOTAL: ${total}</h1>                            
                  </div>

                  {cart.length === 0 ?

                  <div>
                    <button className='flex mx-auto mt-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-xl  rounded-xl shadow-2xl duration-500' disabled>CART EMPTY</button>
                  </div>

                  : (
                  
                  
                  <div> 
                    <button className='flex mx-auto mt-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-xl rounded-xl shadow-2xl hover:text-black duration-500'
                      onClick={handleBuyNow}
                    >
                      BUY NOW
                    </button>

                    
                  </div>

                  )}
                    

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
