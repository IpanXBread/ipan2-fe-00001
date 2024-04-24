import { Box, Text, Flex, Heading, Grid, GridItem, Input, IconButton } from '@chakra-ui/react';
import { FaArrowRight, FaAddressBook, FaMailBulk, FaPhone } from 'react-icons/fa';

export default function footerRF() {

    return (
        <>
            <Flex
                height="350px"
            >
                {/* Left container */}
                <Box width="35%" backgroundColor="gray.600" height="100%" p="30px 50px 50px 50px">
                    <Heading mr="10">PcariMovie</Heading>
                    <Text mt="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisi vitae purus efficitur fringilla id vel ipsum.</Text>
                    <Text mt="20px" fontWeight="bold">Join Newsletter</Text>
                    <Box mt="20px" backgroundColor="yellow.100" w="250px" h="50px" rounded="md" display="flex" alignItems="center" justifyContent="space-between" px={4}>
                        <Input
                            placeholder="Insert your email here"
                            size="sm"
                            rounded="md"
                            border="none"
                            _focus={{ border: 'none', outline: 'none' }}
                            color="black"
                        />
                        <IconButton
                            aria-label="Submit"
                            icon={<FaArrowRight />}
                            bg="gold"
                            color="black"
                            rounded="9px"
                            size="sm"
                        />
                    </Box>
                </Box>

                {/* Right container */}
                <Box width="65%" backgroundColor="gray.700" height="100%">
                    <Box height="60%" ml="10">
                        <Grid
                            templateColumns="1fr 1fr 1fr"
                            gap={5}
                            ml="8"
                            mr="25"
                            mt="70"
                        >
                            <GridItem colSpan={1} rowSpan={1} fontWeight="bold" _hover={{ cursor: 'pointer' }} w="fit-content">
                                Product
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} fontWeight="bold" _hover={{ cursor: 'pointer' }} w="fit-content">
                                Media Group
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} fontWeight="bold" _hover={{ cursor: 'pointer' }} w="fit-content">
                                Sitemap
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                ROCKETS
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                Nice Studio
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                About
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                TV Show
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                Nice news
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                Careers
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                Videos
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                Nice TV
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                                Press
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="space-around" flexDirection="row" alignItems="center" ml="50px" mr="50px">
                        <FaAddressBook />
                        <Text m="0px 10px 0px 10px" w="33%">
                            8819 Ohio St. South Gate, California 90280
                        </Text>
                        <FaMailBulk />
                        <Text m="0px 10px 0px 10px" w="33%">
                            ourstudio@hello.com
                        </Text>
                        <FaPhone />
                        <Text m="0px 10px 0px 10px" w="33%">
                            +271 386-647-3637
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}



