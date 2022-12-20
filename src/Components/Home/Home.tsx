import React from 'react'
import { Lovedby } from './Lovedby'
import { Navbar } from './Navbar'
import { TestiMonial } from './TestiMonial'
import { TextSliding } from './TextSliding'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <TextSliding/>
        <TestiMonial/>
        <Lovedby/>
    </div>
  )
}
