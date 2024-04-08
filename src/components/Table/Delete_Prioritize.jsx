import axios from 'axios';

function Delete_Prioritize({list, getTodoList}) {

    const toggle = (id) => {

        //PUT request
        axios.put(`/api/todo/${id}`).then((r) =>{
          getTodoList(); //updates current task list on DOM
        }).catch((e) => {
          console.log('Error in client PUT request');
          alert('Something went wrong :c');
        }) 
      };
    const prioritizeTask = (listId) => {
    
        //PUT request
        axios.put(`/api/todo/pri/${listId}`).then((r) =>{
    
          getTodoList(); //updates current task list on DOM
        }).catch((e) => {
          console.log('Error in client PUT request');
          alert('Something went wrong :c');
        });
      };
    
      //Function to delete task on DOM, will also delete button
      function deleteButton(id) {
        axios.delete(`/api/todo/${id}`).then((r) => {
          getTodoList(); //Reloading list
        }).catch((e) => {
          console.log('Error in client-side DELETE request', e);
          alert('Something went wrong :c');
        })
      };


    return(
        <>
        <td id={"other"}>{list.complete ? <button id={"undo"} onClick={() => {toggle(list.id)}}>Undo</button> : <button onClick={() => {toggle(list.id)}}>Complete</button>}</td>
                 {/* ^ "Undo" or "Complete" button, depending on list.complete truth, calls toggle function */}   
        <td id={"other"}><button id={"delete"} onClick={() => deleteButton(list.id)}>Delete Task</button></td>{/*Delete button*/}
  
        <td id={"other"}><button style={{marginLeft:".5px"}} id={"priorityButton"} onClick={() => prioritizeTask(list.id)}>Prioritize Task</button></td>
        </>
    )
}

export default Delete_Prioritize