import Sidebar from "../components/Sidebar"
import styles from './AppLayout.module.css'
import Map from "../components/Map"
function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            APP
        </div>
    )
}

export default AppLayout
