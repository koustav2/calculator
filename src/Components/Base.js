import React from 'react'

const Base = ({ handleClick, handleClear, handleEqual }) => {
    return (
        <div className="Base">

            <button className='digit-keys'
                onClick={() => handleClick("7")}>7</button>
            <button className='digit-keys'
                onClick={() => handleClick("8")}>8</button>
            <button className='digit-keys'
                onClick={() => handleClick("9")}>9</button>
            <button className='operator-keys'
                onClick={() => handleClick("/")}>/</button>

            <br />

            <button className='digit-keys'
                onClick={() => handleClick("4")}>4</button>
            <button className='digit-keys'
                onClick={() => handleClick("5")}>5</button>
            <button className='digit-keys'
                onClick={() => handleClick("6")}>6</button>
            <button className='operator-keys'
                onClick={() => handleClick("*")}>*</button>

            <br />

            <button className='digit-keys'
                onClick={() => handleClick("1")}>1</button>
            <button className='digit-keys'
                onClick={() => handleClick("2")}>2</button>
            <button className='digit-keys'
                onClick={() => handleClick("3")}>3</button>
            <button className='operator-keys'
                onClick={() => handleClick("-")}>-</button>

            <br />

            <button className='digit-keys bottom-left-corner'
                onClick={() => handleClick("0")}>0</button>
            <button className='Equal-keys'
                onClick={handleEqual}>=</button>
            <button className='Clear-keys'
                onClick={handleClear}>C</button>
            <button className='operator-keys bottom-right-corner'
                onClick={() => handleClick("+")}>+</button>

        </div>

    )
}

export default Base
