import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';

import TextField from '@material-ui/core/TextField';
//import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
});

class Input extends Component {
  render() {
    const { classes } = this.props;
      return (
    <div className={classes.container}>
      <TextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label={this.props.label}
        variant="outlined"
        name={this.props.name}
        id={this.props.id}
        type={this.props.type}
        value={this.props.value}
        fullWidth
        required
        onChange={this.props.onChange}
      />
    </div>
  );
}
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Input);