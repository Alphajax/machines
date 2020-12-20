import React from "react";
import {Box, FormControl, FormHelperText, Input, InputAdornment, InputLabel} from "@material-ui/core";
import "./App.css";

function Selectors({onChange}) {
    return (
        <Box className="selectors-container">
            <FormControl>
                <Input
                    onChange={(e) => onChange("diameter", +e.target.value)}
                    type="number"
                    endAdornment={<InputAdornment position="end">мм</InputAdornment>}
                />
                <FormHelperText id="standard-weight-helper-text">Макс. диаметр</FormHelperText>
            </FormControl>
            <FormControl>
                <Input
                    onChange={(e) => onChange("force", +e.target.value)}
                    type="number"
                    endAdornment={<InputAdornment position="end">Н</InputAdornment>}
                />
                <FormHelperText id="standard-weight-helper-text">Сила подачи</FormHelperText>
            </FormControl>
            <FormControl>
                <Input
                    onChange={(e) => onChange("torque", +e.target.value)}
                    type="number"
                    endAdornment={<InputAdornment position="end">Нм</InputAdornment>}
                />
                <FormHelperText id="standard-weight-helper-text">Крутящий момент</FormHelperText>
            </FormControl>
            <FormControl>
                <Input
                    onChange={(e) => onChange("spindel-drive", +e.target.value)}
                    type="number"
                    endAdornment={<InputAdornment position="end">кВт</InputAdornment>}
                />
                <FormHelperText id="standard-weight-helper-text">Привод шпинделя</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default Selectors;
