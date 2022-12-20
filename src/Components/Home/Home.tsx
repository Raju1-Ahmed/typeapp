import React from 'react'
import { Lovedby } from './Lovedby'
import { Navbar } from './Navbar'
import { OurClient } from './OurClient'
import { TestiMonial } from './TestiMonial'
import { TextSliding } from './TextSliding'
import { WritingContent } from './WritingContent'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <TextSliding/>
        <TestiMonial/>
        <Lovedby/>
        <OurClient/>
        <WritingContent/>

    </div>
  )
}
