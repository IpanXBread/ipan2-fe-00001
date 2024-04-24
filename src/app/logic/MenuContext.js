// MenuContext.js
import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Home');

    const selectMenuItem = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    return (
        <MenuContext.Provider value={{ selectedMenuItem, selectMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);
