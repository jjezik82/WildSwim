import { Box } from '@material-ui/core';
import React from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';

const homeScreen = () => {
  return (
    <Box display='flex'>
      <Sidebar />
      <Map />
    </Box>
  );
};

export default homeScreen;
