import React, { createContext, useState } from 'react';

import Searchbynone from '../component/searchbynone';
import Searchbytheatre from '../component/searchbytheatre';
import Searchbytimeslot from '../component/searchbytimeslot';
import ResultRF from '../component/resultsRF';

import { MenuProvider, useMenu } from '../logic/MenuContext';

export default function SearchContext() {
    const { selectedMenuItem } = useMenu();
  
    return (
      <>
        {selectedMenuItem === 'Home' && <Searchbynone />}
        {selectedMenuItem === 'Theatre' && <Searchbytheatre />}
        {selectedMenuItem === 'Timeslot' && <Searchbytimeslot />}
      </>
    );
  }