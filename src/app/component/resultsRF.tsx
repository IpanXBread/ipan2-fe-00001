import React, { useState, useContext } from 'react';
import { Box, Grid, GridItem, Text, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading } from '@chakra-ui/react';
import { useMenu } from '../logic/MenuContext';
import { useAPIData } from '../page';
import { FaClock, FaBomb } from 'react-icons/fa';

interface Rocket {
    name: string;
    active: boolean;
    boosters: number;
    company: string;
    cost_per_launch: number;
    country: string;
    description: string;
    diameter: {
        meters: number;
        feet: number;
    };
    engines: {
        isp: number;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
        number: number;
        type: string;
    };
    first_flight: string;
    first_stage: {
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
        reusable: boolean;
        engines: number;
        fuel_amount_tons: number;
    };
    flickr_images: string[];
    height: {
        meters: number;
        feet: number;
    };
    id: string;
    landing_legs: {
        number: number;
        material: string | null;
    };
    mass: {
        kg: number;
        lb: number;
    };
    payload_weights: {
        id: string;
        name: string;
        kg: number;
        lb: number;
    }[];
    second_stage: {
        thrust: {
            kN: number;
            lbf: number;
        };
        payloads: {
            option_1: string;
            composite_fairing: {
                height: {
                    meters: number;
                    feet: number;
                };
                diameter: {
                    meters: number;
                    feet: number;
                };
            };
        };
        reusable: boolean;
        engines: number;
        fuel_amount_tons: number;
    };
    stages: number;
    success_rate_pct: number;
    type: string;
    wikipedia: string;

    // Add index signature
    [key: string]: any;
}

export default function ResultsRF() {
    const { selectedMenuItem } = useMenu();
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRocket, setSelectedRocket] = useState<Rocket | null>(null);
    const APIData: Rocket[] = useAPIData() || [];

    let headerText: string;
    let viewMoreText: string;

    const toggleDetails = (rocket: Rocket) => {
        setSelectedRocket(rocket);
        setShowDetails(true);
    };

    const LogAPIDataButton = () => {
        console.log("APIData: ", APIData);
    };

    let content;
    switch (selectedMenuItem) {
        case 'Home':
            content = (
                <>
                    {(!APIData || APIData.length === 0) && (
                        <Text fontSize="5xl" p="100px" m="100px">Loading...</Text>
                    )}

                    {APIData && APIData.length > 0 && (
                        <>
                            {APIData.slice(0, 4).map((rocket, index) => (
                                <GridItem key={index} colSpan={index === 0 ? 2 : 1} rowSpan={1}>
                                    <Box h="450px" mb="7" bgGradient="linear(to-b, blue.800, purple.700)" p="4">
                                        <Flex h="70%">
                                            <Button onClick={() => toggleDetails(rocket)} mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                                                DETAILS
                                            </Button>
                                        </Flex>
                                        <Flex>
                                            <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                                                <Flex mr="3" color="gray"><FaClock /></Flex>
                                                <Flex mr="10">{rocket.company}</Flex>
                                            </Text>
                                            <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                                                <Flex mr="3" color="gray"><FaBomb /></Flex>
                                                <Flex mr="10">{rocket.country}</Flex>
                                            </Text>
                                        </Flex>
                                        <Flex>
                                            <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                                                {rocket.name}
                                            </Text>
                                        </Flex>
                                    </Box>
                                </GridItem>
                            ))}
                            <Button h="100px" m="50px" onClick={LogAPIDataButton}>Log APIData</Button>
                        </>
                    )}
                </>
            );
            break;
        case 'Theatre':
            content = (
                <>
                    {(!APIData || APIData.length === 0) && (
                        <Text>Loading...</Text>
                    )}

                    {APIData && APIData.length > 0 && (
                        <>
                            {APIData
                                .filter(rocket => rocket.active)
                                .slice(0, 4)
                                .map((rocket, index) => (
                                    <GridItem key={index} colSpan={index === 0 ? 2 : 1} rowSpan={1}>
                                        <Box h="450px" mb="7" bgGradient="linear(to-b, green.300, green.900)" p="4">
                                            <Flex h="70%">
                                                <Button onClick={() => toggleDetails(rocket)} mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                                                    DETAILS
                                                </Button>
                                            </Flex>
                                            <Flex>
                                                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                                                    <Flex mr="3" color="gray"><FaClock /></Flex>
                                                    <Flex mr="10">{rocket.company}</Flex>
                                                </Text>
                                                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                                                    <Flex mr="3" color="gray"><FaBomb /></Flex>
                                                    <Flex mr="10">{rocket.country}</Flex>
                                                </Text>
                                            </Flex>
                                            <Flex>
                                                <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                                                    {rocket.name}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </GridItem>
                                ))}

                            <Heading>Inactive</Heading>
                            <Text></Text> {/* it works */}

                            {APIData
                                .filter(rocket => !rocket.active)
                                .slice(0, 4)
                                .map((rocket, index) => (
                                    <GridItem key={index} colSpan={index === 0 ? 2 : 1} rowSpan={1}>
                                        <Box h="450px" mb="7" bgGradient="linear(to-b, red.300, red.900)" p="4">
                                            <Flex h="70%">
                                                <Button onClick={() => toggleDetails(rocket)} mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                                                    DETAILS
                                                </Button>
                                            </Flex>
                                            <Flex>
                                                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                                                    <Flex mr="3" color="gray"><FaClock /></Flex>
                                                    <Flex mr="10">{rocket.company}</Flex>
                                                </Text>
                                                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                                                    <Flex mr="3" color="gray"><FaBomb /></Flex>
                                                    <Flex mr="10">{rocket.country}</Flex>
                                                </Text>
                                            </Flex>
                                            <Flex>
                                                <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                                                    {rocket.name}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </GridItem>
                                ))}
                        </>
                    )}
                </>
            );
            break;
        case 'Timeslot':

            const rocketsByCountry: { [key: string]: Rocket[] } = APIData.reduce<{ [key: string]: Rocket[] }>((acc, rocket) => {
                const country = rocket.country;
                if (!acc[country]) {
                    acc[country] = [];
                }
                acc[country].push(rocket);
                return acc;
            }, {});

            const sortedCountries = Object.keys(rocketsByCountry).sort();

            content = (
                <>
                    {(!APIData || APIData.length === 0) && (
                        <Text>Loading...</Text>
                    )}

                    {APIData && APIData.length > 0 && (
                        <>
                            <Grid templateColumns="repeat(3, 1fr)" gap={7} >
                                {sortedCountries.map((country, countryIndex) => (
                                    <React.Fragment key={countryIndex}>
                                        <GridItem colSpan={3}>
                                            <Heading>{country}</Heading>
                                        </GridItem>
                                        {rocketsByCountry[country].slice(0, 4).map((rocket, index) => (
                                            <GridItem key={index} colSpan={1} rowSpan={1}>
                                                <Box h="350px" w="100%" mr="50px" mb="7" bgGradient="linear(to-b, green.300, blue.900)" p="4" display="flex" justifyContent="space-between" flexDirection="column">
                                                    <Flex h="50%">
                                                        <Button onClick={() => toggleDetails(rocket)} mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                                                            DETAILS
                                                        </Button>
                                                    </Flex>
                                                    <Flex>
                                                        <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                                                            <Flex mr="3" color="gray"><FaClock /></Flex>
                                                            <Flex mr="10">{rocket.company}</Flex>
                                                        </Text>
                                                        <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                                                            <Flex mr="3" color="gray"><FaBomb /></Flex>
                                                            <Flex mr="10">{rocket.country}</Flex>
                                                        </Text>
                                                    </Flex>
                                                    <Flex>
                                                        <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                                                            {rocket.name}
                                                        </Text>
                                                    </Flex>
                                                </Box>
                                            </GridItem>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </Grid>
                        </>
                    )}
                </>
            );
            break;
        default:
            content = null;
    }

    switch (selectedMenuItem) {
        case 'Home':
            headerText = 'New Releases';
            break;
        case 'Theatre':
            headerText = 'Active';
            break;
        case 'Timeslot':
            headerText = 'Country';
            break;
        default:
            headerText = '';
            break;
    }

    return (
        <>
            {APIData && APIData.length > 0 && (
                <Flex p="100px 50px 50px 50px" display="flex" justifyContent="space-between" alignContent="center" alignItems="center">
                    <Heading>{headerText}</Heading>
                    <Text color="yellow">View More</Text>
                </Flex>
            )}
            <>
                <Grid
                    templateColumns="2fr 2fr 2fr"
                    gap={8}
                    p="0px 50px 100px 50px"
                >
                    {content}
                    <Modal isOpen={showDetails} onClose={() => setShowDetails(false)}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Details for {selectedRocket?.name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {selectedRocket && (
                                    <>
                                        <Text fontSize="sm">Diameter (meters): {selectedRocket.diameter.meters}</Text>
                                        <Text fontSize="sm">Diameter (feet): {selectedRocket.diameter.feet}</Text>
                                        <Text fontSize="sm">Engines: {selectedRocket.engines.type}</Text>
                                        <Text fontSize="sm">First flight: {selectedRocket.first_flight}</Text>
                                        <Text fontSize="sm">First stage reusable: {selectedRocket.first_stage.reusable.toString()}</Text>
                                        <Text fontSize="sm">First stage fuel amount (tons): {selectedRocket.first_stage.fuel_amount_tons}</Text>
                                        <Text fontSize="sm">Height (meters): {selectedRocket.height.meters}</Text>
                                        <Text fontSize="sm">Height (feet): {selectedRocket.height.feet}</Text>
                                        <Text fontSize="sm">Id: {selectedRocket.id}</Text>
                                        <Text fontSize="sm">Landing legs number: {selectedRocket.landing_legs.number}</Text>
                                        <Text fontSize="sm">Mass (kg): {selectedRocket.mass.kg}</Text>
                                        <Text fontSize="sm">Mass (lb): {selectedRocket.mass.lb}</Text>
                                        <Text fontSize="sm">Stages: {selectedRocket.stages}</Text>
                                        <Text fontSize="sm">Success rate percentage: {selectedRocket.success_rate_pct}</Text>
                                        <Text fontSize="sm">Type: {selectedRocket.type}</Text>
                                        <Text fontSize="sm">Wikipedia: <a href={selectedRocket.wikipedia}>{selectedRocket.wikipedia}</a></Text>
                                    </>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="blue" onClick={() => setShowDetails(false)}>Close</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Grid>
            </>
        </>
    );
}
