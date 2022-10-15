import React,{useState} from 'react'



export default function TextForm(props) {
    const[text,setText] = useState('')
    const [textColor,setTextColor] = useState('')
    const handleCapClick = ()=>{
        let sentences = text.split(".")
        let new_sen = ""
        let sen_list = []
        sentences.forEach(sentence => {
            let words = sentence.split(" ").filter(function(word){
                return [",",".",""].includes(word) === false
            })
            words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
            new_sen = words.join(" ")
            sen_list.push(new_sen)
            new_sen = ""
        })
        let new_para = sen_list.join(". ")
        setText(new_para)
        props.showAlert("Capitallizeation Done","success")
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)   
    }
    const handleUpClick = ()=>{ 
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","success")
    }  
    const handleLoClick = ()=>{ 
        setText(text.toLowerCase())  
        props.showAlert("Converted to Lowerrcase","success")
    }
    const handleClearClick = ()=>{ 
        setText("")  
        props.showAlert("All text Cleared ","success")
    }
    const wordCounter = (text)=>{
        return text.split(" ").filter(function(word){
            return [",",".",""].includes(word) === false
        }).length
    }
    const lengthCounter = (text)=>{
        let length=0
        Array.from(text).forEach(char => {
            if([",",".",""," "].includes(char) === false){
                length +=1
            }
        });
        return length
    }
    const changeColor = (event)=>{
        setTextColor(event.target.value)
    }
    
    // feat-from-yt-1
    const handleExtraSpaces = ()=>{
        // using regex  /[ ]+/ this means one or more spaces
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))  
        props.showAlert("All extra spaces removed ","success")
    }
    
    // feat-from-yt-2
    const handleCopy =()=>{
        let copyText = document.getElementById("myBox")
        copyText.select()
        // used to copy text to clipboard 
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied to clipboard ","success")
    }


    return (
        <>
        <div className="container" style={{color : props.mode==="light"?"black":"white"}} >
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3 "  id="myBox" style={{background:props.mode==="light"?"white":"grey",  color :textColor}} rows="8" value={text} onChange={handleOnChange} ></textarea>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleUpClick} >Convert To UPPERCASE</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick} >Convert To lowercase</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick} >Clear Text</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleCapClick} >Capitallize</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopy} >Copy Text</button>
                <input type="color" className=" form-control form-control-color" id="exampleColorInput" value={textColor} title="Choose your color" onChange={changeColor}></input>
            </div>

        </div>
        <div className="container" style={{color : props.mode==="light"?"black":"white"}} >
            <h2>Text Summary</h2>
            <p>{wordCounter(text)} words and {lengthCounter(text)} characters</p>
            <p> {0.008 *wordCounter(text)} Minutes read</p>
            <h2>Preview</h2>
            <p style={{color :textColor}}>{text.length>0?text:"Enter text in the box to preview it her."}</p>
        </div>
        
        </>
    )
};

