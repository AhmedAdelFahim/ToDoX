import React, { useState} from 'react';
import List from "./List";
import Header from "./Header";


const Main = () => {

    // example
    /*const obj = {
        processingTasks:[{name:"js"}],
            doneTasks:[{name:"c++"}],
        deletedTasks:[{name:"Java",prevState:0}] // 0 for processing 1 for done

    }*/

    const [processingTasks,setProcessingTasks] = useState([]);
    const [doneTasks,setDoneTasks] = useState([]);
    const [deletedTasks,setDeletedTasks] = useState([]);

    const addNewTask = (task) => {
        setProcessingTasks(processingTasks.concat({title:task,id:Date.now()}));
    };

    const makeDone = (id)=>{
        const doneTask = processingTasks.filter((task)=>{
            return task.id === id;
        });
        setDoneTasks(doneTasks.concat(doneTask));
        setProcessingTasks(processingTasks.filter((task)=>{
            return task.id !== id;
        }));
    }

    const deleteFromProcessing = (id) => {
        const deletedTask = processingTasks.filter((task)=>{
            return task.id === id;
        });
        deletedTask[0].prevState = 0;
        setDeletedTasks(deletedTasks.concat(deletedTask));
        setProcessingTasks(processingTasks.filter((task)=>{
            return task.id !== id;
        }));
    }

    const deleteFromDone = (id) => {
        const deletedTask = doneTasks.filter((task)=>{
            return task.id === id;
        });
        deletedTask[0].prevState = 1;
        setDeletedTasks(deletedTasks.concat(deletedTask));
        setDoneTasks(doneTasks.filter((task)=>{
            return task.id !== id;
        }));
    }

    const makeUndone = (id) => {
        const processingTask = doneTasks.filter((task)=>{
            return task.id === id;
        });
        setProcessingTasks(processingTasks.concat(processingTask));
        setDoneTasks(doneTasks.filter((task)=>{
            return task.id !== id;
        }));
    }

    const undo = (id) => {
        const undeletedTask = deletedTasks.filter((task)=> {
            return task.id === id;
        })
        if(undeletedTask[0].prevState === 0) {
            setProcessingTasks(processingTasks.concat(undeletedTask));
        } else if (undeletedTask[0].prevState === 1){
            setDoneTasks(doneTasks.concat(undeletedTask));
        }
        setDeletedTasks(deletedTasks.filter((task)=>{
            return task.id !== id;
        }));
    }

    return (
        <>
            <Header addNewTask={addNewTask}/>
            <div className="d-flex justify-content-center flex-row flex-wrap p-5 justify-content-md-between">
                <List tasks={processingTasks} type="0" header="Tasks" makeDone={makeDone} deleteFromProcessing={deleteFromProcessing}/>
                <List tasks={doneTasks} type="1" header="Done Tasks" makeUndone={makeUndone} deleteFromDone={deleteFromDone}/>
                <List tasks={deletedTasks} type="-1" header="Deleted Tasks" undo={undo}/>
            </div>
        </>
    )
};

export default Main;
