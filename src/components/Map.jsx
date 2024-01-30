import styles from './Map.module.css'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'


function Map() {

    const navigate = useNavigate();

    const [searchParam, setSearchParam]=  useSearchParams()
    const lat = searchParam.get("lat")
    const lng = searchParam.get("lng")
    return (
        <div className={styles.mapContainer} onClick={()=>{
            navigate("form")
        }}>
            <h1>Map</h1>
            <h1>Position: {lat}, {lng}</h1>
            <button onClick={()=>{
                setSearchParam({lat:23, lng:50})
            }}>Change Position</button>
        </div>
    )
}

export default Map
