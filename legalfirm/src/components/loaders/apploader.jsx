import styles from "./loaders.module.css"

export default function AppLoader(){
    return(
        <div className={styles.wrapAppLoader}>
            <span className={styles.apploader}></span>
        </div>
    )
}