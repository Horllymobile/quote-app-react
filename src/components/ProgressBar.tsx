import React from 'react';

function ProgressBar({ maxQuote, currentQuote }: { maxQuote: number, currentQuote: number }) {
  return (
    <div>
        <progress id="file" value={ (maxQuote / 100) * currentQuote } max="1" className='w-96'></progress>
        <div className=' flex flex-row justify-between'>
            <p>{currentQuote}</p>
            <p>{maxQuote}</p>
        </div>
    </div>
  );
}

export default ProgressBar;
