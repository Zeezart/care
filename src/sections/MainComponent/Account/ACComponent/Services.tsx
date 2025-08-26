import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import logo1 from '../../../../assets/logo1.jpeg'
import logo2 from '../../../../assets/logo2.jpeg'
import logo3 from '../../../../assets/logo3.jpeg'
import logo4 from '../../../../assets/logo4.jpeg'
import logo5 from '../../../../assets/logo5.jpeg'




function Services() {

    const serviceProviders = [
        {
            id: 1,
            image: logo1,
            name: "Prime Vehicle Service",
            info: "789 Maekt Str, San Frnasisco CA 94105"
        },
        {
            id: 2,
            image: logo2,
            name: "Cars.com  Garage",
            info: "789 Maekt Str, San Frnasisco CA 94105"
        },
        {
            id: 3,
            image: logo3,
            name: "Cardeko Repairs",
            info: "789 Maekt Str, San Frnasisco CA 94105"
        },
        {
            id: 4,
            image: logo4,
            name: "Reliable Car Care",
            info: "789 Maekt Str, San Frnasisco CA 94105"
        },
        {
            id: 5,
            image: logo5,
            name: "Castify Auto Solutions",
            info: "789 Maekt Str, San Frnasisco CA 94105"
        },
    ]

  return (
    <Box  color="brand.lightText" mt="2rem">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="1rem" px="0.5rem">
            <Text fontSize="1.2rem" fontWeight="bold">Nearby service providers</Text>  
            <Text fontSize="12px">See all</Text>      
        </Box>

        <Box bgColor="brand.deep" borderRadius="10px" display="flex" flexDirection="column" gap="1rem" mb="1rem">

            {serviceProviders.map(provider => (
                <Box key={provider.id} display="flex" gap="1rem" alignItems="center" mb="1rem"
                p="0.5rem" borderRadius="6px"
                _hover={{ color: "brand.lightText", bgColor:"brand.primary", transition: "all 0.3s ease-in-out" }}

                >
                    <Image src={provider.image} alt={provider.name} width="50px" height="50px" borderRadius="50%"/>
                    <Box>
                        <Text fontSize="14px">{provider.name}</Text>
                        <Text fontSize="12px" color="brand.notLightText">{provider.info}</Text>
                    </Box>
                </Box>
            ))}
        </Box>

    </Box>
  )
}

export default Services