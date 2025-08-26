import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import { Box } from '@chakra-ui/react'
import Account from './Account/Account'

function MainComponent() {
  return (
    <Box width="100%"  display="flex" justifyContent="space-between" ml="10%">
      <Dashboard />
      <Account />
    </Box>
  )
}

export default MainComponent