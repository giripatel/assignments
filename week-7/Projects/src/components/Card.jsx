import { Children, useState } from "react";
import './Card.css'

const Card = ({
    ...props}
) => {
    const [details,setDetails] = useState([{
        name : "Giridhar",
        location : "Earth",
        follwers : '80k',
        likes : '804k',
        pictures : '200'
    },{
        name : "Iconic",
        location : "Earth",
        follwers : '697k',
        likes : '80m',
        pictures : '1.1k'
    }])
    return (
        <div>
            {details.map((detail,index) => (
        <div className='Card' key={index}>
            <div className='upper-container'>
                <div className="image-container">
                <img  src="https://cdn.pixabay.com/photo/2023/09/20/03/30/character-8263792_640.jpg" alt="Profile pricture" />
                </div>
            </div>
            <div className="lower-container">
                <h3>{detail.name}</h3>
                <h4>{detail.location}</h4>
            </div>
            <hr />
            <div className="accountDetails-container">
            <div className='accountDetails'>
                <h4>{detail.follwers}</h4>         
                <h6>Followers</h6>
            </div>
            <div className='accountDetails'>
                <h4>{detail.likes}</h4>
                <h6>Likes</h6>
            </div>
            <div className='accountDetails'>
                <h4>{detail.pictures}</h4>
                <h6>Pictures</h6>
            </div>
            </div>
        </div>
        ))}
        </div>
    )
}

export default Card;