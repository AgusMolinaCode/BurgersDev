import React from 'react'
import Layout from '@/components/layout'
import { BurgerList } from '@/components/burgers_components/burger_list'
import burgersData from '@/data/burgers_data/burgerdata'
import Footer from '@/components/footer'


export default function Burgers() {
  
  return (
    <div>

          <div className='bg-yellow-50'>

            <Layout
              title={"Burgers - Shop "}
              description={'Hamburger Delivery - Shop'}
            ></Layout>

            <main>
                <h1 className='font-secundario text-5xl font-bold text-center mt-20'>Burgers</h1>

              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12'>
                  
              {burgersData.map(burger => (
                  
                  <BurgerList 
                    key={burger.id}
                    burger={burger}
                  />
                 
                  
                ))}
               
              </div>
            </main>



          </div>

          <Footer />
    </div>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch(`http://127.0.0.1:1337/api/hamburgers?populate=image`)
//   const {data: burgers} = await response.json()

//   return {
//     props: {
//       burgers
//     }
//   }
// }
