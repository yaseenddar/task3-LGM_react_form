import React, { useRef, useState } from 'react'
export default function LoginForm() {

 const [formData,setFormData] = useState([]);
 var Skills = [];
 
 const username = useRef(null);
 const email = useRef(null);
 const website = useRef(null);

 const [Gender,setgender] = useState(null);
const handleSubmit=(e)=>{
    e.preventDefault();
    const data = {
        name:username.current.value,
        email:email.current.value,
        website:website.current.value,
        gender:Gender,
        skills:Skills,
    }
    setFormData((prevData)=>[...prevData,data])
    console.log("form ",Skills);
   
  
}
//  const handleSubmit=(e)=>{
//     e.preventDefault();
   
//     formData={
//         "name" :username,
        
//     }


//  }

  return (
    <div className='w-full h-[100vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gray-300'>
              <div className=' flex flex-col items-center justify-center'>
              <h2 className='text-center  text-4xl '>Enter Your Information</h2>

              
                <form className='border-2 border-slate-500 shadow-xl p-2 h-[50%] bg-gray-200 rounded-md w-[50%] ' onSubmit={handleSubmit}>

                    <label htmlFor="name" className='text-2xl'>Name:</label>
                    <input className='ml-16 text-xl border-2 border-gray-400 rounded-md ' ref={username} type="text" id="name" name="name" /><br /><br />

                    <label htmlFor="email" className='text-2xl'>Email:</label>
                    <input className='ml-[4.4rem] rounded-md text-xl border-2 border-gray-400 mb-5' ref={email} type="email" id="email" name="email" /><br />

                    <label htmlFor="website" className='text-2xl'>Website:</label>
                    <input className='ml-[2.6rem] mt-1 rounded-md text-xl border-2 border-gray-400 mb-5' ref={website} type="url" id="website" name="website" /><br />

                    <label className='text-2xl mr-[3rem]'>Gender:</label>
                    <input type="radio" id="female" name="gender"  onClick={(e)=>{setgender(e.target.value)}} value="female" />
                    <label className='text-lg mr-4' htmlFor="female">Female</label>
                    <input type="radio" id="male" name="gender" onClick={(e)=>{setgender(e.target.value)}} value="male" />
                    <label className='text-lg ' htmlFor="male">Male</label><br />
                   

    
                    <label htmlFor="skills " className='text-2xl mr-5 '> Skills</label>
                    <input type="checkbox" id="java" name="languages" onClick={(e)=>Skills.push(e.target.value)} value="java"/>
                    <label   className='text-2xl mr-2 font-light' htmlFor="java">Java</label>
                    <input type="checkbox" id="c" name="languages" onClick={(e)=>Skills.push(e.target.value)} value="c"/>
                    <label   className='text-2xl mr-2 font-light' htmlFor="c">c</label>
                    <input type="checkbox" id="javascript" name="languages" onClick={(e)=>Skills.push(e.target.value)} value="javascript"/>
                    <label   className='text-2xl mr-2 font-light' htmlFor="javascript">JavaScript</label>
                    <br />                    

                    <button type="submit" className='text-xl mr-5 mt-5 bg-green-500 rounded-md px-3 py-1  ml-10'>Submit</button>
                    <button type="reset" className='text-xl bg-green-500 rounded-md px-3 py-1 '>Clear</button>
                </form>
                </div>
                <div className="displayData md:border-l-[4px] border-gray-700 ">
                <h3 className='text-center bg-gray-300 text-4xl mt-1 md:mt-0 '>Submitted Data</h3>

                {
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  { formData.map((data, index) => (
                    <div key={index} className='border-2 border-black bg-gray-300 p-1 m-1'>
                      <p className='text-xl font-semibold'>Name: <span  className='font-light text-gray-700'>{data.name}</span> </p>
                      <p className='text-xl font-semibold'>Email: <span  className='font-light text-gray-700'>{data.email}</span> </p>
                      <p className='text-xl font-semibold'>Website: <span  className='font-light text-gray-700'>{data.website}</span> </p>
                      <p className='text-xl font-semibold'>Gender: <span  className='font-light text-gray-700'>{data.gender}</span> </p>
                      <p className='text-xl font-semibold'>Skills:{data.skills.map((e,key)=>(<span className='font-light text-gray-700'  key={key} >{" "+e}</span>))}</p>
                    </div>
                  ))}
                </div>
              }
             
                </div>

      
    </div>
  )
}

