import React from 'react';
import './Password.css';
import Header  from './Header';


class Password extends React .Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div>     
           <Header />           
            <div className="row mt-3 setpasstxt">

                            <div className="col-lg-3" ></div>
                            <div className="col-lg-6" >
                                <p className="setpassword">Set your password</p>
                                <p>Choose a password for signing in.</p>                  
                            </div>
                            <div className="col-lg-3"></div>    

            </div>

            <div className="row mt-3 passwortxt" >

                        <div className="col-lg-3" ></div>            
                        <div className="col-lg-4" >
                        <p style={{fontSize:"20px"}}>Password</p>                        
                        </div>            
                        <div className="col-lg-5" ></div>

            </div>

            <div className="row mt-3">            

                        <div className="col-lg-3" ></div>
                        <div className="col-lg-6" >                                        
                            <input type="text" className="passwordtextbox" placeholder=" Placeholder Text"></input>
                            <p className="passwordval1">Password must be atleast 6 characters long,contain </p>
                            <p className="passwordval2">atleast one capital and lower case letter, and special </p>
                            <p className="passwordval3">characters</p> 
                            <div className="buttons">
                                <button className="backbutton btn btn-default">BACK</button>
                                <button className="nextbutton">NEXT</button>
                            </div>                                                       
                        </div>
                        <div className="col-lg-3"></div>                                
             </div>

            </div>
        );
    }


}


export default Password;