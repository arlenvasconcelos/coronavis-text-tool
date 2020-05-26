import React, {useState, useEffect} from 'react';
import {Box} from '@material-ui/core'


export default function Highlight(props){

  
  const {text, terms, types, palette} = props;
  const [parts, setParts] = useState([]);

  const getRegExp = () => {

    let exp = "";
    terms.forEach((value, index)=>{
      if (index === terms.length-1)
        exp = exp + ` +${value}[ ,.()]`;
      else 
        exp = exp + ` +${value}[ ,.()]|`;
    })
    setParts(text.split(new RegExp(`(${exp})`, 'gi')));
  }
  

  useEffect(()=>{ 
    if (terms){
      getRegExp();
    }
  },[terms])

  const verifyTerms = (term) => {
    
    var eArr = terms.values();

    for (let item of eArr) {
      if (term.toLowerCase().trim() === item.toLowerCase() ||
        term.toLowerCase().trim() === item.toLowerCase() + "." ||
        term.toLowerCase().trim() === item.toLowerCase() + "," ||
        term.toLowerCase().trim() === item.toLowerCase() + "(" ||
        term.toLowerCase().trim() === item.toLowerCase() + ")"
      ){
        return terms.indexOf(item);
      } 
    }
    return -1;
    
  }  

  const getHighlightedText = (part, i) => {

    var index = verifyTerms(part);

    if ( index >= 0) {
      return (
        <Box key={i}
          component="span"
          style= {{
            backgroundColor: `${types ? palette[types[index]] : '#8dd3c7'}`,
            marginLeft: '1px',
            marginRight: '1px' 
          }}
        >
          { part }
        </Box>
      )
    }
    else {
      return (
        <Box key={i} component="span">
          {part}
        </Box>
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