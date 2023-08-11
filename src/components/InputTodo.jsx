import React, {useState} from "react";

const InputTodo = () => {
    const baseUrl = "http://localhost:3000/todos";

    const [description, setDescription] = useState("");

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(baseUrl, {
                method: "POST",
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
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={handleChange}></input>
                <button className="btn btn-success">Add</button>
            </form>
        </>
    );
}

export default InputTodo;