import React from 'react'
import image from './livingcity.jpg'
import image1 from './paris.png'
import image2 from './coffee.jpg'
import style from './HomePage.module.css'
import {Link} from 'react-router-dom'
//import posts from '../../Content/Posts/Posts'



const HomePage = () =>{


    return(

        <>

<section className={style.motherBox}>
           <center>
               <h1 className={style.title}>Ghana to become a developed country in 2077</h1>
               <h4 className={style.author}>Prof. A. Ashitey</h4>
               <h4 className={style.date}>04.10.2020</h4>
               <p className={style.para}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> 
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br></br>
         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br></br>
         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate<br></br>
         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br></br>
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id<br></br>
          est laborum.
              </p>
              
                  <Link to='/article/Ghana-in-2077'>
                   <h4 className={style.rm}>Read More</h4>
                  </Link>
                  

              
             
              <tr className={style.pals}>
              <td><img src={image} alt='urban city' className={style.img}></img></td>
              <td><h4  className={style.caption}>An artist's impression of Accra in 2077</h4></td>
              </tr>
              
              

           </center>
         
       </section>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        
       <center>
               <h1 className={style.title2}>Fundamentals of Effective Negotiations</h1>
               <h4 className={style.author2}>Pre-Mest</h4>
               <h4 className={style.date2}>10.10.2020</h4>
               <p className={style.para2}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et <br></br>dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco <br></br>laboris nisi ut aliquip ex ea 
         commodo consequat. Duis aute irure dolor in reprehenderit <br></br>in voluptate
         velit esse cillum dolore eu fugiat nulla pariatur. <br></br>Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id<br></br>
          est laborum.
              </p>
              <Link to='/article/negotiation-fundamentals'>
                   <h4 className={style.rm2}>Read More</h4>
              </Link>
        
              
              

           </center>
           <br></br>
       <br></br>
       <br></br>
       <br></br>

       <section className={style.motherBox}>
           <center>
               <h1 className={style.title}>Black&White Photography. Is this the new normal?</h1>
               <h4 className={style.author}>Eugene Appertey</h4>
               <h4 className={style.date}>16.10.2020</h4>
               <p className={style.para}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> 
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br></br>
         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br></br>
         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate<br></br>
         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br></br>
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id<br></br>
          est laborum.
              </p>
              <Link to='/article/photography'>
                   <h4 className={style.rm}>Read More</h4>
              </Link>
              <tr className={style.pals}>
              <td><img src={image1} alt='urban city' className={style.img}></img></td>
              <td><h4  className={style.caption}>Paris Jackson</h4></td>
              </tr>
              
              

           </center>
         
       </section>

       <br></br>
       <br></br>
       <br></br>
       <br></br>
        
       <center>
               <h1 className={style.title3}>Wedding of the Century: Moses & Ama?</h1>
               <h4 className={style.author3}>Anonymous</h4>
               <h4 className={style.date3}>17.10.2020</h4>
               <p className={style.para3}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et <br></br>dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco <br></br>laboris nisi ut aliquip ex ea 
         commodo consequat. Duis aute irure dolor in reprehenderit <br></br>in voluptate
         velit esse cillum dolore eu fugiat nulla pariatur. <br></br>Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id<br></br>
          est laborum.
              </p>
              <Link to='/article/'>
                   <h4 className={style.rm3}>Read More</h4>
              </Link>
        
              
              

           </center>

           <br></br>
       <br></br>
       <br></br>
       <br></br>

     
           <center>
              <tr className={style.pals}>
              <td><img src={image2} alt='urban city' className={style.img2}></img></td>
              </tr>
              <tr>
                  <h4 className={style.contact}>Questions?<span className={style.hi}>Say Hi</span></h4>
              </tr>
              
              

           </center>

           <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
         
    

       
       

        </>
    )
}


export default HomePage

