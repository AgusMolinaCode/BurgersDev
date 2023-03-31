import React from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { Box, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useState,useEffect } from 'react'


const Contact = () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleBuyNow = () => {
    Toast.fire({
      icon: 'success',
      title: 'Sending your message...',
    });
    setTimeout(() => {
      window.location.href = '/';
    }, 4000);
  }


  
  
  

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(data)
  }

  // const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // }, [errors]);
  

  return (
    <div>
      <div className='bg-yellow-50'>

        <Layout
          title={'Contact - Shop'}
          description={'Hamburger Delivery - Contact'}
        />

        <main>
          <h1 className='font-secundario text-5xl font-bold text-center mt-20'>
            Contact
          </h1>
        </main>

        <div className='flex justify-center mb-[5rem]'>

          <div className='bg-orange-200 w-[780px] h-[540px] rounded-2xl m-4 ml-2 mr-2 flex mx-auto'>


            <div className='m-4'>

      
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 1, width: '100%', marginBottom: '16px' , marginLeft: 'auto', marginRight: 'auto'},
              }}
              color='secondary'
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                {...register('name', { required: true })}
                label='Your Name'
                variant='outlined'
                placeholder='Your Name'
                margin='normal'
                error={errors.name}
                helperText={errors.name && 'Name is required'}
             
              />

              <TextField
                {...register('email', { required: true })}
                label='Your Email'
                variant='outlined'
                placeholder='Your Email'
                margin='normal'
                error={errors.email}
                helperText={errors.email && 'Email is required'}
              />

              <TextField
                {...register('phone', { required: false })}
                label='Your Phone'
                variant='outlined'
                placeholder='Your Phone'
                margin='normal'
                error={errors.phone}
                helperText={errors.phone && 'Phone is required'}
              />

              <TextField
                {...register('message', { required: true })}
                label='Your Message'
                variant='outlined'
                placeholder='Your Message'
                margin='normal'
                multiline
                rows={4}
                error={errors.message}
                helperText={errors.message && 'Message is required'}
              />

              <button 
                className=' mt-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 uppercase text-white font-principal font-[900] text-xl rounded-xl shadow-2xl hover:text-black duration-500' 
                type="submit"
                disabled={!isValid}
                onClick={handleBuyNow}
              >
                Submit
              </button>



            </Box>

            </div>

          </div>

        </div>

        <Footer />

      </div>

    </div>
  )
}

export default Contact
