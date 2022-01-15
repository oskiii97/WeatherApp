import React  from "react";

const Result = props => {
    const  { err, city, temp, sunrise, sunset, date, pressure, wind } = props.weather

    let content = null;

    if(!err && city){

        const sunriseTime = new Date(sunrise*1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset*1000).toLocaleTimeString()
        content = (
            <div>
                <h3> Wyniki wyszukiwania dla: {city}</h3>
                <h4> Dane dla dnia i godziny: {date}</h4>
                <h4> Aktualna temperatura: {temp} &#176;C </h4>
                <h4> Wschód słońca dzisiaj: {sunriseTime} </h4> 
                <h4> Zachód słońca: {sunsetTime} </h4>
                <h4> Aktualna siła wiatru: {wind } m/s</h4>
                <h4> Aktualne ciśnienie: {pressure} hPa</h4>
            </div>
        )
    }

    return ( 
       <div className='result'>
           {err ? "Brak miasta w bazie." : content}
       </div>
         );
}

export default Result;
