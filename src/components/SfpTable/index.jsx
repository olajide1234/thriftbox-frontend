import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import { allAccounts } from '../../data/actions/account';

function SfpTable({ title, subTitle }) {

  const [assetAccounts, setAssetAccounts] = useState([]);
  const [liabilityAccounts, setLiabilityAccounts] = useState([]);
  const [equityAccounts, setEquityAccounts] = useState([]);
  const [assetBal, setAssetBal] = useState('');
  const [liabilityBal, setLiabilityBal] = useState('');
  const [equityBal, setEquityBal] = useState('');

  useEffect(() => {
    async function fetchData() {
      const details = await allAccounts();
      if (details.success === true) {
        const getAssetAccounts = await details.data.filter(account => account.accountType === 'Asset' || account.accountType === 'asset');
        await setAssetAccounts(getAssetAccounts);

        const getLiabilityAccounts = await details.data.filter(account => account.accountType === 'Liability' || account.accountType === 'liability');
        await setLiabilityAccounts(getLiabilityAccounts);

        const getEquityAccounts = await details.data.filter(account => account.accountType === 'Equity' || account.accountType === 'equity');
        await setEquityAccounts(getEquityAccounts);

        const getAssetBal = await getAssetAccounts.reduce((acc, curr) => acc + curr.balance.balance, 0);
        await setAssetBal(getAssetBal);

        const getLiabilityBal = await getLiabilityAccounts.reduce((acc, curr) => acc + curr.balance.balance, 0);
        await setLiabilityBal(getLiabilityBal);

        const getEquityBal = await getEquityAccounts.reduce((acc, curr) => acc + curr.balance.balance, 0);
        await setEquityBal(getEquityBal);

        return;
      }
      alert('Unable to load Statement of Finanical Position at this time')
    }
    fetchData();
  }, []);




  return (
    <div className="mt-4">
      <h5 className="text-center border-bottom mb-2 pb-2">{title}</h5>
      <p>{subTitle}</p>
      <div className="d-flex justify-content-center">
        {liabilityAccounts.length >= 1 ? <Table style={{ width: "100%" }} borderless hover>
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
            {assetAccounts.map(entry => <tr key={entry.id}>
              <td>{entry.accountCode}</td>
              <td>{entry.accountName}</td>
              <td>{entry.accountType}</td>
              <td>{entry.subAccountType}</td>
              <td>{entry.balance.balance}</td>
            </tr>)}
            <tr><td></td></tr>
            <tr>
              <td>Total assets</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{assetBal}</td>
            </tr>
          </tbody>

          <tbody>
            {liabilityAccounts.map(entry => <tr key={entry.id}>
              <td>{entry.accountCode}</td>
              <td>{entry.accountName}</td>
              <td>{entry.accountType}</td>
              <td>{entry.subAccountType}</td>
              <td>{entry.balance.balance}</td>
            </tr>)}
            <tr><td></td></tr>
          </tbody>

          <tbody>
            {equityAccounts.map(entry => <tr key={entry.id}>
              <td>{entry.accountCode}</td>
              <td>{entry.accountName}</td>
              <td>{entry.accountType}</td>
              <td>{entry.subAccountType}</td>
              <td>{entry.balance.balance}</td>
            </tr>)}
            <tr><td></td></tr>
            <tr>
              <td>Total Liabilities + Equity</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{liabilityBal + equityBal}</td>
            </tr>
          </tbody>
        </Table> : null}
      </div>
    </div>
  );
}

SfpTable.defaultProps = {
  title: '',
  subTitle: '',
};

SfpTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default SfpTable;
