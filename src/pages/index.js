import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>Home</h1>
      <h2>Hey! I am Sahil. Thank you for visting my page. I live in Japan and work at <a href="http://www.nachi-fujikoshi.co.jp/eng/rob/index.html" target="_blank">Nachi-Fujikoshi Corp</a>. Before this, I studied Robotics at <a href="https://www.cse.sci.waseda.ac.jp/department-en/mmech/" target="_blank">Waseda University</a>. 
        I grew up in Mumbai where I studied Electronics and Telecommunication engineering at <a href="https://tsec.edu/" target="_blank">Mumbai University</a>.</h2>
    </Layout>
  )
}

export default Index