import React from 'react'
import {Link} from 'react-router-dom'
import style from './NavBar.module.css'




const NavBar = () =>{


    return(

        <>
        

            <nav>
                <ul className={style.listContainer}>
                    <li>
                        <Link to='/login' className={style.login}>SIGN IN</Link>
                    </li>
                    <li>
                    <Link to='/signup' className={style.signup}>CREATE AN ACCOUNT</Link>
                    </li>
                </ul>

                <div className={style.linksPrime}>

                <ul>
                    <li className={style.home}>
                        <Link to='/'>theXpeople</Link>
                    </li>

                    <div className={style.rightLinks}>
                    <li>
                        <Link to='/about'>MOI</Link>
                    </li>
                    <li>
                        <Link to='/contact-me'>CONTACT</Link>
                    </li>
                  
                    </div>
                
                </ul>
                </div>

                
            </nav>
            

        </>
    )
}


export default NavBar