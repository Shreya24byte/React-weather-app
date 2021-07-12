
export const fetchapi = async (type, place) => {
    const url = `https://api.openweathermap.org/data/2.5/${type}?q=${place}&APPID=e32601b5eb256f96d7bac5b004e62c4c`;
    const response = await fetch(url);
    const resJson = await response.json();
    if(type === 'forecast'){
        const forecast = resJson.list;
         const newForecast = forecast.slice(0,6);
         console.log(newForecast);
         return newForecast;
    } else {
        return resJson;
    }  
}
export const fetchOneCall = async (lat,lon, exclude) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&APPID=e32601b5eb256f96d7bac5b004e62c4c`;
    const response = await fetch(url);
    const resJson = await response.json();
    const h = resJson.hourly;
    const hourly = h.slice(0,6);
    const d = resJson.daily;
    const daily = d.slice(0,6);
    return [hourly, daily];
}