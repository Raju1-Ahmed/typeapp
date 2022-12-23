import React from 'react'
import { Footer } from '../Footer/Footer'
import { Affordable } from './Affordable'
import { AllInOne } from './AllInOne'
import { Brands } from './Brands'
import { Lovedby } from './Lovedby'
import { Navbar } from './Navbar'
import { OurClient } from './OurClient'
import { TabsContent } from './TabsContent'
import { TestiMonial } from './TestiMonial'
import { TextSliding } from './TextSliding'
import { UseCases } from './UseCases'
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
        <AllInOne/>
        <Brands/>
        <UseCases/>
        <Affordable/>
        <Footer/>

    </div>
  )
}
