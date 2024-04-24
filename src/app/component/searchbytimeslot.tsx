import { Box, Flex, Text, Image } from '@chakra-ui/react';

export default function searchbytimeslot() {

    return (
        <Flex
            justify="center"
            align="center"
            height="80vh"
            bg="gray.900"
            flexDirection="row"
            p="180px"
        >
            {/* Image on the left */}
            <Box width="30%" marginRight="2%">
                <Image src="..\favicon.ico" alt="Image" w="70%" />
            </Box>

            {/* Text in the center */}
            <Box width="50%">
                <Text fontSize="6xl" fontWeight="bold" marginBottom="5">
                    Rockets based on country list!
                </Text>
                <Text fontSize="lg">
                    This page filters all rockets made by which country.
                </Text>
            </Box>
        </Flex>
    );
}