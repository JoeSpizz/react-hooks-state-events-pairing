import React, {useState} from "react"

function Comments({comments}){
    console.log(comments)
    const [isVisible, setIsVisible]= useState("visible")
    function hideCommentSection(){
        setIsVisible(current => !current)
    }
    return <div>
        <button onClick={hideCommentSection}>Hide Comments</button>
        <hr></hr>
        <div id="commentSection" style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <h2>2 Comments</h2>
        <h3>{comments[0].user}</h3>
        <p>{comments[0].comment}</p>
        <h3>{comments[1].user}</h3>
        <p>{comments[1].comment}</p>
        </div>
    </div>
}

export default Comments