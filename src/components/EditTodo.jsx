import React, {useState} from 'react'

const EditTodo = ({todo}) => {
    const baseUrl = "https://pern-todo-client-p1ww.onrender.com";

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(baseUrl+'/'+todo.id, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location.assign("/");
        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target={`#id${todo.id}`} onClick={() => setDescription(todo.description)}>Edit</button>

        <div id={`id${todo.id}`} className="modal fade" role="dialog">
        <div className="modal-dialog">

            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                <h4 className="modal-title">Edit Todo</h4>
            </div>
            <div className="modal-body">
                <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={e => updateDescription(e)}>Done</button>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
            </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default EditTodo;
