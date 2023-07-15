import React from "react";
import styles from './AddAdvertisement.module.css'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export const AddAdvertisement = () => {

    const [age, setAge] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value)
        setAge(event.target.value);
    };

    return(
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-standard-label">Transport</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Transport"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Transport'}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}