import Layout from '@/components/layout';
import '@/styles/globals.css'
import { useState ,useEffect} from 'react'

export default function App({ Component, pageProps }) {
  


  const [cart, setCart] = useState([])
  

  const addToCart = guitar => {
    if (cart.some(guitarState => guitarState.id === guitar.id)) {
      const updatedCart = cart.map(guitarState => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setCart([...updatedCart]);
    } else {
      setCart([...cart, guitar]);
    }
  }



  const removeProduct = id => {
    const updatedCart = cart.filter(product => product.id !== id)
    setCart(updatedCart)
  }

  const updateQuantity = guitar => {
    const updatedCart = cart.map(guitarState => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = parseInt(guitar.quantity)
      }
      return guitarState
    })
    setCart(updatedCart)
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach(guitarState => {
      total += guitarState.quantity;
    });
    return total;
  }


  return <Component {...pageProps}
    cart={cart}
    addToCart={addToCart}
    removeProduct={removeProduct}
    updateQuantity={updateQuantity}
    getTotal={getTotal()}
  >
    <Layout getTotal={getTotal()}>
      <Component {...pageProps} />
      
    </Layout>
  </Component>
}
