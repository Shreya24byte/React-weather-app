import React, {useState, useEffect} from 'react';
import { fetchapi } from '../services/Api';
import { tempConversion } from '../utils/Conversion';

function DailyForecast({ search}) {
    const [data, setdata] = useState();
    useEffect(() => {
        fetchapi("forecast",search)
        .then(value => {
            setdata(value);
            console.log(data);
        })
        .catch(err => console.log(err));
    }, [search])
    console.log(data);
    return (
        <div className="row mt-4 ms-5">
    <p className="fs-2 fw-bold my-4">{search}</p>
    {data ? (data.map(item =>(
        <div className="col-md-2 col-sm-6">
        <div className="card dailyForecast-card rounded-5 text-center bg-light">
            <div className="card-body">
                <h5 className="card-title">
                   {(item.weather[0].main === 'Rain') ? 
                         <i className="fas fa-cloud-rain text-primary fa-3x"></i>
                    : <i className="fas fa-sun text-warning fa-3x"></i>}
                    </h5>
                <h6 className="card-subtitle fw-bold my-2 mt-3">{tempConversion(item.main.temp)}<sup>&deg;</sup></h6>
                <p className="card-text  text-muted">{item.dt_txt}</p>
            </div>
        </div>
    </div>
    ))): null}
        </div>
    )
}

export default DailyForecast;
