import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

// function handleClick(level,type){
//     if(type === 'water'){
//         if(level <= 1){
//             alert("Cette plante requiert peu d'arrosage");
//         }else if(level <= 2){
//             alert("Cette plante requiert moderement d'arrosage");
//         }else{
//             alert("Cette plante requiert beaucoup d'arrosage");
//         }
//     }
//     if(type === 'light'){
//         if(level <= 1){
//             alert("Cette plante requiert peu de lumiere");
//         }else if(level <= 2){
//             alert("Cette plante requiert moderement de lumiere");
//         }else{
//             alert("Cette plante requiert beaucoup de lumiere");
//         }
//     }
    
// }


// =============== CodePen ===================== //
function PlantItem({ id, cover, name, water, light }) {
    
	return (
		<li key={id} className='lmj-plant-item'  >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water}  />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
export default PlantItem





//================== Own Code ============================== //
// function PlantItem({name,cover,id,light,water}) {
//   return (
//     <>      
//      <ul className='lmj-plant-list'>
//         {plantList.map((plant, index) => (
//         <li key={`${plant.id}-${index}`} className='lmj-plant-item' >
//             {<img src={monstera} alt='monstera' className='lmj-cover'></img>}
//             { plant.name +" "} 
//             {plant.isBestSale ? <span> 🔥 </span> :  null } 
//             {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>} 
//             <CareScale careType='light' scaleValue={plant.light}  />
//             <CareScale careType='water' scaleValue={plant.water} />
//             </li> // Ceci n'est pas une apostrophe normale {isBestSale && <span> 🔥 </span>}
//     ))}
//       </ul>
//     </>
//   )
// }