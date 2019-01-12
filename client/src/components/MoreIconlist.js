import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));


function MoreIconlist() {
    return (
        <WithState>
            {({ anchorEl, updateAnchorEl }) => {
                const open = Boolean(anchorEl);
                const handleClose = () => {
                    updateAnchorEl(null);
                };

                return (
                    <React.Fragment>
                        <IconButton
                            aria-label="More" color="inherit"
                            aria-owns={open ? 'render-props-menu' : undefined}
                            aria-haspopup="true"
                            onClick={event => {
                                updateAnchorEl(event.currentTarget);
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <Link style={{ textDecoration: 'none' }} to="/" > <MenuItem onClick={handleClose}>Home</MenuItem></Link>
                        <Link style={{ textDecoration: 'none' }}to="/Login" > <MenuItem onClick={handleClose} >Login</MenuItem></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Register">  <MenuItem onClick={handleClose} >Register</MenuItem></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Profile"> <MenuItem onClick={handleClose}  >Profile</MenuItem></Link>

                        </Menu>
                    </React.Fragment>
        );
    }}
        </WithState>
    );
}

export default MoreIconlist;