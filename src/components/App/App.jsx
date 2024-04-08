import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Table from '../Table/Table.jsx';



function App () {
  
  const [todoList, setTodoList] = useState([]); //GET

    //Function with GET request inside
    const getTodoList = () => {

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
        <Header />
      </header>

      <main>
        <Table todoList={todoList} getTodoList={getTodoList} />
      </main>
      <br />
      <br />
      <Footer />

    </div>
  );

}

export default App
