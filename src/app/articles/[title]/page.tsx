import React from "react"

function ShowArticle(props: any) {
  return (
    <div>
      <h1>Show Article</h1>
      <p>{props.params.title}</p>
    </div>
  )
}

export default ShowArticle
