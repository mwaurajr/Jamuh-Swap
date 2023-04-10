import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Message, Forum, Notifications } from '@material-ui/icons';
import PricingCard from './BookCard';
import "./Dashboard.css"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: '#333',
    color: '#fff',
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#333',
    color: '#fff',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/messages" className={classes.link}>
              <ListItem button key="Messages" className={`${classes.navItem}`}>
                <ListItemIcon><Message /></ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItem>
            </Link>
            <Link to="/conversations" className={classes.link}>
              <ListItem button key="Conversations" className={`${classes.navItem}`}>
                <ListItemIcon><Forum /></ListItemIcon>
                <ListItemText primary="Conversations" />
              </ListItem>
            </Link>
            <Link to="/notifications" className={classes.link}>
              <ListItem button key="Notifications" className={`${classes.navItem}`}>
                <ListItemIcon><Notifications /></ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className="dashboard-container">
          <h2>Welcome to Your Dashboard</h2>
          <div className="dashboard-nav">
        <Link to="/conversations">Messages</Link>
        <Link to="/books">Books</Link>
        <Link to="/notifications">Notifications</Link>
      </div>  
          <div className="dashboard-content">
           <PricingCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
