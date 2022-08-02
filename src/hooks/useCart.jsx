import { useRecoilState } from 'recoil'

import { cartState } from '../recoil/cartAtom'

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState)
  const productExist = (product) => {
    return cart.some((pr) => pr.id === product.id)
  }

  const addProduct = (product) => {
    if (!productExist(product)) {
      const productoCantidad = { ...product, cantidad: 1 }
      setCart([...cart, productoCantidad])
    } else {
      setCart(
        cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cantidad: pr.cantidad + 1 }
          }
          return pr
        })
      )
    }
  }

  const deleteItemCart = (product) => {
    setCart(cart.filter((pr) => pr.id !== product))
  }

  const decrementItemCart = (product) => {
    if (!productExist(product)) {
      const productoCantidad = { ...product, cantidad: 1 }
      setCart([...cart, productoCantidad])
    } else {
      setCart(
        cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cantidad: pr.cantidad - 1 }
          }
          return pr
        })
      )
    }
  }

  const deleteAllProducts = () => {
    setCart([])
  }

  const totalCart = cart.reduce(
    (acc, product) => acc + product.attributes.price * product.cantidad,
    0
  )
  return {
    cart,
    addProduct,
    deleteItemCart,
    deleteAllProducts,
    totalCart,
    decrementItemCart,
  }
}
export default useCart
