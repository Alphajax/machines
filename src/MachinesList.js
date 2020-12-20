import React from "react";
import {Box, Card, CardContent, List, ListItem, Typography} from "@material-ui/core";
import "./App.css";


function MachinesList({machines}) {
    console.log(machines)

    function mapMachineToCard(machine) {
        return (
            <ListItem>
                <Card style={{width:"80%"}}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h3">
                            {machine.name}
                        </Typography>
                        <Typography variant="h5" >
                            Максимальный диаметр: {machine.diameter}мм
                        </Typography>
                        <Typography variant="h5" >
                            Сила подачи: {machine.force}Н
                        </Typography>
                        <Typography variant="h5" >
                            Крутящий момент: {machine.torque}Нм
                        </Typography>
                        <Typography variant="h5" >
                            Привод шпинделя: {machine.spindelDrive}кВт
                        </Typography>
                    </CardContent>
                </Card>
            </ListItem>
        )
    }
    if (machines.length) {
        return (
            <Box className="machines-container" >
                <List component="nav" aria-label="main mailbox folders">
                    {machines.map(mapMachineToCard)}
                </List>
            </Box>

        )
    } else {
        return (
            <Typography variant="h2">
                Увы=( не найдено подходящих станков
            </Typography>
        )
    }


}

export default MachinesList;
