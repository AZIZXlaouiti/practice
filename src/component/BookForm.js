import React from 'react'
import { useEffect,useState } from 'react'
const BookForm = ({history}) => {
   
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [description,setDescription] = useState('')
    function handleAuthor(e){
        setAuthor(e.target.value)
       
    }
    function handleTitle(e){
        setTitle(e.target.value)
      
    }
    function handleDescription(e){
        setDescription(e.target.value)
     
    }
    function handleSubmit(e){
       e.preventDefault()
       
        const options ={
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({title:title,author:author,description:description})
        }
    fetch('http://localhost:3001/Books',options)
    .then(resp=>resp.json())
    .then(()=>history.push("/books"))


    }
       
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label for="author">Author:</label><br/>
            <input value={author} onChange={handleAuthor} type="text" id="author" name="author"/><br/>
            <label for="title">Title:</label><br/>
            <input value={title} onChange={handleTitle} type="text" id="title" name="title"/><br/>
            <label for="description">description:</label><br/>
            <textarea  value={description} onChange={handleDescription} id="description" name="description"></textarea>
            <button type="submit" >createBook</button>
            </form>
        </div>
    )
}

export default BookForm
