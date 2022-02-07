import { useState } from 'react'
import classes from './Form.module.css'


const Form = (props) => {

    const [value,setVal] = useState('');
    const [length,setLength] = useState(0);


    const messageHandler=(event)=>{
        setVal(event.target.value)
        setLength(event.target.value.length)
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();

        props.onReceive(value);
        
        setVal('');
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <input type="text" value={value} onChange={messageHandler}></input>
            <button type='submit' disabled={length===0&&true}>Add</button>
        </form>
    )
}

export default Form;