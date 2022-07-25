import { Text, useColorMode } from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Text
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      cursor={'pointer'}
      w="fit-content"
    >
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </Text>
  )
}

export default ColorModeToggle
