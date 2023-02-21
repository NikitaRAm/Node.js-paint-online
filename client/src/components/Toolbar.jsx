import React from 'react';
import '../styles/toolbar.scss'

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__btn brush'></button>
            <button className='toolbar__btn rect'></button>
            <button className='toolbar__btn circle'></button>
            <button className='toolbar__btn eraser'></button>
            <button className='toolbar__btn line'></button>
            <input style={{marginLeft:20}} type='color'/>
            <button className='toolbar__btn undo'></button>
            <button className='toolbar__btn redo'></button>
            <button className='toolbar__btn save'></button>
        </div>
    )
}
export default Toolbar;