import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
class ButtonAppBar extends React.Component {
    render() {
       
       const { classes } = this.props;
    const {input } =this.props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" title={this.props.title} className={classes.grow}>
                        {this.props.title}
                    </Typography>
                    <Link className="text-white" linkname={this.props.linkName} to={this.props.to} >
                        <Button color="inherit">{this.props.linkname}</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    input: PropTypes.object,
};

export default withStyles(styles)(ButtonAppBar);
