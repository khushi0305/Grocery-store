import React, {useState} from 'react'
import signupcart from "../pro images/signupcart.png"
import { Link } from 'react-router-dom'
const Signup = () => {
    // const[ShowConfirmPassword, setShowConfirmPassword]= useState(false)
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
    
    <label htmlFor='password'>Password</label>
    <input type={'password'} name='password' id='password' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'
    value={data.password} onChange={handleOnChange}/>
        
    <label htmlFor='confirmpassword'>Confirm Password</label>
    <input type={'password'} name='confirmpassword' id='confirmpassword' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'
    value={data.confirmpassword} onChange={handleOnChange}/>

    <button className='max-w-[120px] w-full m-auto bg-blue-900 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
</form>
<p className='text-sm mt-2'>Already have an account? <Link className='text-blue-800 underline' to={"login"}>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup