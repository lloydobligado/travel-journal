import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import locations from './components'

function App() {
  const TourList = locations.map(location => {
    return (
      <Card key="location.id" location={location}/>
      )
  })
  return (
    <>
      <Navbar />
      <div className="Main">
        {TourList}
      </div>
      <Footer />
    </>
  )
}

export default App
