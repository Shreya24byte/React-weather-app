import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WeatherForecast from './WeatherForecast';
import DailyForecast from './DailyForecast';
import WeatherChart from './WeatherChart';
import {fetchapi} from '../services/Api';

function Dashboard(props) {
     const user = props.user.userName; 
     const userLocation = props.user.userLocation;
    const images = [
        "https://res.cloudinary.com/dypubdmrm/image/upload/v1625950121/mountains-3771960_1920_z106nh.jpg",
        "https://res.cloudinary.com/dypubdmrm/image/upload/v1626047842/hong-kong-1990268_1920_vxgimc.jpg",
        "https://res.cloudinary.com/dypubdmrm/image/upload/v1625950106/buildings-690364_1920_da8pi7.jpg",
        "https://res.cloudinary.com/dypubdmrm/image/upload/v1625950106/cathedral-1655830_1920_dekfcd.jpg",
        "https://res.cloudinary.com/dypubdmrm/image/upload/v1625950096/buildings-668616_1920_gt8opq.jpg",
        "https://res.cloudinary.com/dypubdmrm/image/upload/v1625950095/adult-1867665_1920_ostphg.jpg"
    ];
    const [img, setImg] = useState("https://res.cloudinary.com/dypubdmrm/image/upload/v1625950106/buildings-690364_1920_da8pi7.jpg");
    const [array, setArray] = useState([])
    const [city, setCity] = useState(null);
    const [input, setInput] = useState([]);
    const [search, setSearch] = useState("Bangalore");
    const [item, setItem] = useState([]);
    const [coord, setCoord] = useState();
    const locationValue = search || userLocation;
    function randomImg(){
        setItem(prevItems => [...prevItems, {key: prevItems.length, location: input, image:img}] );
        let random = Math.floor(Math.random() * 5);
        let value = images[random];
        setImg(value); 
   }
    function searchCity(){
        randomImg()
        setSearch(input);
        setInput('');
    }
    useEffect(() => {
        fetchapi("weather",locationValue)
        .then(data => {
            setCity(data); 
            setArray([...array, data.name]);
            setCoord(data.coord)
        });
    }, [search])
    useEffect(() =>{
        localStorage.setItem('data', JSON.stringify(item));
    });
    return (
        <div >
        <div className="row mx-4 my-4">
        <div className="col-md-9 col-sm-12 d-flex">
        <input data-testid="search" value={input} onChange={(e) => {setInput(e.target.value)}} className="form-control form-control-lg bg-light fs-2 ms-4" type="search" placeholder="Search" aria-label=".form-control-lg example"/>
        <i className="fas fa-search my-auto ms-2 mx-1 bg-light text-primary fa-3x" onClick={() => searchCity()}></i>
        </div>
        <div className="user-div col-md-2 ms-5 fs-3 text-muted"> 
            {user ? (<p className="user fw-bold ms-2"><i className="far fa-user text-secondary fs-1 me-2"></i> {user}</p>): (<Link to="/settings"><i className="user far fa-user-circle text-secondary fa-2x ms-5"></i></Link>)}
        </div>
    </div>
    {array ? (<WeatherForecast search={search}/>) : "Data not found"}
    <DailyForecast search={search}/>
     <WeatherChart search={search} coord={coord} />
    </div>
    )
}

export default Dashboard
