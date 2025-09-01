import React, { useState } from 'react'

const PracticeTailwind = () => {
    const [first, setfirst] = useState(true)

    function handle() {
        setfirst(!first)
    }
    return (
        <>
            <div className='flex flex-col m-4 p-8 bg-sky-100  border-5 border-violet-600'>
                <div className='flex text-blue-500 text-4xl justify-center'>
                    <button className='bg-sky-50 rounded-lg font-bold' onClick={handle}>Click me</button>
                </div>
                <div className=' flex border-blue-700 justify-center mt-5 '>
                    {first ? <span className='bg-red-500 rounded-lg p-2 '>red</span> : 
                    <span className='bg-green-500 rounded-lg p-2'>green</span>}
                </div>
            </div>
        </>
    ); 
}

export default PracticeTailwind