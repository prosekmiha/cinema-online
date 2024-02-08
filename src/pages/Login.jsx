import React, { useContext, useState } from 'react'
import bg from '../assets/bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase-config.js'
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection, doc } from "firebase/firestore"; 
import { Context } from '../App.jsx';


const Login = () => {

  document.title = "Prijava | OnlineCinema";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {currentUser, setCurrentUser} = useContext(Context);
  const [error, setError] = useState("");

  const handleLogin = async() => {
    let email = "";
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if(username == doc.data().username){
        email = doc.data().email;
        
        
      }   
    });  


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

    const user = userCredential.user;
    console.log(user)
    sessionStorage.setItem("user", username)
    setCurrentUser(username);
    setError("");
    navigate("/");
    setUsername("");
    setPassword("");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    setError("Napačen e-mail naslov ali geslo!")
  });
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center' onKeyDown={handleKeyDown}>
        <img src={bg} className='absolute h-[100vh] w-[100vw] blur-lg' />
        <div className='flex flex-col relative h-[650px] w-[500px] bg-black rounded-xl p-[40px] shadow-lg justify-between'>
            <div className='text-white'>
                <h1 className='font-bold text-3xl mb-4'>Prijava</h1>
                <p className=''>Uživaj v vseh prednostih, ki ti jih prinaša OnlineCinema račun.</p>
            </div>
            <div className='flex flex-col gap-3 mb-[150px] items-center'>
              <input onChange={(e) => setUsername(e.target.value)} value={username} name="username" className='h-[55px] w-full bg-[#3b3b3b] p-3 outline-none text-white' type="text" placeholder='Uporabniško ime'/>
              <input onChange={(e) => setPassword(e.target.value)} value={password} name="password" className='h-[55px] w-full bg-[#3b3b3b] p-3 outline-none text-white' type="password" placeholder='Geslo'/>
              <p className='text-[red] font-semibold h-[50px]'>{error}</p>
            </div>
            <div className='flex text-white justify-between items-center'>
                <Link to='/register' className='text-[#6b6b6b] font-semibold hover:text-[#808080]'>REGISTRACIJA</Link>
                <div onClick={() => handleLogin()} className='bg-[#3950d4] px-4 py-2 rounded-md hover:bg-[#3962d4] cursor-pointer font-semibold'>PRIJAVA</div>
            </div>
        </div>
    </div>

  )
}

export default Login