import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

import useGet from '../hooks/useGet'
import useUser from '../hooks/useUser'

const UserOrders = () => {
  const { data: orders, isLoading } = useGet('orders')
  const { user } = useUser()
  if (!user) {
    return (
      <Box minH="100vh" p="30px">
        <Text> You need to log in to see your orders </Text>
      </Box>
    )
  } else {
    return (
      <Flex>
        <Box w="100%" my="30px">
          {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
          {isLoading || (
            <SimpleGrid minChildWidth="250px" spacing="30px" mx="auto" w="70%">
              {orders &&
                orders.map((order) => {
                  return (
                    <Box
                      w="250px"
                      minH="150px"
                      bgColor="pink"
                      p="15px"
                      key={order.id}
                    >
                      <Heading size="md">Order {order.id}</Heading>
                      <Text>
                        {' '}
                        {new Date(
                          order.attributes.createdAt
                        ).toLocaleDateString()}
                      </Text>
                      <Box>
                        <UnorderedList>
                          {order.attributes.Item.map((item) => (
                            <ListItem key={item.id} fontSize="sm">
                              {item.attributes.title}
                            </ListItem>
                          ))}
                        </UnorderedList>
                      </Box>
                    </Box>
                  )
                })}
            </SimpleGrid>
          )}
        </Box>
      </Flex>
    )
  }
}

export default UserOrders
