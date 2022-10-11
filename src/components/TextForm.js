import React,{useState} from 'react'



export default function TextForm(props) {
    const[text,setText] = useState('')
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
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)   
    }
    const handleUpClick = ()=>{ 
        setText(text.toUpperCase())
    }  
    const handleLoClick = ()=>{ 
        setText(text.toLowerCase())  
    }
    const handleClearClick = ()=>{ 
        setText("")  
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

    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3"  id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleUpClick} >Convert To UPPERCASE</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick} >Convert To lowercase</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick} >Clear Text</button>
                <button  type="button" className="btn btn-primary my-3 mx-2" onClick={handleCapClick} >Capitallize</button>
            </div>

        </div>
        <div className="container">
            <h2>Text Summary</h2>
            <p>{wordCounter(text)} words and {lengthCounter(text)} characters</p>
            <p> {0.008 *wordCounter(text)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
    )
};

