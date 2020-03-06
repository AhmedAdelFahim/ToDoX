import React from 'react';
import Card from "react-bootstrap/Card";
import Item from "./Item";

const List = (props) => {
    return (
        <>
            <div className="">
                <Card style={{width: '22rem'}}>
                    <Card.Header>{props.header}</Card.Header>
                    <Card.Body>
                        {
                            props.tasks.map((task)=>{
                                if(props.type==='0'){
                                    return <Item task={task} key={task.id} makeDone={props.makeDone} deleteFromProcessing={props.deleteFromProcessing}/>
                                } else if(props.type==='1') {
                                    return <Item task={task} key={task.id} makeUndone={props.makeUndone} deleteFromDone={props.deleteFromDone} />
                                } else if(props.type==='-1') {
                                    return <Item task={task} key={task.id} undo={props.undo} />
                                } else {
                                    return <></>
                                }
                            })
                        }
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

export default List;
