import './App.css'
import Todos from './Components/ListTodos'
import { store } from './App/Store'
import { Provider } from 'react-redux'

function App() {


  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}

export default App
