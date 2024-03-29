import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';



function App () {
  const [todoList, setTodoList] = useState([]);

  function getTodoList() {
    axios.get('/api/todo').then((r) => {
      console.log('GET request made on client');
      setTodoList(r.data);
    }).catch((e) => {
      console.log('Error in client-side GET request');
      //add alert
    })
  };

  //useEffect is called on page load
  useEffect(() => {
    console.log('On page load');
    getTodoList();
  }, []); //useEffect function takes in 2 arguments: arrow function & empty array!!!



  return (
    <div>
      <header>
      <h1>TO DO APP</h1>
      </header>

      <main>
      <form>
      {/*input list items*/}

      </form>
        
      
      {/*display list on DOM*/}
        {
          todoList.map((list) => {
            return <div key={list.id}>
              {list.description + " " + list.complete}
            </div>
          })
        }
      </main>



    </div>
  );

}

export default App
