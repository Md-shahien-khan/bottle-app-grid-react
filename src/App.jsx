import './App.css'
import Bottles from './components/Bottles/Bottles'
import Header from './components/Header/Header'
function App() {

  // step 1 we made components folder then Header there and call it here

  // step 2 got the json file from github programming hero and added in the bottles.json file 
  return (
    <>
    <Header></Header> 
    <Bottles></Bottles>
    </>
  )
}

export default App
