import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
    state = {
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar color='secondary'  >
                    <Toolbar  >
                        <Typography variant="h4" align="center" color="inherit" title={this.props.title} className={classes.grow}>
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
    classes: PropTypes.object,

};

export default withStyles(styles)(ButtonAppBar);
