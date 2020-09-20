import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  MdMenu, MdSchool,
} from 'react-icons/md';
import {
  RiHome6Fill, RiFileMarkFill, RiImageFill,
  RiTestTubeFill, RiTeamFill, RiMapPin2Fill,
  // RiWallet3Fill,
} from 'react-icons/ri';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
// function ListItemLink(href, props) {
//   return (
//     <Link href={href}>
//       <ListItem button {...props}>
//         <ListItemIcon>
//           <MdHome size="24" />
//         </ListItemIcon>
//         <ListItemText primary="Home" />
//       </ListItem>
//     </Link>
//   );
// }
export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <RiHome6Fill size="24" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/courses">
          <ListItem button>
            <ListItemIcon>
              <RiFileMarkFill size="24" />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>
        </Link>
        <Link href="/gallery">
          <ListItem button>
            <ListItemIcon>
              <RiImageFill size="24" />
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItem>
        </Link>
        <Link href="/testseries">
          <ListItem button>
            <ListItemIcon>
              <RiTestTubeFill size="24" />
            </ListItemIcon>
            <ListItemText primary="Test Series" />
          </ListItem>
        </Link>
        {/* <Link href="/fees">
          <ListItem button>
            <ListItemIcon>
              <RiWallet3Fill size="24" />
            </ListItemIcon>
            <ListItemText primary="Fees" />
          </ListItem>
        </Link> */}
        <Link href="/faculties">
          <ListItem button>
            <ListItemIcon>
              <RiTeamFill size="24" />
            </ListItemIcon>
            <ListItemText primary="Faculties" />
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button>
            <ListItemIcon>
              <RiMapPin2Fill size="24" />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button>
            <ListItemIcon>
              <MdSchool size="24" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MdMenu color="#FFFFFF" size="24" /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
