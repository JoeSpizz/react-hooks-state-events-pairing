import React, {useState} from "react"

function ThumbButtons({upvotes, downvotes}){
const [like, setLike]= useState(upvotes)
const [dislike, setDislike] = useState(downvotes)
function upClick(){
setLike(like +1)
}
function downClick (){
setDislike(dislike-1)
}
    return (
        <div>
        <button onClick={upClick}>{like}👍</button>
        <button onClick={downClick}>{dislike}👎</button>
        </div>
    )
    }

export default ThumbButtons