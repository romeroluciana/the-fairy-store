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
} from '@chakra-ui/react'
import { IoBagHandleSharp } from 'react-icons/io5'


import useCart from '../../hooks/useCart'
import Product from './Product'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, deleteAllProducts, totalCart } = useCart()
  const total = cart.length
  return (
    <>
      <Text onClick={onOpen}>
        <IoBagHandleSharp /> ({total})
      </Text>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My bag</DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> Your bag is empty </Text>
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
                  Empty cart
                </Button>
                <Text>Total: {totalCart}</Text>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
