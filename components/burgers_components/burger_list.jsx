import Image from 'next/image'
import Link from 'next/link'

export const BurgerList = ({burger}) => {
    
  return (
    <div className='flex-col m-12 items-center mx-auto'>
       

       <Link href={`/burgers/${burger.id}`}>
  
          <Image
            className='hover:scale-110 duration-300'
            src={burger.image}
            width={380}
            height={400}
            alt={burger.name}
          />
  
        </Link>
      
        <h1 className='text-center font-principal font-bold text-xl'>{burger.name}</h1>
    </div>
  )
}
