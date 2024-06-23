import React , {useState} from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        addTodo(title, desc);
    }
    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <h3>Add a Todo</h3>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" value ={title} onChange ={(e) =>{setTitle(e.target.value)}}
                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Text</label>
                    <input type="description" value = {desc } onChange ={(e) =>{setDesc(e.target.value)}}
                    class="form-control" id="exampleInputPassword1"/>
                </div>
               
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
