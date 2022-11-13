import { useState, useEffect } from 'react';
import { getEntries, getSpents } from '../../services/firebaseCRUD';

import styles from '../../styles/Amount.module.css';

const ContainerAmount = () => {
    const [entries, setEntries] = useState(0);
    const [spents, setSpents] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        let entriesAcumulate = 0;

        getEntries()
            .then(entriesDB => {
                entriesDB.forEach(entry => {
                    entriesAcumulate += entry.data.amount;
                    
                    setEntries(entriesAcumulate);
                })
            });    
    }, []);

    return (
        <div className={styles.totalContainer}>
            <div className={styles.accumulate}>
                <p className={styles.entries}>$ {entries}</p>
                <p className={styles.spents}>$ {spents}</p>
            </div>
            <div className={styles.balance}>
                <p>Saldo</p>
            </div>
        </div>
    )
}

export default ContainerAmount