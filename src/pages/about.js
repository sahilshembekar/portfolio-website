import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"


const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="This is my About page" />      
      <h1>About</h1>

      <h2>Bio</h2>
      <p>
      I am a highly skilled and motivated individual with a unique and extensive background in development and design of mechanical system, sensors, circuits and controls. 
      {/* I have some experience in software development and product design.  */}
      I enjoy solving challenging problems by leveraging my creativity and technical abilities.
      Overall, I love working in tech because it allows me to understand and observe the unique tools that can be used to solve a 
      vast variety of problems in the world today, which is both exciting and fulfilling. These qualities makes me an 
      enthusiastic and quick learner who loves experimenting with new tools and technologies.
       </p>
       <h2>Summary</h2>
        <p>
        I currently work as an engineer at <a href="http://www.nachi-fujikoshi.co.jp/eng/rob/index.html" target="_blank">Nachi-Fujikoshi Corp.</a> In March 2021, I graduated from <a href="https://www.cse.sci.waseda.ac.jp/department-en/mmech/" target="_blank">Waseda University</a> where I studied 
        Robotics. I was advised by Professor <a href="https://waseda.pure.elsevier.com/en/persons/shigeki-sugano" target="_blank"> 
        Shigeki Sugano</a> and co-advised by Associate Professor <a href="https://waseda.pure.elsevier.com/en/persons/mitsuhiro-kamezaki" target="_blank">Mitsuhiro Kamezaki</a>.
        My research was about design and development of a new type of Soft Tactile sensor for robots. Apart from this, I also worked on various other topics which you can find below.
        </p>
        
        <p>  
        During my time at Waseda, I also worked as a Research Assistant at <a href="https://www.sonycsl.co.jp/" target="_blank">Sony CSL</a> on the Superception research framework. 
        Before that, I was at <a href="https://tx-inc.com/en/home/" target="_blank">Telexistense Inc</a> working on their flagship robot (Model T) to develop next-generation robotic end effectors.
        In the past, I worked at <a href="https://whill.inc/jp/" target="_blank">Whill Inc</a> on robot localization and path planning for the intelligent personal EV (Electric Vehicle) Model C.
        I have also briefly worked as an application development associate at <a href="https://www.accenture.com/in-en" target="_blank">Accenture Technologies Pvt Ltd</a>.
        </p>

        <p>  
        {/* My research is in the field of robot end effectors, robot actuation systems, and tactile sensors with the focus on making robots 
        more safe, versatile, and intelligent. I work on mechanical design, electronic design, simulation, and 
        sensor-robot integration associated with the tactile sensors and robots. */}
        </p>
      <h2>Professional Experience</h2>
        <ul>
            <li> <h4>Engineer, Nachi-Fujikoshi Corporation, Japan <small><i>(04/2021 - Present) </i> </small></h4>
            </li>
            <li> <h4>Research Assistant, Sony Computer Science Laboratories (CSL) Inc, Tokyo <small><i>(12/2020 - 03/2021) </i> </small></h4>
                <ul>
                    <li>Development of a research framework to implement computer technology to intervene and enhance human sensory process</li>
                </ul></li>
            <li> <h4>Graduate Student Researcher, Sugano Laboratory, Waseda University, Tokyo<small><i> (04/2019 - 03/2021) </i> </small> </h4>
                <ul>
                    <li>Research on smart fluids, elastomers and their application in actuation systems, tactile sensors, etc</li>
                    <li>Development Electro-Hydraulic actuator (EHA) system</li>
                    <li>Design and Development of a hydraulic robot gripper (Mechanical Design and Control)</li>
                    <li>Development of tactile Sensors Using Magnetorheological materials (Mechanical design, Circuit Design and Control)</li>
                </ul></li>
            <li> <h4>Engineering Intern, Telexistence Inc, Tokyo <small><i>(09/2020 - 12/2020) </i> </small></h4> 
                <ul>
                    <li>Responsible for designing, component selection, prototyping, assembly, testing and analysis of a new left hand for Model T robot</li>
                </ul></li>
            <li> <h4>System Development Engineering Intern, Whill Inc, Tokyo <small><i>(06/2019 - 11/2019) </i> </small></h4> 
                <ul>
                    <li>Worked on robot localization and path planning for the intelligent personal EV (Electric Vehicle) Model C</li>
                    <li>Analysis and tuning of parameters of algorithm (AMCL, EKF) for autonomous driving system and development of methods for its improvement </li>
                </ul></li>  
            <li> <h4>Application Development Associate, Accenture Technology India Pvt Ltd, Mumbai <small><i>(11/2018 - 02/2019) </i> </small></h4> 
                <ul>
                    <li>Completed Accenture Green Field Training (GFT) Program</li>
                </ul></li>
        </ul>
        <h2>Education</h2>
        <ul>
            <li><h4>Master of Engineering (M.E.), Waseda University <small><i>(04/2019 - 03/2021)</i> </small></h4> 
            <ul>
                    <li>GPA: 3.82</li>
                    <li>Specialization: Intelligent Machines (Robotics)</li>
                    <li> <b>Thesis Title</b>: Permanent magnet elastomer (PME) infused soft robot skin for tactile sensing</li>
                </ul></li>
            <li><h4>Bachelor of Engineering (B.E.), University of Mumbai <small><i>(06/2014 - 07/2018) </i></small></h4>
                <ul>
                    <li>CGPA: 9.06/10</li>
                    <li>Specialization: Electronics and Telecommunications</li>
                </ul></li>
        </ul>
        <h2>Publications</h2>
        <ul>
          <li><mark>S. Shembekar</mark>, M. Kamezaki, P. Zhang, Z. He, R. Tsunoda, K. Otsuki, H. Sakamoto, and S. Sugano. 
            “Preliminary Development of a Powerful and Backdrivable Robot Gripper Using Magnetorheological Fluid” 
            <i> Proc. Int. Symp. Automation and Robotics in Construction, Kitakyushu, Japan, 2020 </i> </li>
          <li>Z. He, M. Kamezaki, P. Zhang,<mark> S. Shembekar</mark>, R. Tsunoda, and S. Sugano. “A Prototype Transmission System with
              Backdrivability and Responsiveness using Magnetorheological Fluid Direction Converter and Clutch” <i>Proc. IEEE International
              Conference on Systems, Man, and Cybernetics, Toronto, Canada, 2020</i> </li>
        </ul>
        <h2>Selected Projects</h2>
        <ul>
            <li>  <h4>Autonomous Robot using 
              Intel Real Sense T265 <small><i>(04/2019 - 09/2019)</i></small></h4>
              {/* href="https://drive.google.com/file/d/1rf4gGWU-F6rjGmlnIRlZg_WXKqYP_HFV/view?usp=sharing" target="_blank"><h4>Autonomous Robot using 
              Intel Real Sense T265 </h4> </a> <small><i>(04/2019 - 09/2019)</i> </small> */}
            <ul>
                    <li>Developed a python program on Raspbian for wheel control and extracted coordinates using TCP 
                      server to visualize the path for the robot</li>
                    <li>Performed path analysis and optimization using experimentation to improve the wheel control by 30%</li>
                </ul></li>
              <li><h4>Development of a powerful and backdrivable Robot Gripper using Magnetorheological Fluid <small><i>(04/2019 - 05/2020)</i></small></h4>
              {/*<a href="https://drive.google.com/drive/folders/1igyk41nPlFBF3D3pj2lUIjy-SFaf7L2A?usp=sharing" target="_blank"><h7>Link</h7></a> */}
                <ul>
                    <li>Goal was to develop a small and powerful gripper which could grasp heavy objects and also light objects without damaging
                      the object body. </li>
                    <li>Development of the gripper was done using a special type of functional fluid called as Magnetorheological 
                      Fluid and a very small sized hydraulic rotary actuator</li>
                </ul></li>
                <li><h4>Automated Shopping Cart <small><i>(06/2017 - 05/2018) </i></small></h4>
                <ul>
                    <li>Optimized the time taken in the process of shopping by using RFID cards and IR sensors on Shopping cart</li>
                    <li>Used Web Development tools (HTML5, CSS, Xampp) to build a website to deliver a digital bill on Customer’s mobile</li>
                    <li>Integrated Arduino Uno and ESP255 in order to create a database of shopping items</li>
                </ul></li>
        </ul>
    </Layout>
  )
}

export default About