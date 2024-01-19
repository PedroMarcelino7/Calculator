import styles from './Display.module.css'

export default props =>
    <div className={styles.display}>{props.value}</div>