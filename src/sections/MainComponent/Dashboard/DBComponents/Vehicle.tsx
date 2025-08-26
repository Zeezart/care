import { Badge, Box, Divider, Image, Spacer, Text } from '@chakra-ui/react'
import car1 from '../../../../assets/car1.png'
import car2 from '../../../../assets/car2.png'
import car3 from '../../../../assets/car3.png'
import car4 from '../../../../assets/car4.png'
import car5 from '../../../../assets/car5.png'

function Vehicle() {

    const cars=[
        {
            id: 1,
            name: 'Volvo XC90',
            image: car1,
        },
        {
            id: 2,
            name: 'toyota',
            image: car2,
        },
        {
            id: 3,
            name: 'Something',
            image: car3,
        },
        {
            id: 4,
            name: 'Lambo',
            image: car4,
        },
        {
            id: 5,
            name: 'Yellow',
            image: car5,
        }
    ]

  return (
    <Box color="brand.lightText" p="1rem"  display="flex" justifyContent="space-between" mt="1rem" mb="1rem" alignItems="center" gap="2rem" bgColor="brand.deeper">
        <Box  borderRadius="10px"width="100%" display="flex" flexDirection="column" gap="1rem" mb="1rem">
            <Text>Your Vehicle Selection</Text>
            <Box display="flex" justifyContent="space-between" alignItems="stretch">
                {cars.map(car => (
                    <Box key={car.id} display="flex" flexDirection="column" alignItems="center" gap="0.2rem" mb="1rem"
                    p="0.5rem" borderRadius="6px"  justifyContent="space-between"
                    _hover={{ color: "brand.lightText", bgColor:"brand.primary", transition: "all 0.3s ease-in-out"}}
                    cursor="pointer"
                    >
                        <Box ><Image src={car.image} alt={car.name} width="100%"/></Box>
                        <Spacer />
                        <Text fontSize="14px" >{car.name}</Text>
                    </Box>
                ))}
            </Box>

            <Divider borderColor="brand.border" />

            <Box display="flex" alignItems="center" gap="3rem" mt="2rem">
                <Image src={car4} alt='vehicle' width="70%"/>
                <Box textAlign="center">
                    <Text fontSize="1.7rem" fontWeight="bold">Volvo XC90</Text>
                    <Text fontSize="14px" padding="0.3rem" border="brand.notLightText" color="brand.notLightText">General Information</Text>
                </Box>
            </Box>
        </Box>

        <Box width="40%" h="100%">
            <Box display="flex" gap="1rem" alignItems="stretch" width="100%">
                <Box bgColor="brand.deep" borderRadius="10px" p="1rem" width="100%">
                    <Box>
                        <Text fontSize="12px" color="brand.notLightText">Last service date</Text>
                    </Box>
                    <Text fontSize="1.2rem" fontWeight="bold">25-Aug-24</Text>
                </Box>
                <Box bgColor="brand.deep" borderRadius="10px" p="1rem" width="100%">
                    <Box>
                        <Text fontSize="12px" color="brand.notLightText">Total Services</Text>
                    </Box>
                    <Text fontSize="1.2rem" fontWeight="bold">16</Text>
                </Box>
            </Box>

            <Box bgColor="brand.deep" borderRadius="10px" p="1rem" mt="1rem" display="flex" flexDirection="column" gap="1rem">
                <Box>
                    <Text fontSize="14px">Upcoming Maintenance</Text>
                </Box>

                <Badge p="0.5rem" bgColor="brand.primary" fontSize="1rem" borderRadius="30px" textAlign="center" color="brand.lightText">Oil change in 5 days</Badge>

                <Text fontSize="14px">Replacing the old engine oil to keep the engine running smoothly.</Text>

               <Divider borderColor="brand.border" m="1rem 0" />

               <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="12px" gap="0.5rem">
                    <Box>
                        <Text color="brand.notLightText">Estimated cost</Text>
                        <Text fontSize="14px">$70</Text>
                    </Box>
                    <Box>
                        <Text color="brand.notLightText">Provider</Text>
                        <Text fontSize="14px">AutoCare</Text>
                    </Box>
                    <Box>
                        <Text color="brand.notLightText">Due Date</Text>
                        <Text fontSize="14px">Sep 15, 2024</Text>
                    </Box>
               </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Vehicle