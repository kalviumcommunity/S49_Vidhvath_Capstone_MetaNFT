import React, { useState } from 'react';

// INTERNAL IMPORT
import Style from '../styles/ConnectWallet.module.css';

const ConnectWallet = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
        {
            provider: 'https://th.bing.com/th/id/OIP.ELcrQrKQD3xwLfQ0wTKr6AHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            name: 'Metamask',
        },
        {
            provider: 'https://th.bing.com/th/id/OIP.moN7MPkjW1gV04iRVnLqzwHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            name: 'WalletConnect',
        },
        {
            provider: 'https://th.bing.com/th/id/OIP.1fO7LZobAxcXP7hA9fz3BgAAAA?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            name: 'WalletLink',
        },
        {
            provider: 'https://th.bing.com/th/id/OIP.soLrfQ2Ggqmfk8UDL7P74AAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            name: 'Fortmatic',
        },
    ];

    return (
        <div className={Style.ConnectWallet}>
            <div className={Style.ConnectWallet_box}>
                <h1>Connect your wallet</h1>
                <p className={Style.ConnectWallet_box_para}>
                    Connect with one of our available wallet providers or create a new wallet
                </p>
                <div className={Style.ConnectWallet_box_provider}>
                    {providerArray.map((el, i) => (
                        <div
                            className={`${Style.ConnectWallet_box_provider_item} ${
                                activeBtn === i + 1 ? Style.active : ''
                            }`}
                            key={i + 1}
                            onClick={() => setActiveBtn(i + 1)}
                        >
                            <img
                                src={el.provider}
                                alt={el.name}
                                width={50}
                                height={50}
                                className={Style.ConnectWallet_box_provider_item_img}
                            />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConnectWallet;
