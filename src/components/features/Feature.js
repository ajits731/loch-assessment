import { useState } from 'react';
import Card from '../../common/card/Card';
import './Feature.css';

const Features = () => {
    const [testimonials, setTesttimonials] = useState([
        {
            user: {userName: 'Ajit', designation: 'Fullstack Developer'},
            bodyText:"Love how Loch integrates portfolio analytics and whale watching into one unified app."
        },
        {
            user: {userName: 'Jon Doe', designation: 'Managing Director'},
            bodyText:"I use Loch daily nowadays. I find the whale watching from Loch extemely helpful."
        }
        ]);
    
    const [notifcations, setNotifications] = useState([
        {
            icon: true,
            label: 'hello@gmail.com',
            bodyText: 'We will be sending notifications to you here'
        },
        {
            icon: true,
            label: 'hello2@gmail.com',
            bodyText: 'This is the sample notification number 2'
        },
        {
            icon: true,
            bodyText: 'This is a notifcation without bottom text'
        }
    ])    
    return (
        <div id="features">
            <div className="row">
                <div className="col-md-6 topSection">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                    <h3>
                        Get notified when a highly correlated whale makes a move
                    </h3>
                    <p>
                        Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
                    </p>
                </div>
                <div className="col-md-4 topSection">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
                        <div className="carousel-inner">
                            {notifcations.map((notification, index) => {
                                return (
                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <Card icon={notification.icon} label={notification.label} bodyText={notification.bodyText} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 col-xs-12 middleSectionLeft'>
                    <Card cardImg={true} />
                </div>
                <div className='col-md-8 col-xs-12 middleSectionRight '>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    <h3>Watch what the whales are doing</h3>
                    <p>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 bottomSection'>
                    <h3 className='bt-heading'>Testimonials</h3>
                    <hr />
                    <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
                        <div className="carousel-inner" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            {testimonials.map((testimoni, index) => {
                                return (
                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                       <Card user={testimoni.user} bodyText={testimoni.bodyText} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;