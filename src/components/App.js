import React from "react"
import video from "../data/video.js";
import Header from "./Header.js";
import ThumbButtons from "./ThumbButtons.js";
import Comments from "./Comments.js";
// App
// Video component
// Header (with total views and upload date)
// Like/Dislike Component (two or 1?)
// Comments component with Hide option


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header views={video.views} date={video.createdAt}/>
      <ThumbButtons upvotes={video.upvotes} downvotes={video.downvotes}/>
      <br></br>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
