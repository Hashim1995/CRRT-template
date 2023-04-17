import { Grid, GridItem } from "@chakra-ui/react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@core/sidebar/sidebar";

function Layout() {
    // const [isOpen, setIsOpen] = useState<boolean>(true);

    return <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows="2fr 85vh 2fr"
        gridTemplateColumns="1fr 4fr"
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
    >
        <GridItem p='2' bg='orange.300' area="header">
            Header
        </GridItem>
        {/* <Flex>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="sidebar"
                        initial={{ width: '500px' }}
                        animate={{ width: '300px' }}
                        exit={{ width: '200px' }}
                        transition={{ duration: 0.2 }}
                        style={{
                            overflow: 'hidden',
                            backgroundColor: 'gray.200',
                        }}
                    >
                        <GridItem area="nav">
                            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                        </GridItem>
                    </motion.div>
                )}
            </AnimatePresence>


        </Flex> */}
        <GridItem area="nav">
            <Sidebar />

        </GridItem>
        <GridItem p='2' bg='green.300' area="main">
            <Outlet />
        </GridItem>
        <GridItem p='2' bg='blue.300' area="footer">
            Footer
        </GridItem>
    </Grid>
}

export default Layout;
