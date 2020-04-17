import React, {useState, useEffect} from 'react'


export default function Highlight(props){


  const {text, terms, types} = props;
  const [parts, setParts] = useState([])
  const [palette, setPalette] = useState([]);

  function getColour(){

    const p = [];    
    var hex = '0123456789ABCDEF';
  
    //deleting repeated types
    const types_norepeated = [...new Set(types)]

    
    for (var i = 0; i < types_norepeated.length-1; i++ ) {
      var colour = '#';
      for (var j = 0; j < 6; j++ ) {
        // get random number
        colour += hex[Math.floor(Math.random() * 16)];
      }
      p[types_norepeated[i]] = colour;
    }
    return p;
  }

  const getRegExp = () => {

    let exp = "";
    terms.forEach((value, index)=>{
      if (index === terms.length-1)
        exp = exp + `${value}[ ,.]`;
      else 
        exp = exp + `${value}[ ,.]|`;
    })
    setParts(text.split(new RegExp(`(${exp})`, 'gi')));
  }
  
  useEffect(()=>{
    getRegExp();
    setPalette(getColour()); //Creating colours palleta
  },[])

  const verifyTerms = (term) => {
    
    var eArr = terms.values();
    // seu navegador deve suportar for..of loop
    // e deixar variáveis let-scoped no for loops
    for (let item of eArr) {
      if (term.toLowerCase() === (item.toLowerCase() + (" " || "," || + "."))){
        return terms.indexOf(item);
      } 
    }
    return -1;
    
  }  

  const getHighlightedText = (part, i) => {

    var index = verifyTerms(part);
    // setPalleta(getColour());
    
    if ( index >= 0) {
      return (
        <span key={i} 
          style= {{
            display: 'inline-flex',
            fontWeight: 'bold', 
            backgroundColor: `${palette[types[index]] || 'yellow'}`, 
            padding: "0 3px",
            margin: "1px 2px", 
            color:'black', 
            borderRadius: "3px"
          }}     
        >
          { part }
          {/* <b 
            style= {{
              fontWeight: 'bold', 
              backgroundColor: "white", 
              padding: "0 1px", 
              color:'black', 
              borderRadius: "3px",
              margin: "0 2px",
              fontSize: '0.6em',
              alignSelf: 'center'
              
            }}  
          >
            {types[index].slice(0,3)}
          </b> */}
        </span>
      )
    }
    else {
      return (
        < span key={i}>
          {part}
        </span>
      )
    }
  }

  return (
    <> 
        { parts.map((part, i) => {
          return (
            getHighlightedText(part, i)
          )
        })}
    </>
  )
}