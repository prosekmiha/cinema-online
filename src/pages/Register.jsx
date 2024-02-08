import React, { useState } from 'react'
import bg from '../assets/bg.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"; 
import { auth, db } from "../config/firebase-config.js"

const Login = () => {

  document.title = "Registracija | OnlineCinema";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const addUser = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {    
        username: username,
        email: email  
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleRegister = async() => {
    if(password === repeatPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {      
          const user = userCredential.user;
          setError("");
          addUser();
          setUsername("");
          setEmail("");
          setPassword("");
          setRepeatPassword(""); 
          setTimeout(() => {
            navigate("/login");
          }, 2000)      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        errorCode === "auth/invalid-email" && setError("Neustrezen e-poštni naslov.")
        errorCode === "auth/weak-password" && setError("Geslo je prekratko.")
        errorCode === "auth/email-already-in-use" && setError("Ta e-poštni naslov je že uporabljen.")
        errorCode === "auth/missing-password" && setError("Geslo je prazno.")
      });
    } else {
      setError("Gesla se ne ujemata.")
    }   
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleRegister()
    }
  }

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center' onKeyDown={handleKeyDown}>
        <img src={bg} className='absolute h-[100vh] w-[100vw] blur-lg' />
        <div className='flex flex-col relative h-[650px] w-[500px] bg-black rounded-xl p-[40px] shadow-lg justify-between'>
            <div className='text-white'>
                <h1 className='font-bold text-3xl mb-4'>Registracija</h1>
                <p className=''>Uživaj v vseh prednostih, ki ti jih prinaša OnlineCinema račun.</p>
            </div>
            <div className='flex flex-col gap-3 mb-[50px] items-center'>
              <input onChange={(e) => setUsername(e.target.value)} value={username} className='h-[55px] w-full bg-[#3b3b3b] p-3 outline-none text-white' type="text" placeholder='Uporabniško ime' required />
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='h-[55px] w-full bg-[#3b3b3b] p-3 outline-none text-white' type="email" placeholder='E-pošta' required />
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='h-[55px] w-full bg-[#3b3b3b] p-3 outline-none text-white' type="password" placeholder='Geslo' required />
              <input onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} className='h-[55px] w-full bg-[#3b3b3b] p-3 outline-none text-white' type="password" placeholder='Ponovno geslo' required />
              <p className='text-[red] font-semibold h-[50px]'>{error}</p>
            </div>
            <div className='flex text-white justify-between items-center'>
                <Link to='/login' className='text-[#6b6b6b] font-semibold hover:text-[#808080]'>PRIJAVA</Link>
                <div onClick={() => handleRegister()} className='bg-[#3950d4] px-4 py-2 rounded-md hover:bg-[#3962d4] cursor-pointer font-semibold'>REGISTRACIJA   </div>
            </div>
        </div>
    </div>

  )
}

export default Login