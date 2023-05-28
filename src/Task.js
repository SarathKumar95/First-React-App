
export const Task = (props) => {
  return (
    <div key={props.id} style={{display: 'flex', justifyContent:'center', alignItems: 'center'}} className="mt-2 task">
    <h3 className="m-1" style={{color:"black", textDecoration : props.completed ? "line-through" : "None"}}>{props.taskName}</h3> <button className="m-1" onClick={() => props.deleteTask(props.id)}>X</button> <button onClick={() => props.compTask(props.id)}>Completed</button>
    </div>
  )
}
