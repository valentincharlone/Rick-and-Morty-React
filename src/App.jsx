import 'bootstrap/dist/css/bootstrap.min.css'

import CharacterList from './components/CharacterList'

function App() {
  

  return (
    <div className="bg-dark text-white">
      <h1 className='text-center display-1 p-5 mb-5'>RICK AND MORTY</h1>
      <hr />
      <CharacterList></CharacterList>
    </div>
  )
}

export default App
