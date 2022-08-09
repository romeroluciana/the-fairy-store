import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'
import useUser from '../hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
const UserMenu = () => {
  const { user, signOut } = useUser()
  const { deleteAllProducts } = useCart()
  const navigate = useNavigate()

  const signOff = () => {
    signOut(null)
    deleteAllProducts()
  }
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FaUserAlt />}
        variant="ghost"
        colorScheme="pink"
      >
        User
      </MenuButton>
      <MenuList>
        <MenuItem>{user?.user?.username}</MenuItem>
        <Link to="profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link to="orders">
          <MenuItem>My orders</MenuItem>
        </Link>
        <MenuItem onClick={signOff}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu
