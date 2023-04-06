import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Message, Forum, Notifications } from '@material-ui/icons';
import Conversations from './Conversations';
import Messages from './Messages';
import NotificationsList from './NotificationsList';

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
  },
  drawerPaper: {
    width: drawerWidth,
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
      <Router>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/messages">
                <ListItem button key="Messages">
                  <ListItemIcon><Message /></ListItemIcon>
                  <ListItemText primary="Messages" />
                </ListItem>
              </Link>
              <Link to="/conversations">
                <ListItem button key="Conversations">
                  <ListItemIcon><Forum /></ListItemIcon>
                  <ListItemText primary="Conversations" />
                </ListItem>
              </Link>
              <Link to="/notifications">
                <ListItem button key="Notifications">
                  <ListItemIcon><Notifications /></ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/conversations">
              <Conversations />
            </Route>
            <Route path="/notifications">
              <NotificationsList />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default Dashboard;
