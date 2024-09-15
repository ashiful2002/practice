import React from 'react'

const CommonButton = ({ btnText }) => {
    const bntclick = () => {
        console.log("btn is clicked");

    }
    return (

        <>
            <button
                className='btn btn-primary'
                onClick={bntclick}
            >
                {btnText}
            </button>

        </>
    )
}

export default CommonButton
