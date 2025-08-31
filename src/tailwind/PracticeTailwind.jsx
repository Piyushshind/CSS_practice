import React, { useState } from 'react'

const PracticeTailwind = () => {
    const [first, setfirst] = useState(true)

    function handle() {
        setfirst(!first)
    }
    return (
        <>
            <div className='flex flex-col m-4 p-8'>
                <div className='text-blue-500 text-4xl '>
                    <button className='bg-blue-50 rounded-lg font-bold' onClick={handle}>Click me</button>
                </div>
                <div className='border-blue-700'>
                    {first ? <span className='bg-red-500 rounded-lg m-2 p-1'>red</span> : 
                    <span className='bg-green-500 rounded-lg'>green</span>}
                </div>
            </div>
        </>
    );
}

export default PracticeTailwind