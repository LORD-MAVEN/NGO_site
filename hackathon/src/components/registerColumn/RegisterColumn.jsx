import "./RegisterColumn.css"

function RegisterColumn() {

    return(
        <>
            <div className="registration_box">
                <div>Book a Complimentary Consultation Now!
                    <div>
                        <input type="text" placeholder="Name*"/>
                        <input type="email" placeholder="Email*"/>
                        <input type="number" placeholder="Phone no.*"/>
                    </div>
                    <button>Free Consultancy</button>
                </div>
            </div>
        </>
    )
}

export default RegisterColumn;