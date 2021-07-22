import React from 'react'
import { useEffect,useState } from 'react'
const BookList = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
      fetch('http://localhost:3001/Books')
      .then(resp=>resp.json())
      .then(data=>setBooks(data))
    },[])
    return (
        <div>
            {books.map(({title,author,description,id})=>{return <div key={id}><h3>{title}</h3><p>{author}</p><p>{description}</p></div>})}
        </div>
    )
}

export default BookList
