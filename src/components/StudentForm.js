import React,{useEffect, useState} from 'react'

const StudentForm = (props) => {
  const [name,setName] = useState(props.nameValue);
  const [email,setEmail] = useState(props.emailValue);
  const [rollNo,setRollNo] = useState(props.rollNoValue);
  const [day,setDay] = useState(props.dayValue);

//   here use effect is use to maintain the data that is not edited and update student button is prssed 
  useEffect(()=>{
    setName(props.nameValue);
    setEmail(props.emailValue);
    setRollNo(props.rollNoValue);
    setDay(props.dayValue);
                },[props.nameValue,props.emailValue,props.rollNoValue,props.dayValue])

  const arr = [name,email,rollNo,day];  //[Raj,raj@gmail.com,1]
 
  const handleClick = () =>{
      props.getState(arr);
  }

  return(
      <div style={{maxWidth:"40%",margin:"0px auto"}}>
          <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
          <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
          <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your roll number" />
          <input defaultValue={props.dayValue} onChange={(event)=>setDay(event.target.value)} class="form-control my-3" placeholder="Day" /> 
          <button onClick={handleClick} class="btn btn-outline-primary my-3 d-block mx-auto" type="submit">{props.children}</button>
      </div>
  )

}

export default StudentForm
