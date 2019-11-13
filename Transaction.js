import React from 'react';
import styles from './Transaction.module.css';
import propTypes from 'prop-types';

const TransactionHistory = ({ transaction }) => (
    <table className={styles.transactionHistory}>
        <thead>
            <tr className={styles.head}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={styles.body}>
            {transaction.map(item => (
                <tr className={styles.row} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    transaction: propTypes.array.isRequired,
};

export default TransactionHistory;