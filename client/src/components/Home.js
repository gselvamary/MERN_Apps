import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ListItemIcon } from '@material-ui/core';
import SendIcon from '@material-ui/icons/SendRounded'
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    marginTop: '15%',
    width: '100%',
    maxWidth: '600px',
    marginLeft: '20%',
    marginRight: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    marginTop: '10%',
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    textAlign: 'center',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 450,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h3 alignItems='centre'>Home</h3>
      <List component="nav" className={classes.root}>
        <Link style={{ textDecoration: 'none' }} to="/addsession" >
          <ListItem button>

            <ListItemText primary="Add/Update Session" />
            <ListItemIcon>
              <SendIcon></SendIcon>
            </ListItemIcon>

          </ListItem>
        </Link>
        <Divider />
        <Link style={{ textDecoration: 'none' }} to="/addquestion" >
          <ListItem button divider>
            <ListItemText primary="Add Question" />
            <ListItemIcon>
              <SendIcon></SendIcon>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/update" >
          <ListItem button>
            <ListItemText primary="Update Question" />
            <ListItemIcon>
              <SendIcon></SendIcon>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Divider light />
        <Link style={{ textDecoration: 'none' }} to="/addfaculty" >
          <ListItem button>
            <ListItemText primary="Add Faculty to Course" />
            <ListItemIcon>
              <SendIcon></SendIcon>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Divider light />
        <Divider light />
        <ListItem button>
          <ListItemText primary="Reports" />
          <ListItemIcon>
            <SendIcon></SendIcon>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);