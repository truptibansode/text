import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearclick = ()=>{
        let newText ="";
        setText(newText);
    }
    const handleonchange = (event)=>{
        setText(event.target.value); 
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>
                {props.heading} 
            </h1>
          <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="mytext" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-0" onClick={handleclearclick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length)} minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
