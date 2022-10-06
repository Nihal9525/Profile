import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"
import './App.css'

function App() {

  return (
    <>
    <div className="card">
      <div className="container">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
