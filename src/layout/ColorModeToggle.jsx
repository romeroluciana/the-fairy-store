import { Button, useColorMode } from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      w="fit-content"
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      colorScheme="pink"
      variant="ghost"
    >
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  )
}

export default ColorModeToggle
