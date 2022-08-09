import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import useCart from '../hooks/useCart'
import useUser from '../hooks/useUser'

const UserMenu = () => {
  const { user, signOut } = useUser()
  const { deleteAllProducts } = useCart()

  const signOff = () => {
    signOut(null)
    deleteAllProducts()
  }
  return (
    <Menu>
      <MenuButton as={Button}>User</MenuButton>
      <MenuList>
        <MenuItem>{user?.user?.username}</MenuItem>
        <Link to="profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem>My orders</MenuItem>
        <MenuItem onClick={signOff}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu
