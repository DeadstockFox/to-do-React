import Input from '../Input/Input.jsx';
import './Table.css'
import Delete_Prioritize from './Delete_Prioritize.jsx';

function Table({todoList, getTodoList}) {

    return (
        <>
        <Input  getTodoList={getTodoList}/>
         <br/>
         {/*display list on DOM, loops through each item in Database with .map*/}
         {
           todoList.map((list) => {
            return <div key={list.id} id={list.priority === true && list.complete === false ? "priority" : ""}
            className={list.complete === true ? "complete" : "normal"}> {/*Since id takes priority over className, ternary for priority trumps*/}
            <table>
              <tbody>
                <tr className={"rows"}>
  
                <td id={"listDesc"}>{list.description}</td>{/*Task description*/}
  
                <td id={"other"}>{(list.complete === true ? "Finished" : "Not Finished")}</td>{/*Ternary for if task is complete*/} 
                    
                <Delete_Prioritize  list={list} getTodoList={getTodoList}/>
                </tr>
              </tbody>
            </table>
              </div>
            })
         }
        </>

    )

};

export default Table;