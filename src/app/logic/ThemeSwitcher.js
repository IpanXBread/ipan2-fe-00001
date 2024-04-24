import React, { createContext, useState } from 'react';
import { Button, Box } from '@chakra-ui/react';

const ThemeContext = createContext();

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        console.log("Change theme to ", theme);
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Box
                w="30px"  // Set width
                h="30px"  // Set height
                borderRadius="50%"  // Make it round
                bg="gray.700"  // Gray background
                mr="11"
            />
            John Glich {/* dummy dataa */}
        </ThemeContext.Provider>
    );
};

export { ThemeSwitcher, ThemeContext };
