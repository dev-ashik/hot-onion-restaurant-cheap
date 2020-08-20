import React from 'react';
import './Finalreview.css'

const Finalreview = (props) => {
    const { foodName, detail, prise, quantity, url } = props.food;
    console.log(props)

    const foodPrise = prise * quantity
    return (
        <div className="Finalreview">
            <div className="Finalreview-img">
                <img src={url} alt=""/>
            </div>
            <div className="Finalreview-detail">
                <h6>{foodName}</h6>
                <strong className="foodPrise">${foodPrise}</strong><br/>
                <small>Delvery free</small>
            </div>
            <div className="Finalreview-twoButton">
                <button>-</button><strong>{quantity}</strong><button>+</button>
            </div>
        </div>
    );
};

export default Finalreview;