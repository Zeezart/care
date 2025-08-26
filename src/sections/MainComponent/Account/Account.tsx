
import { Box } from '@chakra-ui/react'
import Profile from './ACComponent/Profile'
import Services from './ACComponent/Services'


function Account() {
  return (
    <Box border="1px solid brand.border" bgColor="brand.deeper" m="0.5rem 0" width="25%" p="1rem" borderRadius="10px">
        <Profile />
        <Services />
    </Box>
  )
}

export default Account