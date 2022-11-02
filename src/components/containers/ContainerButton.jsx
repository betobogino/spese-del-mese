import styles from '../../styles/Home.module.css';

const ContainerButton = ({children}) => {
    return (
        <div className={styles.btnContainer}>
            {children}
        </div>
    )
}

export default ContainerButton