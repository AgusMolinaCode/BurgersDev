import Head from 'next/head'
import Layout from '@/components/layout'
import MainText from '@/components/index_components/main_text';
import Shipping from '@/components/index_components/shipping';
import Footer from '@/components/footer';
import burgersData from '@/data/burgers_data/burgerdata';
import BurgerBest from '@/components/index_components/burger_list';


export default function Home({cart}) {
  const selectedBurger = burgersData[0]

  return (
    <div>

        <div className="bg-cover bg-center h-[88vh]" style={{ backgroundImage: "url('/img/background.jpg')" }}>
      
            <Layout 
              cart={cart}
              title={"Best Dev's Hamburger in the world "}
              description={'Hamburger Delivery - Shop'}
            ></Layout>
            
            <MainText />

        </div>

        <div>
          <BurgerBest 
            key={selectedBurger.id}
            burger={selectedBurger}
          /> 
        </div>

        <Shipping />
        <Footer />
    </div>
  )
}


