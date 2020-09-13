import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


const Avatar = (props) => {

    const avaratlistarray = [
         {
        id:1,
        name:"Bishu",
        work: "CEO"
    },
    {
        id:2,
        name:"Prashant",
        work: "Content Writer"
    }, 
    { 
        id:3,
        name:"Kusum Giri",
        work: "Content Writer"
    },
     {
        id:4,
        name:"ashish Aryal",
        work: "CEO"
    } 
]


  const avaratlistarraycard = avaratlistarray.map((avatarcard, i) => {
     return <Avatarlist id={avaratlistarray[i].name} name= {avaratlistarray[i].name}
                                             work={avaratlistarray[i].work} />
 })

    return (<div className="mainpage tc" >
    <h1>Welcome to Avatar World</h1>
            {avaratlistarraycard}
            <button>Click ME</button>
        </div>
        )    
}


export default Avatar;
