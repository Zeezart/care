
import Header from './DBComponents/Header'
import { Box } from '@chakra-ui/react'
import Vehicle from './DBComponents/Vehicle'
import ServiceHistory from './DBComponents/ServiceHistory'
function Dashboard() {
  return (
    <Box m="0.5rem 1rem" width="75%">
      <Header />
      <Vehicle />
      <ServiceHistory />
    </Box>
  )
}

export default Dashboard