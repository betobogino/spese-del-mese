import styles from '../../styles/Sidebar.module.css';

const ContainerSidebar = ({children}) => {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}

export default ContainerSidebar