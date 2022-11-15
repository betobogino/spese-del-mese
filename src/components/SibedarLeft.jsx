import styles from '../styles/Sidebar.module.css';

const SibedarLeft = () => {
    return (
        <div className={styles.sidebarLeft}>
            <div className={styles.sidebarTop}>
                <button>HISTORICO</button>
            </div>
            <div className={styles.sidebarBottom}>
                <button>DIA</button>
                <button>MES</button>
                <button>AÑO</button>
            </div>
        </div>
    )
}

export default SibedarLeft