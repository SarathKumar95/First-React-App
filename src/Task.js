
export const Task = (props) => {
  return (
    <div key={props.id} style={{display: 'flex', justifyContent:'center', alignItems: 'center'}} className="mt-2 task">
    <h3 className="m-1" style={{color:"black", textDecoration : props.completed ? "line-through" : "None"}}>{props.taskName}</h3> <button className="m-1 btn btn-sm btn-danger text-white" onClick={() => props.deleteTask(props.id)}>X</button> <button onClick={() => props.compTask(props.id)} className="btn btn-sm btn-success">Completed</button>
    </div>
  )
}
