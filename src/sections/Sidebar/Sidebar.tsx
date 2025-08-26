
import {Box, Text} from '@chakra-ui/react'
import SBComponent from './SBComponent'

function Sidebar() {
  return (
    <Box bg="brand.deeper" width="10%" position="fixed" borderRight="1px solid brand.border" height="100vh" padding="1rem" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <Box mb="1rem">
            <Text color="brand.lightText" fontSize="2rem">Care.</Text>
        </Box>

        <SBComponent />
    </Box>
  )
}

export default Sidebar