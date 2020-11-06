import React from 'react'
import posts from '../../Content/Posts/Posts'
import style from './ArticlePage.module.css'



const ArticlePage = ({match}) =>{
    const[upVotes, setupVotes] = React.useState(0)
    const[downVotes, setdownVotes] = React.useState(0)

    const increase = () =>{
        setupVotes(upVotes + 1)
    }

    const decrease = () =>{
        setdownVotes(downVotes + 1)
    }




    const name = match.params.name 
    const article = posts.find(article => article.name=== name)

    if(!article) return <h1>Article doesnt exist!</h1>
    return(

        <>
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <h3>{article.date}</h3>
            {article.content.map((paragraph, key) =>(
                <p key={key} id={style.pageBody}>{paragraph}</p>

            ))}

            <button onClick={increase}>Likes{upVotes}</button>
            <button onClick={decrease}>Dislikes{downVotes}</button>
    
        </>
    )
}


export default ArticlePage