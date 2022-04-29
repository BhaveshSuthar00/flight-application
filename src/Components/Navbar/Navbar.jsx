import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { useMediaQuery } from "@chakra-ui/react"
import MobileDrawer from './MobileDrawer'
import FullSize from './FullSize'
const Navbar = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    return (
    <Flex  
    top={0}
    bottom={0}
    left={0}
    zIndex={100}
    boxShadow='lg'
    mb={5}
    rounded='md' 
    backdropFilter='auto' 
    backdropBlur='8px'
    p={[0,3]} 
    w="100%"
    position="sticky"
    fontSize={21}
    >
        <Box>
            <Text ml={5} fontWeight="500">
                Flight Mode
            </Text>
        </Box>
        <Spacer />
        <ColorModeSwitcher />
        {
            isMobile ? <Box> <MobileDrawer /> </Box>: <FullSize />
        }
    </Flex>
    )
}

export default Navbar