import "./Header.css";
import WelcomeImage from "../welcomeImage/WelcomeImage";
import ArrowIcon from "../../assests/Arrow_Icon";
import SearchIcon from "../../assests/Search_Icon";
import SearchFillIcon from "../../assests/SearchFill_Icon";
import DonateIcon from "../../assests/Donate_Icon";
import { useState } from "react";

function Header() {
    const [icon, setIcon] = useState({
        home: false,
        eventDrives: false,
        blogs: false,
        about: false,
        search: false,
    });

    function appear(item) {
        setIcon(prevState => ({
            ...prevState,
            [item]: true,
        }));
    }

    function disappear(item) {
        setIcon(prevState => ({
            ...prevState,
            [item]: false,
        }));
    }

    return (
        <div className="front_page">
        <div className="head_strip">
            <div className="title">Samarthya Vira</div>
            <div className="navigate">
                <div onMouseEnter={() => appear('home')} onMouseLeave={() => disappear('home')} className="home">
                    {icon.home && <ArrowIcon/>}
                    Home
                </div>
                <div onMouseEnter={() => appear('eventDrives')} onMouseLeave={() => disappear('eventDrives')} className="event">
                    {icon.eventDrives && <ArrowIcon/>}
                    Events
                </div>
                <div onMouseEnter={() => appear('blogs')} onMouseLeave={() => disappear('blogs')} className="blogs">
                    {icon.blogs && <ArrowIcon/>}
                    Blogs
                </div>
                <div onMouseEnter={() => appear('about')} onMouseLeave={() => disappear('about')} className="about">
                    {icon.about && <ArrowIcon/>}
                    About Us
                </div>
                <div onMouseEnter={() => appear('search')} onMouseLeave={() => disappear('search')} className="search">
                    {icon.search && <SearchIcon />||<SearchFillIcon/>}
                </div>
            </div>
            <div className="donate"><DonateIcon/>onate</div>
        </div>
        <WelcomeImage />
        </div>
    );
}

export default Header;