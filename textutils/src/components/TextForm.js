import React,{useState} from 'react'


export default function TextForm(props) {
   const handleUpClick = ()=>{
    // console.log("Upper_case was clicked..."+text);
    let newText=text.toUpperCase();
    setText(newText);
   }
   const handledownClick=()=>{
    let newdownText=text.toLocaleLowerCase();
    setText(newdownText);
   }
   const handleclearClick=()=>{
    let newText='';
    setText(newText);
   }
   const handleemailClick=()=>{
    let count=0;
    if(text.search('@gmail.com')){
        count=count+1;
    }
    let newtext="no of emails in the paragraph is ";
    let ans=(newtext+" "+count);
    setText(ans);
   }
   const handlecopyClick=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
   }
   const removespaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
   }
   const handleOnChange =(event)=>{
    console.log("on change..");
    setText(event.target.value);
   }
   
   const [text,setText]=useState('');
   
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>   
    <h3>{props.heading}</h3>
  <div className="form-group">
      {/* <label for="myBos">Example textarea</label> */}
      {/* <h2>Enter the text below to analyse..</h2> */}
      <textarea className="form-control"style={{backgroundColor:props.mode==='light'?'grey':'white'}}
       value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button> 
   <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to LowerCase case</button>
   <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
   <button className="btn btn-primary mx-2" onClick={handleemailClick}>Email_Extractor</button>
   <button className="btn btn-primary mx-2 " onClick={handlecopyClick}>Copy_text</button>
   <button className="btn btn-primary mx-2 " onClick={removespaces}>Remove_spaces</button>
</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{(text.split(" ").length)*0.008} min read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box to preview "}</p>
</div>
 </>
    
   

  )
}
