/* eslint-disable no-unused-vars */
import React from 'react';
import {
    Flex,
    Text,
    Menu,
    MenuButton,
} from '@chakra-ui/react'
import { FaRegFolder } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IconType } from 'react-icons';


interface Props {

    Icon?: IconType,

    title: string;
    description?: string;
    navSize: string;
    active?: boolean;
    url: string,
};
export default function NavItem({ Icon, url, title, description, active, navSize }: Props) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >

            <NavLink

                to={url}
                className={({ isActive }: { isActive: boolean }): any => isActive ? "activeMenu" : ""}

            >
                <Menu
                    //  w={navSize === "large" ? "100%" : '20%'}
                    placement="right">
                    <MenuButton w="100%">
                        <Flex>
                            {Icon ? <Icon /> : null}
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>

                </Menu>
            </NavLink>
        </Flex>
    )
}

NavItem.defaultProps = {
    Icon: <FaRegFolder />
};