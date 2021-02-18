import React,{useState}from 'react'
import './App.css';
import data from './data';

function AddTiles() {
    const [dataValue,setDataValue] = useState(data);
    const [pic,setPic] = useState("");
    const [heading,setHeading] = useState("");
    const [spec,setSpec] = useState("");

    const handlePicChange = (e) => {
        setPic(e.target.value);
    }
    const handleSpecChange = (e) => {
        setSpec(e.target.value);
    }
    const handleHeadChange = (e) =>{
        setHeading(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newVal = {
            images: pic,
            heading: heading,
            spec: spec
        }
        setDataValue([...data,newVal])
       // console.log(dataValue);
    }


    return (
        <>
        <div className="parent">
      {dataValue.map((item)=>{
        return (
          <div className="tiles">
            <img  src={item.images}/>
            <h4>{item.heading}</h4>
            <hr></hr>
            <p>{item.spec}</p>
          </div>
        )
      })}
    </div>

        <div>
            <input type="text" onChange={handlePicChange} value={pic}/>
            <input type="text" onChange={handleHeadChange} value={heading}/>
            <input type="text" onChange={handleSpecChange} value={spec}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default AddTiles;
