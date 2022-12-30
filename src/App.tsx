
import styles from './App.module.scss'

import { Header } from './components/Header'
import { Main } from './components/Todo'

function App() {

  return (
    <div className="App">
      
      <Header/>
      
      <div className={styles.container}>

        <Main/>

      </div>

      <div>
        
      </div>

    </div>
  )
}

export default App
