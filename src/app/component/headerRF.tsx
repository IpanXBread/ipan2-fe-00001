import React from 'react';
import { ThemeSwitcher } from '../logic/ThemeSwitcher';
import { useMenu } from '../logic/MenuContext';

import { Flex, Heading, Image, IconButton, useColorMode, Box } from '@chakra-ui/react';
import { FaMoon, FaSearch, FaSun } from 'react-icons/fa';

export default function headerRF() {

    const { selectMenuItem, selectedMenuItem } = useMenu();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                p="4"
                bg="gray.900"
                color="white"
            >
                {/* Left section */}
                <Flex align="center" ml="10">

                    <Heading mr="10">PcariMovie</Heading>

                    <Heading
                        fontFamily="sans-serif"
                        mr="10"
                        fontSize={15}
                        onClick={() => selectMenuItem('Home')}
                        _hover={{ cursor: 'pointer' }}
                        // textDecoration={selectedMenuItem === 'Home' ? 'underline' : 'none'}
                        textAlign="center"
                    >
                        Home
                        {selectedMenuItem === 'Home' && (
                            <Box width="50px" backgroundColor="yellow.400" height="3px" mt="8px" />
                        )}
                    </Heading>

                    <Heading
                        fontFamily="sans-serif"
                        mr="10"
                        fontSize={15}
                        onClick={() => selectMenuItem('Theatre')}
                        display="flex"
                        justifyContent="center"
                        textAlign="center"
                        flexDirection="column"
                        _hover={{ cursor: 'pointer' }}
                    // textDecoration={selectedMenuItem === 'Theatre' ? 'underline' : 'none'}
                    >
                        Active
                        {selectedMenuItem === 'Theatre' && (
                            <Box width="50px" backgroundColor="yellow.400" height="3px" mt="8px" />
                        )}
                    </Heading>

                    <Heading
                        fontFamily="sans-serif"
                        fontSize={15}
                        onClick={() => selectMenuItem('Timeslot')}
                        // textDecoration={selectedMenuItem === 'Timeslot' ? 'underline' : 'none'}
                        display="flex"
                        justifyContent="center"
                        textAlign="center"
                        flexDirection="column"
                        _hover={{ cursor: 'pointer' }}
                    >
                        Country
                        {selectedMenuItem === 'Timeslot' && (
                            <Box width="60px" backgroundColor="yellow.400" height="3px" mt="8px" />
                        )}
                    </Heading>

                </Flex>

                {/* Right section */}
                <Flex align="center" mr="70">
                    <Box mr="10" _hover={{ cursor: 'pointer' }}>
                        <FaSearch />
                    </Box>
                    <ThemeSwitcher /> { /* later change to account name */}
                    <IconButton
                        ml="4"
                        aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                        onClick={toggleColorMode}
                        _hover={{ cursor: 'pointer' }}
                    />
                </Flex>

            </Flex>
        </>
    );
};