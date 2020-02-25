import React from 'react';
import './App.css';

import LoadingButton1 from './component/LoadingButton/index1'
import LoadingButton2 from './component/LoadingButton/index2'
import LoadingButton3 from './component/LoadingButton/index3'
import LoadingButton4 from './component/LoadingButton/index4'

function App() {
  return (
    <div className="App">
      <LoadingButton1 />
      <LoadingButton2 />
      <div>
        <LoadingButton3 btnText={"获取验证码3.1"} totalSecond={12} />
        <LoadingButton3 btnText={"获取验证码3.2"} totalSecond={15} />
      </div>

      <LoadingButton4 />
    </div>
  );
}

export default App;
