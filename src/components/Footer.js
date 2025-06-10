import { useState } from 'react'
import '../styles/Footer.css'




function Footer() {
	const [inputValue, setInputValue] = useState('')
    
    function checkValue(value){
        if(value.includes('@')){
            setInputValue(value);
            alert('information valide avec succes')
        }else{
            alert("Attention il n'y a pas d'@, ceci n'est pas une adresse valide !");
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail :
                <input type='text' id='email'  placeholder='Entrez votre email...'
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onBlur={()=> checkValue(inputValue)}
                    />
                <input type='submit' value={"envoyer"} 
                    onClick={()=> checkValue(inputValue)}
                />
                
            </div>
		</footer>
	)
}

export default Footer