import "./App.css"
import {Box, Button, Typography} from "@material-ui/core";
import MachinesList from "./MachinesList";
import Selectors from "./Selectors";
import machines from "./machines";
import {useState} from "react";

function App() {

    let machinesToShow = [...machines];
    const [diameter, setDiameter] = useState(0);
    const [force, setForce] = useState(0);
    const [torque, setTorque] = useState(0);
    const [spindelDrive, setSpindelDrive] = useState(0);

    function setParameterToState(type, value) {
        switch (type) {
            case "diameter":
                setDiameter(value)
                break;
            case "force":
                setForce(value)
                break;
            case "torque":
                setTorque(value);
                break;
            case "spindel-drive":
                setSpindelDrive(value);
                break;
            default:
                break;
        }
    }

    machinesToShow = machinesToShow.filter((machine) => {
        return (
            machine.diameter >= diameter
            && machine.force >= force
            && machine.torque >= torque
            && machine.spindelDrive >= spindelDrive
        )
    })
    console.log(machinesToShow)
    return (
        <Box>
            <Typography variant="h2" className="h1">Подбор станка</Typography>
            <Box display={"flex"} justifyContent={"space-between"} className={"content-container"}>
                <Selectors onChange={setParameterToState}/>
                <MachinesList machines={machinesToShow}/>
            </Box>
        </Box>
    );
}

export default App;
