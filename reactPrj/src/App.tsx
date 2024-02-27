import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import MyTokenV1 from './abi/MyTokenV1.json';

import Web3 from 'web3';
import { eventNames } from 'process';


const App = () => {

  const [myTokenV1GetA, setmyTokenV1GetA] = useState('');

  var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'));

  /* MyTokenV1의 abi와 proxy contract address 입력*/
  const myTokenV1 = new web3.eth.Contract(MyTokenV1.abi,'0xe7f1725e7734ce288f8367e1bb143e90bb3f0512')
  const getA = async() => {
    const getA:any = await myTokenV1.methods.getA_increse().call({
      from:'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    })

    setmyTokenV1GetA(`${getA}`);
  }

  return (
    <div>
      <h1>Sample contract test page!</h1>
      <div className='c_boxer'>
      <h2>Upgradable ERC20 Test</h2>
      <div className='c_boxer'>
        <p><b>[MyTokenV1]</b>
            <button className='c_bule' onClick={()=>getA()}>retrieve</button>
            <label htmlFor=''>getA 결과 :::  </label><input id='id_getA' type="text" value={myTokenV1GetA} />
          </p>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default App;