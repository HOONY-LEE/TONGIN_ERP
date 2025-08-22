import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/order';
import { ThemeProvider, useTheme } from 'styled-components';

function App() {

  // const theme = useTheme()

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Router>
        {/* <Routes> */}
        <Home></Home>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Routes> */}
      </Router>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
