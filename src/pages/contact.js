import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Contact = () => {
  return (
    <Layout>
      <Metadata title="Contact" description="This is my contact page" />
      <h1>Contact</h1>
      
      <p>Connect with me on Email: <a href="mailto:sahil.shembekar@gmail.com" target="_blank">sahil.shembekar@gmail.com</a></p>
      
      <p> Connect with me on <a href="https://www.linkedin.com/in/sahil-shembekar/" target="_blank">
            LinkedIn</a> </p>
      
      <p> Checkout my Github Profile on <a href="https://github.com/sahilshembekar" target="_blank">
            Github</a> </p>

    </Layout>
  )
}

export default Contact