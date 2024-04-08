import axios from 'axios';
import {useState} from 'react';


function Input({getTodoList}) {
   const [task, setTask] = useState(''); //POST

   //Function with POST request on form submit
   function postTask(event) {
     event.preventDefault(); //prevents reload
     console.log(task);
     event.target.reset(); //resets input field
    
     let taskData = {description: task}; //saving input data as variable

     axios.post('/api/todo', taskData).then((r) => {
       getTodoList; //Reloading list, seems to process before POST request because it's in a component?
     }).catch((e) => {
       console.log('error in client-side POST request', e);
       alert('Something went wrong :c');
     })
   };

   return (

    <form id={"inputIt"} style={{textAlign:"center"}}onSubmit={postTask}> {/*Reminder to self: OnSubmit works because any button click then submits form by default*/}
    <input id={"taskDesc"} placeholder={"Input new task"} style={{width: "400px"}} onChange={(e) => {setTask(e.target.value)}} />
    <button>Submit</button>
    </form>
    )

};

export default Input;