import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
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
                        <MenuItem value={this.props.value} name={this.props.name} id={this.props.id}> </MenuItem>
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