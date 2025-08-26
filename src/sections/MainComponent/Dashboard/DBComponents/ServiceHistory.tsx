import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Image,
  Circle,
} from "@chakra-ui/react";

const ServiceHistory: React.FC = () => {
  const bg = useColorModeValue("gray.900", "gray.900");
  const cardBg = useColorModeValue("gray.800", "gray.800");
  const borderColor = useColorModeValue("gray.700", "gray.700");
  const textColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const headerColor = useColorModeValue("gray.400", "gray.400");

  // Service history data
  const services = [
    { date: "10-08-2024", type: "Oil change", provider: "Autocare service", cost: "$70" },
    { date: "15-07-2024", type: "Tire Rotation", provider: "Quick Tires", cost: "$45" },
    { date: "20-06-2024", type: "Brake Inspection", provider: "BrakeMasters", cost: "$60" },
    { date: "18-05-2024", type: "Battery Replacement", provider: "Powerup Auto", cost: "$120" },
    { date: "12-04-2024", type: "Transmission Check", provider: "GearShift Mechanics", cost: "$150" },
  ];

  // Health indicators data
  const healthIndicators = [
    {
      title: "Spark plug",
      img: "https://cdn-icons-png.flaticon.com/512/5827/5827828.png",
      details: [
        { label: "Sparkplug wear: 75% life", status: "good" },
        { label: "Misfire rate: 0.5% (Good)", status: "good" },
      ],
    },
    {
      title: "Brake condition",
      img: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
      details: [
        { label: "Front Brake pads: 70% life", status: "good" },
        { label: "Rear Brake pads: 85% life", status: "good" },
      ],
    },
    {
      title: "Engine Temp",
      img: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
      details: [
        { label: "Current temp: 120°F", status: "good" },
        { label: "Critical temp: 260°F", status: "bad" },
      ],
    },
    {
      title: "Battery life",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
      details: [
        { label: "Charge level: 85%", status: "good" },
        { label: "Voltage: 12.6V", status: "good" },
      ],
    },
  ];

  return (
    <Box color="brand.lightText">
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={4}>
        {/* Service History Section */}
        <GridItem bgColor="brand.deeper" p={4} borderRadius="10px" borderColor="brand.border">
          <Flex justify="space-between" align="center" mb={6}>
            <Text fontSize="14px" fontWeight="bold">
              Service history
            </Text>
            <Button
              bg="brand.primary"
              color="brand.lightText"
              _hover="brand.primary"
              size="sm"
              borderRadius="10px"
            >
              Add a Service
            </Button>
          </Flex>

          <Box  borderRadius="10px" overflow="hidden">
            <Table variant="unstyled" style={{ borderSpacing: "0 12px" }}>
              <Thead>
                <Tr>
                  <Th color="brand.lightText" fontSize="sm">Date</Th>
                  <Th color="brand.lightText" fontSize="sm">Service Type</Th>
                  <Th color="brand.lightText" fontSize="sm">Provider</Th>
                  <Th color="brand.lightText" fontSize="sm">Cost</Th>
                </Tr>
              </Thead>
              <Tbody color="brand.notLightText">
                {services.map((s, i) => (
                  <Tr key={i} _hover="brand.primary" bgColor="brand.deep" mb="0.5rem">
                    <Td fontSize="12px">{s.date}</Td>
                    <Td fontSize="12px">{s.type}</Td>
                    <Td fontSize="12px">{s.provider}</Td>
                    <Td fontSize="12px">{s.cost}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Pagination */}
          <Flex justify="flex-end" mt={4} gap={2}>
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                size="sm"
                borderRadius="md"
                bg={page === 1 ? "blue.600" : "gray.700"}
                color="white"
                _hover={{ bg: page === 1 ? "blue.700" : "gray.600" }}
              >
                {page}
              </Button>
            ))}
          </Flex>
        </GridItem>

        {/* Health Indicators Section */}
        <GridItem bgColor="brand.deeper" p={4} borderRadius="10px" borderColor="brand.border">
          <Text fontSize="14px" fontWeight="bold" mb={4}>
            Health indicators
          </Text>
          <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
            {healthIndicators.map((h, i) => (
              <Box
                key={i}
                borderRadius="6px"
                bg= "brand.deep"
                p={4}
              >
                <VStack spacing={3} mb={3}>
                  <Text fontWeight="semibold" color="brand.lightText" fontSize="14px">{h.title}</Text>
                  <Image src={h.img} alt={h.title} boxSize="32px" />
                </VStack>
                <VStack align="start" spacing={2}>
                  {h.details.map((d, idx) => (
                    <HStack key={idx} spacing={2} align="center">
                      <Text fontSize="11px" color="brand.notLightText">
                        {d.label}
                      </Text>
                      <Circle
                        size="4px"
                        bg={d.status === "good" ? "green.400" : "red.400"}
                      />
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ServiceHistory;
