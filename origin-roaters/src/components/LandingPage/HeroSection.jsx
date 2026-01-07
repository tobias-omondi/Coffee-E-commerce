import React from 'react'
import Home from './Home'
import ProductShowCase from './ProductShowCase'
import ProductStory from './ProductStory'
import ShowSell from './ShowSell'
import PageStory from './PageStory'

const HeroSection = () => {
  return (
    <div>
      <section id="hero"><Home /></section>
      <section id='product-show'><ProductShowCase /></section>
      <section id="product-story"><ProductStory /></section>
      <section id="sales-story"><ShowSell /></section>
      <section id="page-story"><PageStory /></section>
      {/* <section id="testimonials"><Testimonials /></section> */}
    </div>
  )
}

export default HeroSection
