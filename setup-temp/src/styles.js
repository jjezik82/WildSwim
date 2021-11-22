import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidebarItem: {
    boxShadow: theme.shadows[2],
    transition: 'all 0.5s ease-out',
    '&:hover': {
      backgroundColor: theme.palette.action.disabled,
      boxShadow: theme.shadows[4],
    },
  },
  sidebarCard: {
    position: 'relative',
    borderLeft: '5px solid',
    borderLeftColor: theme.palette.success.main,
  },
  sidebarIcon: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
  },
  root: {
    display: 'flex',
    position: 'relative',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 400px)`,
      marginLeft: 400,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 400,
    backgroundColor: theme.palette.background.default,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarDetail: {
    position: 'absolute',
    top: '50%',
    left: '403px',
    transform: 'translateY(-50%)',
    zIndex: 10000,
    width: '500px',
    transition: 'all 0.5s ease-out',
  },
  placeDetails: {
    maxHeight: '200px',
    overflow: 'auto',
    marginBottom: '1rem',
  },
  sidebarItemButton: {
    width: '100%',
  },
  sidebarLink: {
    textDecoration: 'none',
  },
  sidebarDetailContainer: {
    backgroundColor: theme.palette.background.default,
    padding: '2rem',
  },
  sidebarDetailImage: {
    width: '100%',
    height: '200px',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  sidebarListItem: {
    position: 'relative',
  },
}));

export default useStyles;
