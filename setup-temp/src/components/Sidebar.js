import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Box, ButtonBase, Card, CardContent, Grid } from '@material-ui/core';
import {
  AcUnit,
  ChevronLeft,
  MoreVert,
  Place,
  Pool,
  Today,
} from '@material-ui/icons';
import useStyles from '../styles';
import SidebarItemDetail from './SidebarItemDetail';
import axios from 'axios';
import Moment from 'react-moment';

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [places, setPlaces] = useState([]);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailItem, setDetailItem] = useState();

  useEffect(() => {
    const fetchPlaces = async () => {
      const { data } = await axios.get('/api/places');

      setPlaces(data);
    };

    fetchPlaces();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const openDetailsHandler = (place) => {
    setDetailItem(place);
    if (detailItem === place) {
      setDetailOpen(!detailOpen);
    } else {
      setDetailOpen(true);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Grid container justifyContent='center' className={classes.footer}>
          <Box sx={{ py: 2 }} display='flex' alignItems='center'>
            <Pool fontSize='large' />
            <Typography variant='h6' display='inline'>
              wildswim
            </Typography>
          </Box>
        </Grid>
      </div>
      <List>
        {places.map((place) => (
          // <Link to={`/${place._id}`} className={classes.sidebarLink}>
          <ListItem key={place._id}>
            <ButtonBase
              className={classes.sidebarItemButton}
              onClick={() => openDetailsHandler(place)}
            >
              <Grid item xs={12}>
                <Card className={classes.sidebarItem}>
                  <CardContent className={classes.sidebarCard}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Box display='flex' alignItems='center'>
                          <Place fontSize='small' />
                          <Typography>
                            {''}
                            {place.title}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box display='flex' alignItems='center'>
                          <Today fontSize='small' />
                          <Typography>
                            {''}
                            <Moment format='DD.MM.YYYY'>
                              {place.updatedAt}
                            </Moment>
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box display='flex' alignItems='center'>
                          <AcUnit fontSize='small' />
                          <Typography>
                            {''}
                            {place.temp} &#8451;
                          </Typography>
                        </Box>
                      </Grid>
                      {detailOpen && detailItem === place ? (
                        <ChevronLeft className={classes.sidebarIcon} />
                      ) : (
                        <MoreVert className={classes.sidebarIcon} />
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </ButtonBase>
          </ListItem>
          // </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {detailOpen && (
        <SidebarItemDetail
          place={detailItem}
          close={setDetailOpen}
          isOpen={detailOpen}
        />
      )}
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
