import React from "react";

const Titles = props => (
    <div>
        <div>
            {props.sunrise && <p className="title-container__subtitle">Sunrise: <span className="weather__value">{props.sunrise}</span></p>}
            {props.sunset && <p className="title-container__subtitle">Sunset: <span className="weather__value">{props.sunset}</span></p>}
        </div>
        <div><i className={`wi ${props.weatherIcon}`}></i></div>
        <h1 className="title-container__title">Weather Finder</h1>
    </div>
)

export default Titles;