import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function SearchBox({ handleSearch }) {
    const [searchTxt, setSearchTxt] = React.useState('');
    function handleChange(event) {
        const currentVal = event.target.value;
        setSearchTxt(currentVal);
    }
    return (
        <Grid container spacing={2}>

            <Grid item lg={10} md={12} xs={12}>
                <TextField
                    id="outlined-full-width"
                    label="Search"
                    style={{ margin: 8 }}
                    placeholder="Search your Query here"
                    helperText="You can search your query here eg: A message.."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={searchTxt}
                    onChange={handleChange}
                    variant="outlined"
                />
            </Grid>
            <Grid style={{margin: 'auto'}} item lg={2} md={2} xs={2}><Button  color='primary' onClick={() => handleSearch(searchTxt)} variant='outlined'>Search</Button></Grid>


        </Grid>
    )
}