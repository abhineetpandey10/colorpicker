import {useEffect, useState} from 'react';
import Axios from 'axios';
import './styles.css';
function App() 
{
  const [url,setUrl]=useState('');
  const [dominant,setDominant]=useState('');
  const [border,setBorder]=useState('');
  function getResult()
  {
    console.log("Submitting");
    var uri='http://localhost:3001/color?src='+url;
    Axios.get(uri)
    .then((response)=>{
      console.log("Success");
      setDominant(response.data.dominant_color);
      setBorder(response.data.logo_border);
    });
  }
  return (
    <div>
      <div>
        <h1>
          Enter the URL of your image
        </h1>
        <textarea onChange={(event)=>setUrl(event.target.value)}>
        </textarea>
        <br/>
        <div className='btn' onClick={getResult}>Submit</div>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>
          <div>
            <h1>Dominant Color:</h1>
            <h2 style={{color:'gray'}}>{dominant}</h2>
          </div>
          <div>
            <h1>Logo Border Color:</h1>
            <h2 style={{color:'gray'}}>{border}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
