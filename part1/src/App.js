const Hello = (props) => {
	return (
		<div>
		<p>Hello from Hello Component!</p>
		<p>Hi {props.name}, you are {props.age}</p>
		</div>
	)
}

const App = () => {
	
	const now = new Date()
	const a = 10
	const b = 20
	const name = 'Minwoo'
	const age = 24
	
	console.log('hello from component!!')

	return (
	<div>
		<p>Hello world, it is {now.toString()}</p>
		<p>{a} + {b} = {a+b}</p>
		<Hello name={name} age={age}  />
	</div>
	)

	
	
}

export default App