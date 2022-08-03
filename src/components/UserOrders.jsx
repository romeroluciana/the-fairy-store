import { Heading, Box, Text, ListItem, OrderedList } from '@chakra-ui/react'

const UserOrders = () => {
  return (
    <>
      <Heading>My orders</Heading>
      <Box>
        <Heading>Products</Heading>
        <OrderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
        </OrderedList>
        <Text>Fecha de compra:</Text>
      </Box>
    </>
  )
}
export default UserOrders
