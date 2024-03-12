import Header from "../header/Header";
import CreateDrive from "../createDrive/CreateDrive";
import OurNGOs from "../ourNGOs/OurNGOS";
import OurPurpose from "../ourPurspose/OurPurpose";
import OurCollab from "../ourContributors/OurCollab";
import OurAchievements from "../ourAchievements/OurAchievements";
import RegisterColumn from "../registerColumn/RegisterColumn";
import ComingEvents from "../upcomingEvents/ComingEvents";
import Quote from "../quote/Quote";

function WelcomePage(){

    return(
        <>
            <Header />
            <CreateDrive/>
            <Quote />
            <OurPurpose />
            <OurNGOs />
            <OurCollab />
            <ComingEvents/>
            <RegisterColumn />
        </>    
    )
}

export default WelcomePage;