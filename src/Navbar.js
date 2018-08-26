import React from 'react';
import './Navbar.css';

export default ({ onSetCoinPair, fromCoin, toCoin })=> (
  <nav>
    <div className={(fromCoin === 'WINGS' && toCoin === 'USD') ? 'disabled' : ''}
         onClick={()=> onSetCoinPair('WINGS', 'USD')}>
      WINGS to USD
    </div>
    
    <div className={(fromCoin === 'BTC' && toCoin === 'USD') ? 'disabled' : ''}
         onClick={()=> onSetCoinPair('BTC', 'USD')}>
      BTC to USD
    </div>
    
    <div className={(fromCoin === 'ETH' && toCoin === 'USD') ? 'disabled' : ''}
         onClick={()=> onSetCoinPair('ETH', 'USD')}>
      ETH to USD
    </div>
  </nav>
);
