import {useState} from 'react'
import Note from './components/Note'


const App = (props) => {
	const [notes, setNote] = useState(props.notes)
	const [newNote, setNewNote] = useState('note...')
	const [showAll, setShowAll] = useState(true)

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