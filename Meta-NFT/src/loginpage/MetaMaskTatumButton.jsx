
import React from 'react';
import { MetaMaskConnect } from './MetaMaskConnect';


function MetaMaskTatumButton() {
const { connectMetaMask, account } = MetaMaskConnect();


return (
<div>
{account ? (
<div>Connected to: {account}</div>
) : (
<button onClick={connectMetaMask}>Connect MetaMask</button>
)}
</div>
);
}


export default MetaMaskTatumButton;
