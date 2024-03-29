import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
function CountriesList({cities, isLoading}) {
    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message= 'Add your first city by clicking on a city on the map'/>

    return (
        <ul className={styles.countryList}>
            {cities.map(city=>(
                
                <CountryItem country={city}  />
            ))}
            
        </ul>
    )
}

export default CountriesList
