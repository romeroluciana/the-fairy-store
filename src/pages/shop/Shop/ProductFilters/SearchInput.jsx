import { Input } from '@chakra-ui/react'

import useGetWithPagination from '../../../../hooks/useGetWithPagination'

const SearchInput = () => {
  const { setTitle } = useGetWithPagination()

  const handleOnChange = (event) => {
    setTitle(event.target.value)
  }
  return <Input onChange={handleOnChange}  placeholder="Search..." />
}

export default SearchInput
