import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [tasks,setTasks]=useState([])
let [formData,setFormData]=useState({
  task:"",
  completed:false,
  author:""
})


function handelChange(e){
  let targetName=e.target.name;
  let targetValue=targetName==="completed"?e.target.checked : e.target.value;


  setFormData({
    ...formData,
    [targetName]:targetValue
  })
}


function handelClick(e){

  e.preventDefault()

  // checking for only empty space 
  formData.task.replace(/\s+/g,"").length===0?(alert("Please write any task ")): (setTasks([...tasks,formData]),setFormData({
    task:"",
    completed:false,
    author:""
  }))


}


function handelbtnClick(arg){
 setToggeltext(!arg.toString())
 
  
}
let [toggeltext,setToggeltext]=useState(tasks.completed?"Yes":"No")
// console.log(tasks.concat)


  return (
    <>
   <form>
   <input type='text' name='task' placeholder='Add task' value={formData.task} onChange={handelChange} />
    <label>
      Completed:<input name="completed"  type="checkbox" onChange={handelChange} checked={formData.completed} />
    </label>
    <br/>
    <br/>
    <input type="text" name='author' placeholder='Author' value={formData.author} onChange={handelChange} />
    <input type="submit"  value="Add task" onClick={handelClick}/>
   </form>

    {tasks.map((task,index)=>{

      return (<div key={index}>
      <h1>{task.task}</h1>
      <button onClick={()=>handelbtnClick(task.completed)}>{toggeltext }</button>
      <h2>{task.author}</h2>
      </div>)
    })}



    </>)
  
}

export default App
