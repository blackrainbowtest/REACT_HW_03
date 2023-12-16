import styles from "./style.module.css"

const TopInfo = ({data}) => {
    return (
        <>
            <div className={styles.container} style={{backgroundImage: `url(${data.image})`}}>
                <p className={styles.direction}>
                    {data?.direction}
                </p>
            </div>
        </>
    )
}

export default TopInfo