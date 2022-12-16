import React, { useState } from 'react'
import quotes from '../data/quotes'


const QuoteBox = () => {

    const [ index, setIndex ] = useState( Math.floor( Math.random() * quotes.length ) );
    
    const colorGenerator = () =>  {
        return( "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase() );
    }

    const randomIndex = () => {
        setIndex( Math.floor( Math.random() * quotes.length ) );
        colorGenerator();
    }

    const { quote, author }= quotes[ index ];
    const selectedColor = colorGenerator();

    document.body.style = `background: ${ selectedColor }`;
    
  return (
    <div className='card' style={{ color: selectedColor }}>
        <i className="fa-solid fa-quote-left quoteIcon"></i>
        <div className='textContainer'>
            <p className='quote'>{ quote }</p>
        </div>
            <p className='author'>{ author }</p>
        <button onClick={ randomIndex } style={{ backgroundColor: selectedColor }}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  )
}

export default QuoteBox