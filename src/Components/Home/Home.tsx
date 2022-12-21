import React from 'react'
import { Lovedby } from './Lovedby'
import { Navbar } from './Navbar'
import { OurClient } from './OurClient'
import { TabsContent } from './TabsContent'
import { TestiMonial } from './TestiMonial'
import { TextSliding } from './TextSliding'
import { WritingAssistant } from './WritingAssistant'
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
        <TabsContent/>
        <WritingAssistant/>

    </div>
  )
}
