import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import {fetchOneCall} from '../services/Api';

function WeatherChart({ search, coord}) {
    const [graph, setGraph] = useState({ type:"", labels:['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'], data:[12, 19, 3, 5, 2, 3]});
    const [labels, setLabels] = useState([]);
    const [graphdata, setGraphdata] = useState([]);
    const [hourly, setHourly] = useState();
    const [daily, setDaily] = useState();
    let exclude = `current,minutely,alerts`;
    let lat; let lon;
    if(coord){
     lat = coord.lat;
     lon = coord.lon;
    }
    useEffect(() => {
        fetchOneCall(lat, lon, exclude)
        .then(data => {
            setHourly(data[0]);
            setDaily(data[1]);
        }).catch(err => console.log(err)) 
    }, [search])

    function onClickHourly(){
        setGraph({...graph, type:"Hourly"});
      //hourly.map(({temp}) => setGraphdata([...graphdata, temp]));
      //setGraph({...graph, type:"Hourly", data:graphdata});
    }
    function onClickDaily(){
        setGraph({...graph, type:"Daily"});
       // daily.map(({temp}) => setGraphdata([...graphdata,temp.day]));
       // setGraph({...graph, type:"Daily", data:graphdata});
    }
    return (
        <div className="row mt-4 ms-5 chart">
            <p className="fs-2 fw-bold mt-4">Weather Chart</p>
                <div className="bg-light">
                    <p className=" filter fs-3 mx-5 mt-3 text-secondary">
                        <span className=" p-3 border-end border-start btn btn-lg" onClick={() => onClickDaily()}>Daily</span>
                        <span className=" p-3 border-end btn btn-lg"  onClick={() => onClickHourly()}>Hourly</span>
                        </p>
                <Line
                data={{
                    labels:graph.labels,
                    datasets:[{
                        label:`${graph.type} Weather Chart`,
                        data:graph.data,
                        backgroundColor:'rgba(137,196,244,1)',
                        borderColor:'rgba(137,196,244,1)'
                    }]
                }}
                height={400}
                width={600}
                />
            </div>
        </div>
    )
}

export default WeatherChart
