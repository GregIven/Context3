import React from 'react'
import styled from 'styled-components'
import { appContext } from '../Context/Context'
import { CardUnit } from './CardStyles'


const Card = () => {
    const fetchedDataContext = React.useContext(appContext)
    const [extractedData, setExtractedData] = React.useState({ weather: undefined, main: undefined })

    //This useEffect hook is to stop an infinite loop from the setting state of the fetched data
    // weather and main are destructured from fetchedDataContext
    React.useEffect(() => {
            const { weather, main } = fetchedDataContext
            // console.log(weather)
            setExtractedData({ weather: weather, main: main })
            // console.log(extractedData.weather)
    }, [fetchedDataContext])
    console.log(extractedData)
    return (
        <div>
            <CardUnit>
            {extractedData.weather === undefined ? 
            <p>Loading...</p>
            :
            (Object.entries(extractedData.weather[0]).map(([key, value]) => <p>Key: {key} Value: {value}</p>))
            }
            </CardUnit>
        </div>
    )
}

export default Card
