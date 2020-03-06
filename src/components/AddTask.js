import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const AddTask = (props) => {

    const [task,setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleClick =(e) => {
        e.preventDefault();
        if(task.trim().length === 0)
            return
        props.addNewTask(task);
        setTask("");

    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <Form inline>
                    <FormControl type="text" placeholder="Add Job" className="mr-sm-2" value={task} onChange={handleChange}/>
                    <Button type={"submit"} variant="outline-success" onClick={handleClick}>ADD</Button>
                </Form>
            </div>
        </>
    )
};

export default AddTask;
