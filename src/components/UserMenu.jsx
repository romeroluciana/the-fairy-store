import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import useUser from '../hooks/useUser'
import userAuthState from '../recoil/userAtom'

const UserMenu = () => {
  const { signOut } = useUser()
  const { user } = useRecoilValue(userAuthState)
  return (
    <Menu>
      <MenuButton as={Button}>User</MenuButton>
      <MenuList>
        <MenuItem>{user?.user?.username}</MenuItem>
        <MenuItem>
          <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/orders">My orders</Link>
        </MenuItem>
        <MenuItem onClick={() => signOut(null)}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu
