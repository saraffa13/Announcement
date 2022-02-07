import { useState } from 'react'
import Form from './Form';
import classes from './MessageBox.module.css'


const MessageBox = (props) => {

    return (
        <div className={classes.message_box}>
            {props.txt}
        </div>
    )
}

export default MessageBox;