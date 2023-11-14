import './Card.css';

const Card = (props) => {
    return (
        <div className="card" >
            <div className={`card-body ${props.cardImg ? "imgCard" : "textCard"}`}>
                {!props.cardImg && <div>
                    {props.icon && <i className="fa fa-bell-o" aria-hidden="true"></i>}
                    {props.user && <h3>{props.user.userName} <span className='designation'>{props.user.designation}</span></h3>}
                    <h6 className="card-subtitle text-body-secondary">{props.bodyText}</h6>
                    {props.label && <label className='notification footer'>{props.label}</label>}
                </div>}
                {props.cardImg && <div>
                    <img src='webTemp.png' />
                </div>}
            </div>
        </div>
    )
}

export default Card;