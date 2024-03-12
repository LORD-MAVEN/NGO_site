import {FaArrowRight} from 'react-icons/fa';

function ArrowIcon() {

    return(
        <>
            <FaArrowRight style={{width: "15px", height: "15px", animationName: "myAnimation", animationDuration: "0.5s", animationTimingFunction: 'ease-in-out'}}/>
        </>
    )
}

export default ArrowIcon;