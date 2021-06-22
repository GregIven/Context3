import React from 'react'
import './App.css';
import Container from './Container/Container';
import { appContext } from './Context/Context';

const CITY_NAME = 'new york'
const API_KEY = '4cb192e459db0f503de68ecd35c8fde4'

function App() {
    const [fetchedAPIData, setCurFetchedData] = React.useState({})

    React.useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`)
            .then(res => {
                return res.json()
            })
            .then(json => {
                setCurFetchedData(json)
                console.log(fetchedAPIData)
            })
            .catch(e => console.log(e))
    }, [])

  return (
    <appContext.Provider value={fetchedAPIData}>
      <Container />
    </appContext.Provider>
  );
}

export default App;
