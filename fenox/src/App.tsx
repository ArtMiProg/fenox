import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Content } from './Content'
import Header from './components/Header'
import StartPage from './pages/StartPage'
import Footer from './components/Footer'
import EmptyPage from './pages/EmptyPage'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
          <Header />
          <Content>
            <Routes>
              <Route path={"/"} element={<StartPage />} />
              <Route path={"/empty"} element={<EmptyPage />} />
            </Routes>
          </Content>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
