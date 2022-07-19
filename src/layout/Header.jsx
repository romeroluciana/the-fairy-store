import { Heading, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex>
      <Link to="/">
        <Heading>The fairy store</Heading>
        <Button>Home</Button>
      </Link>
      <Link to="aboutUs">
        <Button>About us</Button>
      </Link>
      <Link to="cart">
        <Button>Cart</Button>
      </Link>
    </Flex>
  )
}

export default Header
