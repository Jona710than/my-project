// import logo from './logo192.png';
// import { faPenNib } from '@fortawesome/react-fontawesome'
import './App.css';
  import './input.css'
// import Project from '../project';

function App() {
  return (
    <>
   <marquee direction='left' alternate className=' bg-teal-300 text-center  shrink drop-shadow-xl ' >
        Still trying to learn everything about Tailwind css from beginning
        </marquee>

    <div className='drop-shadow-2xl w-[100%]  flex list-none bg-sky-950 p-4 text-white gap-11 border-b-black border-solid border-[1px] '>
        
        <div className='w-[20px] h-[20px] bg-white relative p-5 ' >
          <p className=' w-7 h-7 bg-black absolute top-4 left-6 text-center font-[900] rounded-tl-lg ' >J</p>
        </div>

        <div className=' flex  gap-11 shrink'>  
          <li className=''>Home</li>
          <li className='flex-none'>About Us</li>
          <li className=''>Services</li>
          <li className=''>Projects</li>
          <li className=''>Github</li>
        </div>

        <div className=' ml-[30%] flex  gap-7 '>
          <li className=''>Country</li>
          <li className=''>Contact</li>
        </div>
        
        <div>
        {/* <FontAwesomeIcon icon={faPenNib} /> */}
          <li className='text-red-500 flex-none'>Sign up</li>
        </div>
    </div>

<form className='m-11 text-white' id='login-form'>
    <div className='bg-slate-600 w-60 p-5 shadow-xl rounded-[2rem]' id=''>
      <h1 className='text-[2rem] pb-4'><u>L</u>ogin</h1>
     <div> First Name : <br/> <input type='text' required  name="username" id="username-field" /></div>
     <br/>
      <div>Password :<br/> <input type='password' required name="password" id="password-field" /></div>
      <button className='bg-white mt-3 p-3 text-black'id='login-form-submit'>submit</button>
    </div>
    
</form>



    </>
  );
}

export default App;
