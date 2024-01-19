import styles from './Button.module.css'

export default props =>
    <button className={`
        ${styles.button}
        ${props.operation ? `${styles.operation}` : ''}
        ${props.double ? `${styles.double}` : ''}
        ${props.triple ? `${styles.triple}` : ''}
    `}
        onClick={e => props.click && props.click(props.label)}
    >
        {props.label}
    </button>