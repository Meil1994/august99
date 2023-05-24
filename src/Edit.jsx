import { useState, useEffect } from 'react';
import {useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Edit = () => {
    const { empid } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/books/" + empid).then((res) => {
          return res.json();
        }).then((resp) => {
          idchange(resp.id);
          titlechange(resp.title);
          ISBNchange(resp.ISBN);
          authorchange(resp.author)
          publisherchange(resp.publisher);
          yearchange(resp.year);
          categorychange(resp.category);
        
    
        }).catch((err) => {
          console.log(err.message);
        })
      }, []);

      const [title, titlechange] = useState("");
      const [ISBN, ISBNchange] = useState("");
      const [author, authorchange] = useState("");
      const [id, idchange] = useState("");
      const [publisher, publisherchange] = useState("");
      const [year, yearchange] = useState("");
      const [category, categorychange] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        const empdata = {title, ISBN, author, publisher, year, category};
    
        fetch("http://localhost:5000/books/" + empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
          }).then((res)=>{
            alert('Saved successfully.')
            navigate('/');
          }).catch((err)=>{
            console.log(err.message)
          })
      }

  return (
    <div className='edit_container'>
    <form onSubmit={handleSubmit} className='book_edit'>
      <label>Title:</label>
      <input type='text' required value={title} onChange={e=>titlechange(e.target.value)}></input>
      <label>ISBN:</label>
      <input type='text' required value={ISBN} onChange={e=>ISBNchange(e.target.value)}></input>
      <label>Author:</label>
      <input type='text' required value={author} onChange={e=>authorchange(e.target.value)}></input>
      <label>Publisher:</label>
      <input type='text' required value={publisher} onChange={e=>publisherchange(e.target.value)}></input>
      <label>Year:</label>
      <input type='text' required value={year} onChange={e=>yearchange(e.target.value)}></input>
      <label>Category:</label>
      <input type='text' required value={category} onChange={e=>categorychange(e.target.value)}></input>
      
      <div className='edit_buttons'>
          <button type="submit" class="btn btn-success">Submit</button>
          <Link to='/' className='link'>Dashboard</Link>
      </div>
    </form>
  </div>
)
}
  

export default Edit