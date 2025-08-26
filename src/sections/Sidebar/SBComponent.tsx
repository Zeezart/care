import {Box, Text, Icon} from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { IoCarSportOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";

function SBComponent() {

    const sidebarItems = [
        {   
            id: 1,
            itemIcon : RxDashboard,
            itemName : "Dashboard"
        },
        {
            id: 2,
            itemIcon : IoCarSportOutline,
            itemName : "Servicing"
        },
        {
            id: 3,
            itemIcon : LuCalendarDays,
            itemName : "Reminder"
        },
        {
            id: 4,
            itemIcon : FiHeadphones,
            itemName : "Account"
        },
        {
            id: 5,
            itemIcon : FiHeadphones,
            itemName : "Support"
        },
        {
            id: 6,
            itemIcon : LuLogOut,
            itemName : "Logout"
        },
    ]

  return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="90%" >
            {sidebarItems.map((item) => (
                <Box key={item.id} display="flex" p="0.5rem" borderRadius="6px" flexDirection="column" alignItems="center" color="brand.lightText" gap="0.2rem" cursor="pointer"
                    _hover={{ color: "brand.lightText", bgColor:"brand.primary", transition: "all 0.3s ease-in-out" }}
                >
                    <Box boxSize="24px">
                        <Icon as={item.itemIcon} boxSize={5} />
                    </Box>
                    <Text fontSize="14px">{item.itemName}</Text>
                </Box>
            ))}
        </Box>
  )
}

export default SBComponent