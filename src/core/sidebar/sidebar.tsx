import React, { useState } from 'react'
import {
    Flex,

    Button
} from '@chakra-ui/react'

import { FaGitter } from 'react-icons/fa'
import NavItem from '@core/sidebar/navItem'

export default function Sidebar() {
    const [navSize, changeNavSize] =

        useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >

                <Button colorScheme='blue' onClick={() => {
                    if (navSize === "small")
                        changeNavSize("large")

                    else
                        changeNavSize("small")
                }}>Button</Button>

                <NavItem url='/' navSize={navSize} Icon={FaGitter} title="Main" active />
                <NavItem url='/about' navSize={navSize} Icon={FaGitter} title="About" />
                <NavItem url='/info' navSize={navSize} Icon={FaGitter} title="Info" />
                <NavItem url='/about/1' navSize={navSize} Icon={FaGitter} title="1" />
                <NavItem url='/about/2' navSize={navSize} Icon={FaGitter} title="2" />
                <NavItem url='/users' navSize={navSize} Icon={FaGitter} title="Users" />

            </Flex>

        </Flex>
    )
}