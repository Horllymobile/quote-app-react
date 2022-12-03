import React, {useRef} from 'react';

function QuoteForm(props: { handleAddQuote: (quote: string) => void }) {
  const quoteRef = useRef<any>()
  function handleFormSubmit(event: any) {
    event.preventDefault()
    if (quoteRef.current.value) {
        props.handleAddQuote(quoteRef.current.value);
        quoteRef.current.value = '';
    }else {
        alert('Quote is required');
    }
  }
  return (
    <div>
        <form className='w-96' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-5'>
                <label htmlFor="quote">Quote text</label>
                <textarea name="quote" id="quote" className='border p-1 outline-none rounded h-36' ref={quoteRef}></textarea>
            </div>
            <button className='bg-black p-5 text-white mt-4 w-full rounded'>Add Quote</button>
        </form>
    </div>
  );
}

export default QuoteForm;
