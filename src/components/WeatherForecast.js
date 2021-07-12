import React, {useState, useEffect} from 'react';

function WeatherForecast({search}) {
    const time = 60000;
    const [d, setd] = useState([])
    useEffect(() => {
        const localData = localStorage.getItem('data');
        const d = localData !== null ? JSON.parse(localData) : [];
        setd(d);
        },[search]);
    return (
        <div className="row mt-0 ms-5">
        <p className="fs-2 fw-bold mt-4 ">Weather Forecast</p>
            {d.slice(0,4).map(item => (
                <div className="col-sm-12 col-md-3 mt-2">
                    <div className="card ">
                        <img src={item.image} class="card-img-top" alt="..." height="250"/>
                        <div className="card-body">
                        <p className="card-text fs-3 fw-bolder">{item.location}</p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default WeatherForecast
