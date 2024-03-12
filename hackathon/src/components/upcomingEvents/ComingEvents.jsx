import "./ComingEvents.css"
import EmptHeart from "../../assests/EmptHeart";
import FillHeart from "../../assests/FillHeart";
import { useState, useContext, useEffect } from "react";
import DriveContext from "../../Context/DriveContext";

function ComingEvents() {
const [isSaveOne, setIsSaveOne] = useState(false);
const [isSaveTwo, setIsSaveTwo] = useState(false);
const [isSaveThird, setIsSaveThird] = useState(false);
const [isSaveFourth, setIsSaveFourth] = useState(false);
const [fetchData, setFetchData] = useState()
const [flag, setFlag] = useState(-1)
const {driveData} = useContext(DriveContext)



useEffect(()=>{
    setFetchData(driveData)
    setFlag(flag+1)
}, [driveData])


console.log(fetchData)
console.log(flag)

function saveOne(){
    setIsSaveOne(!isSaveOne);
}
function saveTwo(){
    setIsSaveTwo(!isSaveTwo);
}
function saveThird(){
    setIsSaveThird(!isSaveThird);
}
function saveFourth(){
    setIsSaveFourth(!isSaveFourth);
}
    return(
        <>
            <div className="events">
                <span className="event_heading">Events to look forward to</span>
                {(driveData[0]!=null)?<div>
                    {(flag>0)?<div className="first">
                        <div className="img1" style={{backgroundImage: `url(../src/assests/images/food_distribution.webp)`}}>
                            <div><span onClick={()=>saveOne()}>{isSaveOne&&<FillHeart/>||<EmptHeart/>}</span></div>
                        </div>
                        <div className="name1"><span>{driveData[0]}</span></div>
                        <div className="location1"><span>{driveData[1]}</span></div>
                        <div className="date_time1"><span>{driveData[2]}</span><span>{driveData[3]}</span></div>
                    </div>:null}
                    {(flag>1)?<div className="second">
                        <div className="img2" style={{backgroundImage: `url(../src/assests/images/pet_care.jpg)`}}>
                            <div><span onClick={()=>saveTwo()}>{isSaveTwo&&<FillHeart/>||<EmptHeart/>}</span></div>
                        </div>
                        <div className="name1"><span>{driveData[5]}</span></div>
                        <div className="location1"><span>{driveData[6]}</span></div>
                        <div className="date_time1"><span>{driveData[7]}</span><span>{driveData[8]}</span></div>
                    </div>:null}
                    {(flag>2)?<div className="third">
                        <div className="img3" style={{backgroundImage: `url(../src/assests/images/Medicine_Distribution.jpg)`}}>
                            <div><span onClick={()=>saveThird()}>{isSaveThird&&<FillHeart/>||<EmptHeart/>}</span></div>
                        </div>
                        <div className="name1"><span>{driveData[10]}</span></div>
                        <div className="location1"><span>{driveData[11]}</span></div>
                        <div className="date_time1"><span>{driveData[12]}</span><span>{driveData[13]}</span></div>
                    </div>:null}
                    {(flag>3)?<div className="fourth">
                        <div className="img4" style={{backgroundImage: `url(../src/assests/images/cleaning.jpg)`}}>
                            <div><span onClick={()=>saveFourth()}>{isSaveFourth&&<FillHeart/>||<EmptHeart/>}</span></div>
                        </div>
                        <div className="name1"><span>{driveData[15]}</span></div>
                        <div className="location1"><span>{driveData[16]}</span></div>
                        <div className="date_time1"><span>{driveData[17]}</span><span>{driveData[18]}</span></div>
                    </div>:null}
                </div>:<h2>NO UPCOMING EVENTS</h2>}
            
            </div>
        </>
    )
}
export default ComingEvents;