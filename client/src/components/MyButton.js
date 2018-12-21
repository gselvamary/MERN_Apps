
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },

});
// type: submit

class MyButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          type={this.props.type}
          fullWidth
          variant="contained"
          color="primary"
          id={this.props.id}
          className={classes.button}
          label={this.props.label}
          
        >
          {this.props.label}
        </Button>
      </div>
    );
  }
}
MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyButton);