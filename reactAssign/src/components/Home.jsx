import React, { useEffect } from "react";
import { useState } from "react";

const Home = (props) => {
    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const[btn,setBtn]=useState('Enable Dark Mode')
  
  

  const toggleStyle=()=>{
      if(myStyle.color==='black'){
          setMyStyle({
              color:'white',
              backgroundColor:'black',
              border:'1px solid white'
          })
          setBtn('Enable Light Mode')
      }
      else{
          setMyStyle({
              color:'black',
              backgroundColor:'white'
          })
          setBtn('Enable Dark Mode')
      }

   
    

    
    }
  return (
    <div style={myStyle} className="container">
        <span><button className="btn btn-primary" onClick={toggleStyle}>{btn}</button></span>
       
      <div className="d-flex flex-column align-items-center">
        
        <img
          className="w-25 h-25"
          src={props.imgAddress}
          alt="react image"
        />
        <h1>React</h1>
        <div className="container">
          <p>
            React is a popular JavaScript library used for building user
            interfaces, particularly single-page applications (SPAs) where you
            need a dynamic and responsive UI. Developed and maintained by
            Facebook, React allows developers to create large web applications
            that can update and render efficiently in response to data changes.
            Key Features of React Component-Based Architecture: React encourages
            the development of applications as a collection of components, which
            are independent and reusable pieces of code. Each component manages
            its own state and can be composed to build complex UIs. Virtual DOM:
            React uses a Virtual DOM to improve performance. Instead of
            manipulating the browser's actual DOM directly, React creates a
            lightweight copy (the Virtual DOM) and updates this copy. When
            changes are made, React compares the Virtual DOM with the real DOM
            and only applies the necessary updates, making the process faster
            and more efficient. JSX: JSX is a syntax extension for JavaScript
            that looks similar to HTML. It allows developers to write HTML-like
            code within JavaScript, making it easier to build and visualize UI
            components. JSX is then transformed into standard JavaScript at
            runtime. Unidirectional Data Flow: React follows a unidirectional
            data flow, meaning that data moves from parent to child components
            through props. This makes the application easier to debug and
            manage, as it’s clear where the data comes from and how it affects
            the UI. Hooks: Introduced in React 16.8, Hooks allow developers to
            use state and other React features in functional components without
            writing classes. The useState and useEffect hooks are among the most
            commonly used, enabling state management and side-effects handling
            within functional components. React Ecosystem: React has a vast
            ecosystem of libraries and tools that enhance its capabilities, such
            as React Router for routing, Redux for state management, and Next.js
            for server-side rendering. Why Use React? Reusable Components:
            React’s component-based structure allows for code reusability,
            making it easier to maintain and scale applications. Fast Rendering:
            With the Virtual DOM, React updates only what’s necessary, leading
            to faster rendering and a smoother user experience. Strong Community
            Support: React has a large and active community, with plenty of
            resources, tutorials, and third-party tools available to help
            developers. SEO-Friendly: While traditionally SPAs were not
            SEO-friendly, tools like Next.js allow React applications to be
            rendered server-side, improving SEO and load times. Cross-Platform
            Development: React Native, a related framework, allows developers to
            build mobile applications for iOS and Android using React. React is
            ideal for building dynamic, high-performing web applications and has
            become one of the most popular choices for front-end development in
            the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
