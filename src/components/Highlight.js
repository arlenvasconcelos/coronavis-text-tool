import React, {useState, useEffect} from 'react'


export default function Highlight(props){


  const {text, terms, subterms} = props;
  const [parts, setParts] = useState([])

  function getColour(){
    var hex = '0123456789ABCDEF';
    var color = '#';
  
    // get random number
    for (var i = 0; i < 6; i++ ) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
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
    console.log(terms)
    console.log(subterms)
    getRegExp();
  },[])

  const verifyTerms   = (term) => {
    
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
    
    if ( index >= 0) {
      return (
        <span key={i} 
          style= {{
            fontWeight: 'bold', 
            backgroundColor: `${getColour()}`, 
            padding: "0 3px",
            margin: "0 2px", 
            color:'black', 
            borderRadius: "3px"
          }}     
        >
          { part }
          <b 
            style= {{
              fontWeight: 'bold', 
              backgroundColor: "white", 
              padding: "0 1px", 
              color:'black', 
              borderRadius: "3px",
              fontSize: '0.5em'
            }}  
          >
            {subterms[index].slice(0,3)}
          </b>
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