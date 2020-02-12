import React from "react";
import  './Header.css';

class Header extends React .Component{    
    render(){
        return(            
           <div className="header" >                      
            <h1 className="headtxt">
                <span className="squadtxt">SQUAD</span><span className="proftxt">PROFILE</span>
           </h1>            
           </div>   

            
        );
    }


}


export default Header;