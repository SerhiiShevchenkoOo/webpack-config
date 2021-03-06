import React from 'react'
import ReactDOM from 'react-dom'
import TsComponent from './TsComponent'

const App = () => <TsComponent />

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
