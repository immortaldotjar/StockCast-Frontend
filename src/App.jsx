import './App.css'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import News from './Pages/News'
import CryptoCurrency from './Pages/Cryptocurrency'
import Stocks from './Pages/Stocks'
import { Routes, Route, useLocation } from "react-router-dom"
import Charts from './Pages/Charts'
import { AnimatePresence, motion } from "framer-motion"
import Dashboard from './Pages/Dashboard'

const page = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const App = () => {
  const loc = useLocation()
  const hideNav = loc.pathname === "/signin" || loc.pathname === "/signup"

  return (
    <div>
      {!hideNav && <NavBar />}
      <AnimatePresence mode="wait">
        <motion.div
          key={loc.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={page}
          transition={{ duration: .3 }}
        >
          <Routes location={loc}>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/stock" element={<Stocks />} />
            <Route path="/crypto" element={<CryptoCurrency />} />
            <Route path="/chart/" element={<Charts />} />
            <Route path="/chart/:symbol" element={<Charts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
