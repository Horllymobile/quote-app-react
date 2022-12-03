import React from 'react';
import QuoteCard from './QuoteCard';
function QuoteList(props: { quotes: Array<string>, deleteQuote: (index: number) => void }) {
    function handleDelete(id: number){
        props.deleteQuote(id);
    }
    return (
        <div className=' grid grid-cols-6 gap-10 justify-center'>
            { props.quotes.map((item, index) => <QuoteCard quote={item} key={index} id={index} deleteQuote={handleDelete}/>)}
        </div>
    );
  }
  
export default QuoteList;