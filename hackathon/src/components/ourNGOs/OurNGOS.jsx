import "./OurNGOs.css"
import "./OurNGOs.css"
import FoodIcon from "../../assests/Food_icon";
import EnvironmentIcon from "../../assests/Environment_icon";
import BookIcon from "../../assests/Education_icon";
import HealthIcon from "../../assests/Health_icon";

function OurNGOs(){
    return(
        <>
            <div className="heading"><div>Our NGOs<img src="../src/assests/images/line.jpg" alt="" /></div></div>
            <div className="template">
                <div className="food"><button>Explore More</button>
                    <div><FoodIcon/>FOOD <div>Transforming hunger into hope, one meal at a time. Join us in our journey towards a world where no stomach goes empty.</div> </div>
                </div>
                <div className="hlth"><button>Explore More</button>
                    <div><HealthIcon/>HEALTH <div>Empowering communities for a healthier tomorrow. Join us in our mission to bring hope, healing, and happiness to those in need.</div> </div>
                </div>
                <div className="envt"><button>Explore More</button>
                    <div><EnvironmentIcon/>ENVIRONMENT <div>Join us in this mission to empowering young minds for a brighter future. Together, let's make education accessible to all.</div> </div>
                </div>
                <div className="edctn"><button>Explore More</button>
                    <div><BookIcon/>EDUCATION <div>Together, let's create a future where every breath is a testament to nature's resilience. Join us in our mission to preserve our planet!</div> </div>
                </div>
            </div>
        </>
    )
}
export default OurNGOs;