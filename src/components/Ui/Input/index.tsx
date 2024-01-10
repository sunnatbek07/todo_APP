// import React from 'react';
import './style.scss';

const InputBtn = () => {
    return (
        <>
            <div className='input_btn'>
                <input type="text" placeholder='some words' />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <rect width="24.5458" height="24" transform="translate(0.913025 0.59552)" fill="#AAAAAA" />
                        <path d="M7.04948 12.5955H19.3224" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.1859 18.5955L13.1859 6.59552" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default InputBtn