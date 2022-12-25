import React from 'react'
import { Affordable } from './Affordable'
import { AllInOne } from './AllInOne'
import { Brands } from './Brands'
import { Lovedby } from './Lovedby'
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

    </div>
  )
}
