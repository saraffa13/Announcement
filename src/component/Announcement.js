import { useEffect, useState } from 'react';
import classes from './Announcement.module.css'
import Form from './Form';
import MessageBox from './MessageBox';


const initial_message = [
    {id:1,txt:"Hello! How are you doing?"},
    {id:2,txt:"Hello! How are you?"}
]
const Announcement = (props) => {

    const [messages,setMessages] = useState(initial_message);
    
    const messageArrayEditor = (message) =>{
        setMessages(prevState => {
            const array = [{id:Math.random(), txt :message},...prevState];
            return array;
        });
    }

    return (
        <div>
            <Form onReceive={messageArrayEditor}/>
            {messages.map(message => <MessageBox key={message.id} txt={message.txt} />)}
        </div>
        
    )
}

export default Announcement;