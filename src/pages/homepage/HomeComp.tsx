// import React from 'react'

import Beleieve from "./Beleieve"
import Hero from "./Hero"
import Prayer from "./Prayer"
import Sermons from "./Sermons"
import Subscribe from "./Subscribe"


const HomeComp = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Prayer />
      <Sermons />
      <Beleieve />
      <Subscribe />
    </div>
  )
}

export default HomeComp