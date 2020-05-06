import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CustomSelect({ label, options, handleSelect }) {
    const [selected, setSelected] = React.useState('');
    const classes = useStyles();
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelected(selectedValue);
        // handleSelect();
    };
    return (<FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
            native
            value={selected}
            onChange={handleChange}
            inputProps={{
                name: label
            }}
        >
            {options.length === 0 && <option value='None'>NA</option>}
            {options.length>0 && options.map((opt, ind) => (<option key={ind} value={opt.value} >{opt.label}</option>))}
        </Select>
    </FormControl>)
}