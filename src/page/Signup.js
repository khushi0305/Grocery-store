import React, {useState} from 'react'
import signupcart from "../pro images/signupcart.png"
import { Link } from 'react-router-dom'
import { BiShow, BiHide } from "react-icons/bi";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword]= useState(false)
    const [data, setData] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
console.log(data)
// const handleShowConfirmPassword = () => {
//     setShowConfirmPassword((preve) => !preve); 
// }
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((preve) =>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
      };
      const handleShowConfirmPassword = () => {
        setShowConfirmPassword((preve) => !preve);
      };
    const handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password,confirmPassword} = data
        if(firstName && email && password && confirmPassword && lastName){
            if(password === confirmPassword){
                if(password === confirmPassword){
                    alert("successful")
                }
                else{
                    alert("password and confirm password not equal")
                }
            }
            else{
                alert("Please enter required data")
            }
        }
    }
  return (
    <div className='p-3 md: p-4'>
        <div className='w-full max-w-md bg-white m-auto flex items-center flex-col p-4'>
{/* <h1 className=''>SignUp</h1> */}
<div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
    <img src={signupcart} className='w-full'/>
</div>

<form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
    <label htmlFor='firstName'>First Name</label>
    <input type = {"text"} name='firstName' id='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'
    value={data.firstName} onChange={handleOnChange}/>

    <label htmlFor='lastName'>Last Name</label>
    <input type={'text'} name='lastName' id='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'
    value={data.lastName} onChange={handleOnChange}/>
    
    <label htmlFor='email'>Email</label>
    <input type={'email'} name='email' id='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'
    value={data.email} onChange={handleOnChange}/>
    
    <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
        
        <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

         

    <button className='max-w-[120px] w-full m-auto bg-blue-900 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
</form>
<p className='text-sm mt-2'>Already have an account? <Link className='text-blue-800 underline' to={"login"}>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup