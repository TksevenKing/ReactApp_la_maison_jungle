import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';





function handleClick(level,type){
    if(type === 'water'){
        if(level <= 1){
            alert("Cette plante requiert peu d'arrosage");
        }else if(level <= 2){
            alert("Cette plante requiert moderement d'arrosage");
        }else{
            alert("Cette plante requiert beaucoup d'arrosage");
        }
    }
    if(type === 'light'){
        if(level <= 1){
            alert("Cette plante requiert peu de lumiere");
        }else if(level <= 2){
            alert("Cette plante requiert moderement de lumiere");
        }else{
            alert("Cette plante requiert beaucoup de lumiere");
        }
    }
    
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale