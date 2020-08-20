import React from 'react';
import './Currentfood.css'
import { Link } from "react-router-dom";

const Currentfood = (props) => {
    const { foodName, detail, prise, key, url } = props.foods;
    return (
        <div>
            <section className="food-card">
            <Link to={"/food"+key}>
                <div className="card-deck" style={{width: "15rem"}}>
                    <div className="card" style={{border: "none"}}>
                    <img src={url} className="card-img-top" style={{hight: "50px", width: "200px"}} alt="..."/>
                    <div className="card-body">
                        <p className="card-title">{foodName}</p>
                        <small className="card-detail">{detail}</small>
                    </div>
                    <div className="card-footer" style={{backgroundColor: "white", borderTop: "none"}}>
                    <h4>${prise}</h4>
                    </div>
                    </div>
                </div>
                </Link>
            </section>
            
        </div>
    );
};

export default Currentfood;