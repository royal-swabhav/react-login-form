import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import List from './List'

  const App = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerr, setEmailerr] = useState(null);
    const [passworderr, setPassworderr] = useState(null);
    useEffect(()=>{
      if(email.indexOf('@') == -1){
        setEmailerr("please enter valid email")
      }
      else{
        setEmailerr(null)
      }
    })
    useEffect(()=>{
      if(password.length < 5){
        setPassworderr('please enter atlist 6 digit password ')
      }
      else{
        setPassworderr(null);
      }
    })

  return(
    <div>
      <form >
        <input type="email"
        placeholder='email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }} /><br/>
        { emailerr != null && <p>{emailerr}</p>

        }
           <input type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }} /><br/>
        {
       passworderr != null && <p>{passworderr}</p>

        }
        <button value='submit'>submit</button>
      </form>
    </div>
    )
  }

 
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );

 export default App;