import React from 'react';


// import { NavLink } from "react-router-dom"


const Main = () => {
  

  
  
  
  return (
    <div className="container-fluid">
        <div className="row abc">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 abox">
               <img src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp" />
            <h2>Consolidate your restaurants insights in one place.Unlock growth </h2>
            <h5>Your one stop solution to view mission-critical data and insight all your  in one place.</h5>
             {/* <NavLink to="/SignUp" className="btn1">Next Page</NavLink>   */}
          <button  className="btn1">Book Demo</button>
             
            <img className="pic1" src="https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp" />
            <img className="pic2" src="https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp" />
            <img className="pic3" src="https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp" />
            <img className="pic4" src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" />
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 bbox">
                <img src="voosh dashboard images.webp" />
            </div>
        </div>
    </div>
  )

  }

export default Main