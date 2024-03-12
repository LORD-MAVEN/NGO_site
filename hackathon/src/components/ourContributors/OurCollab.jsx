import "./OurCollab.css"
import { useState, useEffect } from 'react';

function OurCollab(){
    const collab = [
        {url: "../src/assests/images/David.jpg", name: "David Harbor", work: "Software Engineer"},
        {url: "../src/assests/images/ajay.jpg", name: "Ajay Gupta", work: "Businessman"},
        {url: "../src/assests/images/Neelam.jpg", name: "Neelam Chauahn", work: "Social Worker"},
        {url: "../src/assests/images/Gurpreet.jpg", name: "Gurpreet Singh", work: "Manager at TCS"},
        {url: "../src/assests/images/Susan.jpg", name: "Susan Fox", work: "Fashion Designer"},
        {url: "../src/assests/images/vijay.jpg", name: "Vijay Kumar", work: "Actor"},
      ];
    const [currentCollab, setCurrentCollab] = useState([collab[0], collab[1], collab[2]]);

    useEffect(() => {
        function myFunction() {
          const temp = [collab[0], collab[1], collab[2]];
          collab.shift();
          collab.push(temp[0]);
          setCurrentCollab(temp);
        }
        
        myFunction(); // Call initially
        const intervalId = setInterval(myFunction, 2000);
    
        return () => clearInterval(intervalId); // Cleanup
      }, []); // Empty dependency array to run the effect only once

    return(
        <>
            <div className="title3">Top Contributors</div>
            <div className="treadmill">\
                <div>
                    <div className="one" ><img src={currentCollab[0].url} /><div>{currentCollab[0].name}<div>{currentCollab[0].work}</div></div></div>
                    <div className="two"><img src={currentCollab[1].url} /><div>{currentCollab[1].name}<div>{currentCollab[1].work}</div></div></div>
                    <div className="three"><img src={currentCollab[2].url} /><div>{currentCollab[2].name}<div>{currentCollab[2].work}</div></div></div>
                </div>
            </div>
        </>
    )
}

export default OurCollab;