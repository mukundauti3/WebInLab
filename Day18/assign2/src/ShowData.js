import axios from "axios";
import { useRef, useState } from "react";

function ShowData()
{
    let [values,setValues]= useState([])

    //let dataStore=useRef(null)

    
    function show(e)
    {
       
        let promise = axios.get("https://jsonplaceholder.typicode.com/posts");

        promise.then((response)=>{console.log(response)

            // for(let i=0;i<data.length;i++)
            // {
            //     dataStore = JSON.stringify(data.value);
            // }
              setValues(response.data);
        }).catch((err)=>{console.log(err)});


    }

    return(<>
    <button onClick={show}>Show Data</button><br/><br/>

    <table border={2}>
        <thead>
            <tr><td>Id</td><td>Title</td></tr>
        </thead>
       

        <tbody>
          {values.map((val) => (
            <tr key={val.id}>
              <td>{val.userId}</td>
              <td>{val.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>)
}

export default ShowData;