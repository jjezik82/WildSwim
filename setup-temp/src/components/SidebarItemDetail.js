import {
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Cancel, Create, GpsFixed } from '@material-ui/icons';
import React from 'react';
import useStyles from '../styles';
import Carousel from 'react-material-ui-carousel';

const SidebarItemDetail = ({ place, close, isOpen }) => {
  const classes = useStyles();

  const closePopupHandler = () => {
    isOpen && close();
  };

  const moveToPlaceHandler = (position) => {
    console.log(position);
  };

  return (
    <div className={classes.sidebarDetail}>
      <Card className={classes.sidebarDetailContainer}>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={11}>
            <Box>
              <Typography variant='h4'>{place.title} </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <IconButton onClick={closePopupHandler}>
                <Cancel />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pt={2}>
              <Carousel animation='slide' autoPlay={false}>
                <div className={classes.sidebarDetailImage}>
                  <img src={place.image} alt='img01' />
                </div>
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.placeDetails}>
            <Box py={2}>
              <Typography>{place.details}</Typography>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box pr={1} display='inline'>
              <Chip label={place.category} color='primary' />
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <IconButton>
                <Create />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <IconButton onClick={() => moveToPlaceHandler(place.position)}>
                <GpsFixed />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default SidebarItemDetail;
