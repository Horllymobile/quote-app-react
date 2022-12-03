import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';

function App() {
  const [quotes, setQuoteState] = useState<Array<string>>([]);
  function handle(quote: string) {
    if (quotes.length <= 9) {
      setQuoteState([...quotes, quote])
    } else {
      alert("Max quote is 10")
    }
  }
  function handleDelete(id: number){
    quotes.splice(id, 1);
    setQuoteState([...quotes]);
  }
  return (
    <div className='container mt-10'>
      <div className='flex flex-row justify-center'>
        <ProgressBar maxQuote={10} currentQuote={quotes.length}/>
      </div>
      <div className='flex flex-row justify-center mt-8'>
        <QuoteForm handleAddQuote={handle}/>
      </div>
      <div className='w-full mx-5 my-5 flex flex-row justify-center mt-8'>
        <QuoteList quotes={quotes} deleteQuote={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
