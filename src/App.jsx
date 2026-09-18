import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Platform from './pages/Platform.jsx'
import WhereWeWork from './pages/WhereWeWork.jsx'
import Contact from './pages/Contact.jsx'
import ScopingCall from './pages/ScopingCall.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      {/* Standalone conversion landing page — its own minimal chrome */}
      <Route path="/scoping-call" element={<ScopingCall />} />

      {/* Main site — shared nav + footer */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/where-we-work" element={<WhereWeWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
