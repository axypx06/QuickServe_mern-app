
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
export default function Navbar(props) {

  const StyledBadge = withStyles((theme) => ({
        badge: {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.error.contrastText,
          borderRadius: 12,
          padding: '4px 8px',
        },
      }))(Badge);
    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')

        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const items = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark position-sticky"
                style={{ boxShadow: "0px 10px 20px black", backgroundColor :"#691EA0",filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                            </li>
                            {(localStorage.getItem("token")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white  mx-1 "style={{color :"#691EA0" }} to="/login">Login</Link>
                                <Link className="btn bg-white  mx-1" style={{color :"#691EA0" }}to="/createuser">Signup</Link>
                            </form> :
                            <div>

                            <div className="btn bg-white mx-1 " style={{color :"#691EA0" }} onClick={loadCart}>   
        <StyledBadge badgeContent={items.length} />
                                  
                                    Cart
                             </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

                                <button onClick={handleLogout} className="btn bg-white " style={{color :"#691EA0" }} >Logout</button></div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

// import React ,{useState}from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import Badge from '@material-ui/core/Badge';
// import { withStyles } from '@material-ui/core/styles';
// import { useCart } from './ContextReducer';
// import Modal from '../Modal';
// import Cart from '../screens/Cart';
// export default function Navbar() {


//   const [cartView, setCartView] = useState(false)

//   const StyledBadge = withStyles((theme) => ({
//     badge: {
//       backgroundColor: theme.palette.error.main,
//       color: theme.palette.error.contrastText,
//       borderRadius: 12,
//       padding: '4px 8px',
//     },
//   }))(Badge);
  
//   let navigate = useNavigate();
//   const handleLogout = () => {
//       localStorage.removeItem("authToken")

//       navigate("/login")
//   }

//   const loadCart = () => {
//     setCartView(true)
// }

// const items = useCart();


//   return (
//     <div>
//         <nav className="navbar navbar-expand-lg navbar-light  " style={{backgroundColor:"#691EA0"}}>
//   <div className="container-fluid">
//    <Link className="navbar-brand fs-1 fst-italic" to="/">QuickServe</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav me-auto mb-2">
//         <li className="nav-item">
//          <Link className="nav-link active fs-5 mx-1" aria-current="page" to="/">Home</Link>
//         </li>
//         {localStorage.getItem("authToken")?
//            <li className="nav-item">
//               <Link className="nav-link active fs-5 mx-1" aria-current="page" to="/">My Orders</Link>
//            </li>
//         :""}
//       </ul>
//       {!(localStorage.getItem("authToken"))?
//         <div className='d-flex'>
//          <Link className="btn bg-white mx-1 " style={{color :"#691EA0" }} to="/login">Login</Link>

//          <Link className="btn bg-white mx-1" style={{color :"#691EA0" }} to="/createuser">SignUp</Link>
//        </div>
//         :
        
//     <div>
//         <div className="btn bg-white mx-1 " style={{color :"#691EA0" }} onClick={loadCart}>
//          MY CART
//          <StyledBadge badgeContent={items.length} />
//         </div>

//         {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

//         <div className="btn bg-white text-danger mx-1 "  onClick={handleLogout}>
//          Logout
//         </div>
//      </div>
//         } 
     
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }
