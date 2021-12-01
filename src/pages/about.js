import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"


const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="This is my About page" />      
      <h1>About Page</h1>
      <p>I'm Sahil a Robotics Engineer.</p>
    </Layout>
  )
}

export default About