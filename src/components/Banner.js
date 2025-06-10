import React from 'react';
import '../styles/Banner.css';
// import logo from '../assets/leafLogo.png';


function Banner({children}){
    const currentMounth = new Date().getMonth ;
    const isPring = currentMounth >= 3 && currentMounth <= 5;
    const recommandation = isPring ? "Ce n'est pas le moment de rempoter" : "c'est le pringtemg !";
  return (
    <div className='navbar navbar-light bg-light lmj-banner'>
       {children} 
       {recommandation}
    </div>
  )
}

export default Banner