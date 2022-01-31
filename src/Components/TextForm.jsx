import React, { useState } from 'react';

export default function TextForm(props) {
    const [text,settext]=useState("");
    let initialcount=0.008;
    const ChangeToLower=()=>{
        let newText =text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const ChangeToUpper=()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const RemoveSpaces =()=>{
        let newText = text.replace(/ /g,'');
        settext(newText)
        props.showAlert("Space Removed Successfully","success");
    }
    const handleOnChange=(event)=>{
        console.log(event.target.value)
        settext(event.target.value);
    }
    const DeleteAll =()=>{
        settext("");
        props.showAlert("Deleted Successfully","success");
    }
  return (
    <>
    <div className="container" style={{ color:props.mode==='light'?'black':'white'}}>
    <div className="container"  >
        <h2>{props.heading}</h2>
        <div className="my-3">
            <textarea
            className="form-control"
            placeholder="Enter your text here.."
            onChange={handleOnChange}
            style={{
                backgroundColor:props.mode==='light'?'white':'#06061a',
                color:props.mode==='light'?'black':'white'
            }}
            value={text}
            id="myBox"
            rows="8"
        ></textarea>
        </div>
    </div>
        <div className="container" >
            <h2>Your Text summary</h2>
            <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{text.length===0?0:initialcount*text.split(" ").length} Minutes to read</p>
        </div>
        <div className="container" >
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
      
        <button className="btn-primary   mx-3 my-3" onClick={ChangeToUpper}>Change to Uppercase</button>
        <button className="btn-primary mx-3 my-3" onClick={ChangeToLower}>Change to Lowercase</button>
        <button className="btn-primary mx-3 my-3" onClick={RemoveSpaces}>Remove Spaces</button>
        <button className="btn-primary mx-3 my-3" onClick={DeleteAll}>Delete All</button>
    </>
  );
}
