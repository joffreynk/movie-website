import React from 'react';
import Header from './components/Header';

const App = () => (
  <div className="relative font-opensans " style={{ height: '200rem' }}>
    <div className="fixed top-0 right-0 left-0 h-28  bg-[#1f1f1f]">
      <Header />
    </div>

    <div>
      <p>
        some text
      </p>
    </div>
  </div>
);

export default App;
