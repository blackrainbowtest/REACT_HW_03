import {Link} from "react-router-dom"
import styles from './style.module.css'

const PageNotFound = () => {
    return (<>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.notFound}>404</h1>
                <p className={styles.text}> <span className={styles.danger}>Opps!</span> Page not found.</p>
                <p className={styles.lead}>
                    {"The page you're looking for doesn't exist."}
                </p>
                <Link to={"/"} className={styles.btn}>Go Home</Link>
            </div>
        </div>
    </>)
}

export default PageNotFound