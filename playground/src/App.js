import {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
	const [notes, setNote] = useState([])
	const [newNote, setNewNote] = useState('note...')
	const [showAll, setShowAll] = useState(true)

	const hook = () => {
		console.log('effect')
		axios
			.get('https://api.jsonbin.io/v3/b/62d808fe481da340790ab77d', {
				headers: {
					'X-Master-Key': '$2b$10$rTC3MbJSTbfjPVLvmZ5lNeFRU9zXSBIo82EFiPMUuMyrwBmXC1xN.',
					'X-Key-Name': 'FSO'
				}
			})
			.then(response => {
				console.log('promise fulfilled')
				setNote(response.data.record.notes)
			})
	}

	useEffect(hook, [])

	console.log('render', notes.length, 'notes')

	const addNote = (event) => {
		event.preventDefault();
		console.log('button clicked', event.target)

		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: notes.length + 1
		}

		setNote(notes.concat(noteObject))
		setNewNote('')

	}

	const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	const noteToShow = showAll ? notes : notes.filter(note => note.important === true)
  
	return (
	  <div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					{console.log(showAll)}
					show {showAll ? 'important' : 'all'}
				</button>
			</div>

			<ul>
				{noteToShow.map(note => 
					<Note key={note.id} note={note}/>
				)}
			</ul>

			<form onSubmit={addNote}>
				<input 
				value={newNote}
				onChange={handleNoteChange}/>
				<button type='submit'>save</button>

			</form>
	  </div>
	)
}
	
  
 export default App