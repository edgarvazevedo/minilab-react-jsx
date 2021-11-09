function ToDoList (props) {
    
  return (

    <ul class="list-group">
    
    { props.taskList.map(name => {
      return (
        <li class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
          {name}
        </li>);
    })}

    </ul>
  );  
  
}

export default ToDoList;