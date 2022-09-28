import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../styles/table.style.css'


const Timer = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=> count + 1)
    },1000);
  })

  useEffect(()=>{
    // fetchData();
    fetchDataAlt();
},[])

  // const fetchData = ()=>{
  //   fetch("http://127.0.0.1:8000/api/v1/billings/banks")
  //   .then((res)=>res.json())
  //   .then((data)=>setData(data))
  // }

  const fetchDataAlt = async ()=>{
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      setData(response.data)
      console.log(response.data)
     
    }
    catch(error){
      console.log(error)
    }
  }

  return(
    <div className='table-container'>
    <table>
      <tr>
        <th>s/n</th>
        <th>userId</th>
        <th>Todo Title</th>
        <td>Status</td>
      </tr>
      {data && data.length > 0 ? data.map((item,index)=>
      <tr>
        <td>{index}</td>
        <td>{item.userId}</td>
        <td>{item.title}</td>
        <td>{item.completed==true ? "Done" : "Not done"}</td>
      </tr>
    ):<p>No data to display</p>}
    </table>
    </div>
    
  )
}

export default Timer