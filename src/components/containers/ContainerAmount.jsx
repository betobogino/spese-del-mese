import { useState, useEffect } from 'react';
import { getEntries, getSpents } from '../../services/firebaseCRUD';

import styles from '../../styles/Amount.module.css';

const ContainerAmount = () => {
    const [entries, setEntries] = useState(0);
    const [spents, setSpents] = useState(0);

    const calculateBalance = () => {
        return entries - spents;
    }    
    
    useEffect(() => {
        let entriesAcumulate = 0;
        let spentsAcumulate = 0;

        getEntries()
            .then(entriesDB => {
                entriesDB.forEach(entry => {
                    entriesAcumulate += entry.data.amount;
                    
                    setEntries(entriesAcumulate);
                })
            });  
            
        getSpents()
            .then(spentsDB => {
                spentsDB.forEach(spent => {
                    spentsAcumulate += spent.data.amount;

                    setSpents(spentsAcumulate);
                })
            });

        calculateBalance();    
    }, []);

    return (
        <div className={styles.totalContainer}>
            <div className={styles.accumulate}>
                <span>Ingresos: </span>
                <span className={styles.entries}>${entries}</span>
                <br />
                <span>Gastos: </span>
                <span className={styles.spents}>${spents}</span>
            </div>
            <div className={styles.balance}>
                <span>Saldo: </span>
                <span>${calculateBalance()}</span>
            </div>
        </div>
    )
}

export default ContainerAmount