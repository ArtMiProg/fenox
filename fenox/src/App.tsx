import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Content } from './Content'
import Header from './components/Header'
import StartPage from './pages/StartPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Content>
            <Routes>
              <Route path={"/"} element={<StartPage />} />
            </Routes>
          </Content>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
