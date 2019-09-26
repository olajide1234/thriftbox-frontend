import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import { allAccounts } from '../../data/actions/account';

function CoaTable({ title, subTitle }) {

  const [accounts, setAccounts] = useState([]);
  const [debitSum, setdebitSum] = useState('');
  const [creditSum, setcreditSum] = useState('');

  useEffect(() => {
    async function fetchData() {
      const details = await allAccounts();
      if (details.success === true) {
        const addDebit = await details.data.filter(arr => arr.toIncrease == 'debit' || arr.toIncrease == 'Debit').reduce((acc, curr) => acc + curr.balance.balance, 0);
        const addCredit = await details.data.filter(arr => arr.toIncrease == 'credit' || arr.toIncrease == 'Credit').reduce((acc, curr) => acc + curr.balance.balance, 0);
        await setdebitSum(addDebit)
        await setcreditSum(addCredit)
        return setAccounts(details.data);
      }
      alert('Unable to load Chart of accounts at this time')
    }
    fetchData();
  }, []);


  return (
    <div className="mt-4">
      <h5 className="text-center border-bottom mb-2 pb-2">{title}</h5>
      <p>{subTitle}</p>
      <div className="d-flex justify-content-center">
        {accounts.length >= 1 ? <Table style={{ width: "100%" }} borderless hover>
          <thead>
            <tr>
              <th>Account code</th>
              <th>Account name</th>
              <th>To increase</th>
              <th>Is the account profit or loss ?</th>
              <th>Account type</th>
              <th>Sub-account type</th>
              <th>Description (Memo)</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(entry => <tr key={entry.id}>
              <td>{entry.accountCode}</td>
              <td>{entry.accountName}</td>
              <td>{entry.toIncrease}</td>
              <td>{`${entry.isPorL}`}</td>
              <td>{entry.accountType}</td>
              <td>{entry.subAccountType}</td>
              <td>{entry.memo}</td>
              <td>{entry.balance.balance}</td>
            </tr>)}
            <tr><td></td></tr>
            <tr>
              <td>Total debit</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{debitSum}</td>
            </tr>
            <tr>
              <td>Total credit</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{creditSum}</td>
            </tr>
          </tbody>
        </Table> : null}
      </div>
    </div>
  );
}

CoaTable.defaultProps = {
  title: '',
  subTitle: '',
};

CoaTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default CoaTable;
