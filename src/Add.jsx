import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Books.css'

const Add = () => {
    const [title, setTitle] = useState('');
    const [ISBN, setISBN] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            ISBN: ISBN,
            author: author,
            publisher: publisher,
            year: year,
            category: category
        })
        })
        .then((res) => {
        if (res.ok) {
            alert('Book was successfully added. You can now view it at the dashboard');
            window.location.reload();
            return res.json();
        } else {
            throw new Error('Unable to add book');
        }
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
   
  

  return (
    <div className='box2'>
        <Link to='/' className='link'>Dashboard</Link>

        <form onSubmit={handleSubmit} className='uploaditems'>
        <label>
            Title:
        </label>
        <input required='required' type="text" value={title} onChange={e => setTitle(e.target.value)} />
        
        <label>
        ISBN:
        </label>
        <input required='required' type="text" value={ISBN} onChange={e => setISBN(e.target.value)} />
       
        <label>
        Author:
        </label>
        <input required='required' type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            
        <label>
           Publisher:
        </label>
        <input required='required' type="text" value={publisher} onChange={e => setPublisher(e.target.value)} />
         
        <label>
            Year:
        </label>
        <input required='required' type="text" value={year} onChange={e => setYear(e.target.value)} />
         
        <label>
            Category:
        </label>
        <input required='required' type="text" value={category} onChange={e => setCategory(e.target.value)} />
         
         <br/>
         <br/>
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Submit
        </button>
        
        </form>
        
    </div>
  )
}

export default Add