
import { Box, Divider, Icon, Image,Text } from '@chakra-ui/react'
import profile from '../../../../assets/profile.jpeg'
import { PiMicrophoneLight } from "react-icons/pi";

function Profile() {
  return (
    <Box color="brand.lightText">
        <Box bgColor="brand.deep" borderRadius="10px" p="1rem" display="flex" flexDirection="column" alignItems="center" gap="1rem" mb="1rem">
            <Box width="120px" height="120px" borderRadius="50%" >
                <Image src={profile} objectFit="contain" borderRadius="50%" height="120px" width="120px" alt='profile-pic' />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap="0.2rem">
                <Text fontSize="1.5rem" fontWeight="bold">Christian Oweazim</Text>
                <Box display="flex" alignItems="center">
                    <Icon as={PiMicrophoneLight} boxSize={4} mr="0.2rem" color="red" />
                    <Text fontSize="14px">Premium memeber</Text>
                </Box>
            </Box>
        </Box>

        <Box bgColor="brand.deep" borderRadius="10px" p="1rem 2rem" mb="1rem">
            <Box mb="1rem">
                <Text fontSize="14px" fontWeight="bold">Cost management</Text>
            </Box>
            <Divider borderColor="brand.border" />
            <Box display="flex" flexDirection="row" gap="1rem" mt="1rem" justifyContent="space-between">
                <Box textAlign="center">
                    <Text fontSize="12px" color="brand.notLightText">Total spent to date</Text>
                    <Text>$3,567</Text>
                </Box>
                <Box textAlign="center" >
                    <Text fontSize="12px" color="brand.notLightText">Avg. Monthly Spend</Text>
                    <Text>$270</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Profile