import { Box, Button, Input,Icon } from "@chakra-ui/react"
import { GoBell } from "react-icons/go";

function Header() {
  return (
    <Box bgColor="brand.deeper" height="10vh" display="flex" alignItems="center" justifyContent="space-between" padding="2rem" width="100%">
      <Box>
        <Input placeholder="Search providers cars..." bgColor="brand.deep" border="1px solid transparent" width="100%"/>
      </Box>

      <Box display="flex" alignItems="center" gap="1rem">
        <Icon as={GoBell}  color="brand.lightText"/>
        <Button>Book service</Button>
      </Box>
    </Box>
  )
}

export default Header