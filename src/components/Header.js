import React from "react"

function Header ({views, date}){
    console.log(views + date)
    return(
        <header>
        <h1>React Today and Tomorrow and 90% Cleaner React with Hooks</h1>
        <p>Views {views} | Uploaded {date}</p>
        </header>
    )
}

export default Header