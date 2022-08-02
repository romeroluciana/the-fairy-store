import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import { IoBagHandleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import useCart from '../../hooks/useCart'
import Product from './Product'
import Checkout from './Checkout'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, deleteAllProducts, totalCart } = useCart()
  return (
    <>
      <Button
        leftIcon={<IoBagHandleSharp />}
        colorScheme="pink"
        variant="ghost"
        onClick={onOpen}
      >
        {cart.length}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping bag</DrawerHeader>
          {!!cart.length || (
            <DrawerBody
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Text> Your bag is empty </Text>
              <Link to="shop">
                <Button variant="link" colorScheme="pink" onClick={onClose}>
                  Shop now
                </Button>
              </Link>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody>
                {cart.map((product) => (
                  <Product info={product} key={`cartProduct${product.id}`} />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Button
                  variant="outline"
                  mb={3}
                  w="full"
                  onClick={deleteAllProducts}
                >
                  Empty bag
                </Button>
                <Text>Total: ${totalCart} </Text>
                <Link to="checkout">
                  <Button
                    colorScheme="pink"
                    variant="link"
                   
                    onClose={onClose}
                  >
                    Continue with order information
                  </Button>
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
