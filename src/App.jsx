
import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './layouts/components/Footer'
import { Header } from './layouts/components/Header'

function App() {
  

  return (
    <>
     <Header />

     <div className="min-h-screen flex flex-col">
  
  
  <main className="flex-1">

    <Outlet />
    
  </main>

 
  <Footer />

</div>
    </>
  )
}

export default App
