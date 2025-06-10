
import { plantList } from '../datas/PlantList';
import '../styles/ShoppingList.css' ;
import '../styles/PlantItem.css'
import PlantItem from './PlantItem';
// La liste de mes plantes qui seront utilise dans le composant


const ShoppingList = ({cart,updateCart}) => {
  const categoryList = []; //Eleminer les occurences dans un tableau 
  const seen = {};   // Contient les elts qui sont deja dans categoryList pour eviter la repetition

  plantList.forEach(plant => {
    if(!seen[plant.category]){ //Pour chaque plante si la categorie figure deja dans la liste alors ne plus l'ajouter
      categoryList.push(plant.category);
      seen[plant.category] = true;
    }
  })
  return (
    <>
          <div className='lmj-shopping-list'>
      <ul>
        <h3>Categorie</h3>
         {categoryList.map((category,index) => (
          <li key={`${index}`}>{category}</li>
         ))}
      </ul>
      <h3>Liste des plantes</h3>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>




      
   
   
    </>


  )
}

export default ShoppingList


// {plantList.map((plant, index) => (
//   <li key={`${plant.id}-${index}`} className='lmj-plant-item' >
//     {<img src={monstera} alt='monstera' className='lmj-cover'></img>}
//     { plant.name +" "} 
//     {plant.isBestSale ? <span> 🔥 </span> :  null } 
//     {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>} 
//     <CareScale careType='light' scaleValue={plant.light}  />
//     <CareScale careType='water' scaleValue={plant.water} />
//     </li> // Ceci n'est pas une apostrophe normale {isBestSale && <span> 🔥 </span>}
// ))}

// ============= Correction CodePen ==================== //