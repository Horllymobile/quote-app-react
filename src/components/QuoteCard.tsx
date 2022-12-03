import React from 'react';

function QuoteCard(props: { quote: string, id: number, deleteQuote: (index: number) => void }) {
    function deleteQuote(): any {
        props.deleteQuote(props.id);
    }
    return (
        <div className='shadow rounded bg-white h-40 w-48 p-5'>
            <p>{props.quote}</p>
            <div className='relative top-12'>
                <button className=' bg-red-500 rounded p-2' onClick={deleteQuote}>Delete</button>
            </div>
        </div>
    );
  }
  
export default QuoteCard;