import { useState } from 'react'
import '../styles/globals.css'
import PContext from '../config/context';

function MyApp({ Component, pageProps }) {

  // set global state, aka context
  const [nums,setNums] = useState([]);
  const [stage,setStage] = useState(1);//currently on this stage
  const contextObj = {nums,setNums,stage,setStage};

  return <PContext.Provider value={contextObj}>
    <Component {...pageProps} />
  </PContext.Provider>
}

export default MyApp
