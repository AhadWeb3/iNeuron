import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Ineuron(){
  return(
    <section>
      <h1>Books List is</h1>
      <Image/>
      <Title/>
      <Author/>
    </section>
  );
}
const Title = () =>{
  return(
    <h2>The Basics of Bitcoins and Blockchains</h2>
  );
}
const Author = () =>{
  return(
    <h4>Antony</h4>
  );
}
const Image = () =>{
  return(
    <img src="https://m.media-amazon.com/images/P/B08RWTV6BW.01._SCLZZZZZZZ_SX500_.jpg" alt="" />
  );
}
ReactDOM.render(<Ineuron/>,document.getElementById('root'))
