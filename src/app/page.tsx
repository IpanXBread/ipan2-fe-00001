'use client'
// Basic
import React, { createContext, useState, useEffect, useContext } from 'react';

// components
import HeaderRF from './component/headerRF';
import FooterRF from './component/footerRF';
import ResultRF from './component/resultsRF';

// logic
import { MenuProvider } from './logic/MenuContext';
import SearchContext from './logic/SearchContext';

const APIDataContext = createContext(null);

export default function MainPage() {

  const [APIData, setAPIData] = useState(null);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setAPIData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MenuProvider>
      <HeaderRF />

      <APIDataContext.Provider value={APIData}>
        <SearchContext />
        <ResultRF />
      </APIDataContext.Provider>

      <FooterRF />
    </MenuProvider>
  );
}

export function useAPIData() {
  return useContext(APIDataContext);
}