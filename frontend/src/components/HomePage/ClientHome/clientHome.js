import React,{useEffect, useState} from 'react'
import { useHistory,useLocation } from 'react-router';
import './clientHome.css'
import axios from 'axios'


function InAnswers() {
  const history = useHistory()

  function detailsQuestion(){
    history.push(`/AllDetails`)
}

function Answersforsuti(){
    history.push(`/Answer`)
}
const myStyle={
    backgroundImage: 
    "url('/images/backgroundimg.jpg')",
     height:'120vh',
     marginBottom:'-120px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
};
    return (
        <div style={myStyle}>
        <div className="container" style={{paddingTop:35,paddingLeft:155,marginBottom:100}}>
           

    
    
     {/* </div> */}
    <div className="row" style={{paddingBottom:35}}>
            {/* <h4 className="mb-4"> Client Home  Page</h4> */}
           
            <br></br>
            <div className="col-md-4">

        <div className="progressCards" >
            <div onClick={detailsQuestion}>
            
                <div className="pp">
                    <div align="center">
                        <h2>තොරතුරු ලබා දීම</h2>
                    
                    </div>   
                </div>

            </div>        
        </div>
    </div>
            <div className="col-md-4">
                <div className="progressCards" >
                <div onClick={Answersforsuti}>
            
            <div className="pp">
                <div align="center">
                    <h2>ඕටිසම් තිබේද යැයි පරීක්ෂා කිරිම</h2>
                
                </div>   
            </div>

        </div>    
                            
                </div>
            </div>
                
                <div className="col-md-4">
                <div className="progressCards" >
                            
                            <div className="pp">
                                <div align="center">
                                    <h2>Details Question</h2>
                                
                                </div>   
                            </div>
                                
                        </div>
                </div>
            </div>
                <div className="row" style={{paddingBottom:35}}>
                <div className="col-md-4">

                <div className="progressCards" >
                            
                            <div className="pp">
                                <div align="center">
                                    <h2>Details Question</h2>
                                
                                </div>   
                            </div>
                                
                        </div>
                </div>
            <div className="col-md-4">
            <div className="progressCards" >
                            
                            <div className="pp">
                                <div align="center">
                                    <h2>Details Question</h2>
                                
                                </div>   
                            </div>
                                
                        </div>
            </div>
            <div className="progressCards" >
                            
                            <div className="pp">
                                <div align="center">
                                    <h2>Details Question</h2>
                                
                                </div>   
                            </div>
                                
                        </div>
                        
            </div>

                
    </div>
    </div>
               
            
   
    )      

    }
export default InAnswers