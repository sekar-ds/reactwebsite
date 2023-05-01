import React from 'react';
import { fieldValidator ,Emailtype } from '../form';
import '../form/form.css';
import swal from 'sweetalert';
import { CloseCircleOutlined } from '@ant-design/icons';
import Header from '../Header';






const Form = () => {

    

const [input,setInput] = React.useState({
  fieldName:"",
  email:"",
});

const [errorMessage,setErrorMessage]= React.useState("");
const [successMessage,setsuccessMessage]=React.useState("")
const handleChange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
}
const formSubmitter = (e)=>{
    e.preventDefault();
    setsuccessMessage('');
    setErrorMessage('');

    if(!fieldValidator(input.fieldName)) 
    return setErrorMessage('Please enter fieldname a-zA-z letter');

    if(!Emailtype(input.email)) 
    return setErrorMessage('Please enter Email');

    

    swal({
        title: "Update success",
        text: setsuccessMessage('j'),
        icon: "success",
      });
      setsuccessMessage('success');
      
      
    
    }
    


    return (
       
       
        <div className='container1' id="login">
           <Header/>
            <div className='forms'>
            <a href="App" id='linktag' ><CloseCircleOutlined /></a>
            <form className='form-input' >
            <h3 >Signup</h3>
        <div className='container'>
                <div className='input1'>
                
                <lable>Name:</lable> 

                <input type="text" placeholder="Name...."  name='fieldName' onChange={handleChange} required/> 

                </div> 
                <div className='input1'>
                
                <lable>Email:</lable> 

                <input type="text" placeholder="Name...."  name='email' onChange={handleChange} required/> 

                </div> 
                
<br></br>
                
        
                <button onClick={formSubmitter} className="green">Signup</button>
                <button  className='delete' name="clear" type='reset' >Clear</button>

                
                </div>

                {errorMessage.length > 0 && <div style={{ marginTop:'13px',color:'red',fontSize:'14px',textAlign:'center',marginRight:"10px"}}>{errorMessage}</div>}
                {successMessage.length > 0 && <div style={{ marginTop:'13px',color:'green',fontSize:'14px',textAlign:'center',marginRight:"10px"}}>{successMessage}</div>}

                
            </form>
            
            </div>

        </div>
        
    )
}

export default Form
