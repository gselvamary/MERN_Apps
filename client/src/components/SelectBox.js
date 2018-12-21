import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SelectBox extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        value={this.props.value}
                        onChange={this.props.onChange}
                        input={<OutlinedInput name={this.props.name} id={this.props.id}
                            label={this.props.label}
                        />
                        }
                    >
                        <MenuItem value={this.props.value}> </MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SelectBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectBox);