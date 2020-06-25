import React from 'react';

const Form = (props)=>{
    return (
            <form>
                <input type='text' value={props.input} onChange={props.change} placeholder='Podaje nazwę miasta'/>
            </form>
    );
}

export default Form;