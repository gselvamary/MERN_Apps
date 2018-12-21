import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class TextFields extends React.Component {
 
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { input } = this.props;

    return (
      <form className={input.container} autoComplete="off">
        <TextField
          id={input.id}
          label={input.label}
          className={input.textField}
          type={input.type}
          margin="normal"
        />     
      </form>
    );
  }
}

TextFields.propTypes = {
  input: PropTypes.object
};

export default withStyles(styles)(TextFields);