import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';



function App () {
  //Getters & Setters
  const [todoList, setTodoList] = useState([]); //GET
  const [task, setTask] = useState(''); //POST

  //Function with GET request inside
  function getTodoList() {

    axios.get('/api/todo').then((r) => {
      console.log('GET request made on client');
      setTodoList(r.data); //setting list to map over later
    }).catch((e) => {
      console.log('Error in client-side GET request', e);
      alert('Something went wrong : C');
    })
  };

  //useEffect is called on page load, GET request
  useEffect(() => {
    console.log('On page load');
    getTodoList();
  }, []); //SELF REMINDER: useEffect function takes in 2 arguments: arrow function & empty array!!!

  //Function with POST request on form submit
  function postTask(event) {
    event.preventDefault(); //prevents reload
    console.log(task);
    event.target.reset(); //resets input field
    
    let taskData = {description: task}; //saving input data as variable

    axios.post('/api/todo', taskData).then((r) => {
      getTodoList(); //Reloading list
    }).catch((e) => {
      console.log('error in client-side POST request', e);
      alert('Something went wrong :c');
    })
  };

  const toggle = (id) => {
    axios.put(`/api/todo/${id}`).then((r) =>{
      getTodoList();
    }).catch((e) => {
      console.log('Error in client PUT request');
      alert('Something went wrong :c');
    })
  };
/*
IGNORE: Testing old onClick!
  function changeTask(event) {
    event.preventDefault();
    setTask(document.getElementById("taskDesc").value);
    console.log(task);
  };

  It works, but there is a delay with answers, don't like that!
*/


  return (
    <div>

      <header>
      <h1>TO DO APP</h1>
      </header>

      <main>

      <form onSubmit={postTask} >  {/*Reminder to self: OnSubmit works because any button click then submits form by default*/}
      {/*input list items*/}

      <input id={"taskDesc"} placeholder={"Input new task"} onChange={(e) => {setTask(e.target.value)}} />
      <button>Submit</button>
      </form>
        
      
      {/*display list on DOM*/}
        {
          todoList.map((list) => {
            return <div key={list.id}>
              {list.description + " " + list.complete} <button onClick={() => {toggle(list.id)}}>Complete</button>
            </div>
          })
        }
      </main>



    </div>
  );

}

export default App
