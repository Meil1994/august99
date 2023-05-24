import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Books.css'

const MyComponent = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  }

  const LoadAdd = (id) => {
    navigate("/add");
  }

  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
        fetch("http://localhost:5000/books/" + id, {
            method: "DELETE"
        }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
}


  useEffect(() => {
    fetch("http://localhost:5000/books").then((res) => {
        return res.json();
    }).then((resp) => {
        empdatachange(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}, [])

  return (
    <div className='container'>

      <button onClick={LoadAdd} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Add Book
      </button>
        
        <table>
        <tr>
          <th className='border border-dark'>Title</th>
          <th className='border border-dark'>ISBN</th>
          <th className='border border-dark'>Author </th>
          <th className='border border-dark'>Publisher</th>
          <th className='border border-dark'>Year Published</th>
          <th className='border border-dark'>Category</th>
        </tr>
       

        {empdata &&
                    empdata.map(item => (
                        <tr key={item.id}>
                            <td className='border border-dark'>{item.title}</td>
                            <td className='border border-dark'>{item.ISBN}</td>
                            <td className='border border-dark'>{item.author}</td>
                            <td className='border border-dark'>{item.publisher}</td>
                            <td className='border border-dark'>{item.year}</td>
                            <td className='border border-dark'>{item.category}</td>
                            <td className='border border-dark buttons'>
                              <button onClick={() => {LoadEdit(item.id)}} type="button" class="but1 btn btn-secondary">Edit</button>
                              <button onClick={() => { Removefunction(item.id) }} type="button" class="btn btn-secondary">Delete</button>
                            </td>
                        </tr>
                    ))
                }

          
          
        
      </table>
      
    </div>
  );
};

export default MyComponent;