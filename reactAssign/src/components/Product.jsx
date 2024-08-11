// import React, { useState } from 'react'

// const Product = () => {
//     const{show,setShow}=useState(false);

//   return (
//     <div>
//     <div>
//         <h1>Accordion 01</h1><span><button  onClick={() => {
//           setShow(!show);
//         }}>see more</button></span>
//         {show && <div>modal</div>}
//     </div>
      
//     </div>
//   )
// }

// export default Product

import React, { useEffect, useState } from 'react';

const Product = () => {

    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const[btn,setBtn]=useState('Enable Dark Mode')
  const [show, setShow] = useState(false);
  

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
    <div style={myStyle}>
      <div >
        <h1>Accordion 01</h1>
        <span>
          <button className="btn btn-primary" onClick={() => setShow(!show)}>See more</button>
        </span>
        {show && <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reprehenderit praesentium fugiat fuga soluta voluptatem, quo unde rem, libero doloribus hic veritatis.</div>}
      </div>
      <button className='btn btn-danger' onClick={toggleStyle}>{btn}</button>
    </div>
  );
}

export default Product;

