import React from 'react';
import Button from "react-bootstrap/Button";

const Item = (props) => {

    const handleDone = (e) => {
        props.makeDone(props.task.id)
    }

    const handleDeleteFromProcessing = (e) => {
        props.deleteFromProcessing(props.task.id)
    }

    const handleUnDone = (e) => {
        props.makeUndone(props.task.id)
    }

    const handleDeleteFromDone = (e) => {
        props.deleteFromDone(props.task.id)
    }

    const handleUndo = (e) => {
        props.undo(props.task.id)
    }

    return (
        <>
            <div className=" d-flex justify-content-between ">
                <h3 className="d-lg-inline-block">{props.task.title}</h3>
                <div className="">
                    {props.makeDone && <Button className="btn-info btn-sm mr-2" onClick={handleDone}>Done</Button>}
                    {props.deleteFromProcessing && <Button className="btn-danger btn-sm" onClick={handleDeleteFromProcessing}>Delete</Button>}
                    {props.makeUndone && <Button className="btn-info btn-sm mr-2" onClick={handleUnDone}>UnDone</Button>}
                    {props.deleteFromDone && <Button className="btn-danger btn-sm" onClick={handleDeleteFromDone}>Delete</Button>}
                    {props.undo && <Button className="btn-info btn-sm mr-2" onClick={handleUndo}>Undo</Button>}
                </div>
            </div>
        </>
    )
};

export default Item;
