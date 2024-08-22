import React from 'react'
import useCounterStore from '../stores/useCounterStore';

function Counter() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div>
        <p className='title'>First Zustand - ReactJS - Counter</p>
        <div className='logo'>
            <img src='https://tsh.io/wp-content/uploads/2023/02/zustand-logo.png'/>
        </div>
        <img id='react' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'/>
            <div className='counter_parent'>

                <span className='counter'>{count}</span>

                <div>
                    <button className='decrement_btn' onClick={decrement}>━ Giảm</button>
                    <button className='reset_btn' onClick={reset}>⟳ Reset</button>
                    <button className='increment_btn' onClick={increment}>➕ Tăng</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;