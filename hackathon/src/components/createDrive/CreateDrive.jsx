import "./CreateDrive.css"
import ArrowIcon from "../../assests/Arrow_Icon";
import { useState, useContext } from "react";
import DriveContext from "../../Context/DriveContext";

function CreateDrive() {
    const [driveName, setDriveName] = useState('');
    const [locationName, setLocationName] = useState('');
    const [dateName, setDateName] = useState('');
    const [timeName, setTimeName] = useState('');
    const [attendeesName, setAttendeesName] = useState('');
    const { driveData, setDriveData } = useContext(DriveContext);

    function retrieveData() {
        setDriveData([driveName, locationName, dateName, timeName, attendeesName, ...driveData,  ]);
        setDriveName('');
        setLocationName('');
        setDateName('');
        setTimeName('');
        setAttendeesName('');
    }

    return (
        <>
            <div className="drive">
                <div>
                    <div className="name">Name of<input type="text" placeholder="Drive" value={driveName} onChange={(e) => { setDriveName(e.target.value) }} /></div>
                    <span></span>
                    <div className="location">Location<input type="text" placeholder="Where are you helping?" value={locationName} onChange={(e) => { setLocationName(e.target.value) }} /></div>
                    <span></span>
                    <div className="date">Date<input type="text" placeholder="When?" value={dateName} onChange={(e) => { setDateName(e.target.value) }} /></div>
                    <span></span>
                    <div className="time">Time<input type="text" placeholder="Add Time" value={timeName} onChange={(e) => { setTimeName(e.target.value) }} /></div>
                    <span></span>
                    <div className="attendees">Number of<input type="number" placeholder="Attendees" value={attendeesName} onChange={(e) => { setAttendeesName(e.target.value) }} /></div>
                    <span></span>
                    <div> <button onClick={retrieveData}>Create <ArrowIcon /></button> </div>
                </div>
            </div>

        </>
    )
}

export default CreateDrive;
