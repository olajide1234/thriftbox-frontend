import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import { allAccounts } from '../../data/actions/account';

function PolTable({ title, subTitle }) {

  const [accounts, setAccounts] = useState([]);
  const [pORL, setpORL] = useState('');

  useEffect(() => {
    async function fetchData() {
      const details = await allAccounts();
      if (details.success === true) {
        const pOrLAccounts = await details.data.filter(account => account.isPorL === true);
        const profitOrLoss = await details.data.reduce((acc, curr) => acc + curr.balance.balance, 0);
        await setpORL(profitOrLoss)
        return setAccounts(pOrLAccounts);
      }
      alert('Unable to load Profit or Loss at this time')
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
              <th>Account type</th>
              <th>Sub-account type</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(entry => <tr key={entry.id}>
              <td>{entry.accountCode}</td>
              <td>{entry.accountName}</td>
              <td>{entry.accountType}</td>
              <td>{entry.subAccountType}</td>
              <td>{entry.balance.balance}</td>
            </tr>)}
            <tr><td></td></tr>
            <tr>
              <td>Net Income</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{pORL}</td>
            </tr>
          </tbody>
        </Table> : null}
      </div>
    </div>
  );
}

PolTable.defaultProps = {
  title: '',
  subTitle: '',
};

PolTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default PolTable;
