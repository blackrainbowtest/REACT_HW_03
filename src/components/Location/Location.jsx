import TopInfo from "../common/TopInfo/TopInfo"
import img from "../../images/title/locations.png"
import styles from './style.module.css'
import map from '../../images/map.png'

const Location = () => {
    return (
        <>
            <div>
                <TopInfo data={{image: img, direction: 'Location'}}/>
                <div className={styles.map}>
                    <div className={styles.mapImage} style={{backgroundImage: `url(${map})`}}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Location