import { useState, useEffect } from 'react';
import { getEntries, getSpents } from '../../services/firebaseCRUD';

import styles from '../../styles/Amount.module.css';

const ContainerAmount = () => {
    const [entries, setEntries] = useState(0);
    const [spents, setSpents] = useState(0);

    useEffect(() => {
        getEntries()
            .then(entries => {
                // console.log('entries: ',entries)
                const sumEntries = entries.map(entry => entry.data.amount)
                console.log(sumEntries)
            })

        getSpents()
            // .then(data => console.log('spents: ', data))    
    }, []);

    return (
        <div className={styles.totalContainer}>
            <div className={styles.accumulate}>
                {/* <p>Ingresos</p> */}
                <p className={styles.entries}>{entries}</p>
                {/* <p>Gastos</p> */}
                <p className={styles.spents}>{spents}</p>
            </div>
            <div className={styles.balance}>
                <p>Saldo</p>
            </div>
        </div>
    )
}

export default ContainerAmount