import Features from "./features/Feature";
import Signup from "./signup/SignUp";

const Landing = () => {
    return (
        <div id="landing">
            <div className="row">
                <div className="col-md-8 col-xs-12 features-section">
                    <Features/>
                </div>
                <div className="col-md-4 col-xs-12 signup-section">
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default Landing;