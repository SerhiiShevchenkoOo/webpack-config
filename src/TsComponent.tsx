import * as React from 'react'
import img from './victory.gif'
import w from './high-score.svg'



const TsComponent = ()=> {
	const handlerClick=(e: React.MouseEvent):void=>{console.log(e)}
	return <div className={`h-20 w-20 bg-green-800`} onClick={handlerClick.bind(this)}>
		<img src={img} alt="" />
		<img src={w} alt="" />
	</div>
}

export default TsComponent
