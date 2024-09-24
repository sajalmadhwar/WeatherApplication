const apiKey = '4cd26e0bfefe62a9a52868e8b230b0c7';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;