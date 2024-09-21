import React from 'react';
import { useLocation } from 'react-router-dom';
import './TransactionSuccess.css';

const TransactionSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const txHash = queryParams.get('txHash');

  return (
    <div className="transaction-success-container">
      <h1>🎉 Transaction Successful! 🎉</h1>
      <p>Thank you for your purchase. Your transaction was successful.</p>
      <p><strong>Transaction Hash:</strong> {txHash}</p>
      <a
        href={`https://etherscan.io/tx/${txHash}`}
        target="_blank"
        rel="noopener noreferrer"
        className="etherscan-link"
      >
        View on Etherscan
      </a>
      <button onClick={() => window.history.back()}>Go Back to Marketplace</button>
    </div>
  );
};

export default TransactionSuccess;
