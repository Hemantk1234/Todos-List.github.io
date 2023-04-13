// Created By Hemant
import 'antd/dist/reset.css';
import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const AddTaskForm = ({newTask, setNewTask, addTask }) => {
    return (
        <>
          {/* Add New Task */}
          <div className="row">
            <div className="col">
              <TextArea
              allowClear
              placeholder='Add New Task...'
              value={newTask}
              onChange={(e)=> setNewTask(e.target.value)} 
              className="form-control form-control" />
            </div>
            <div onClick={addTask}
            className="col-auto">
              <Button
                title="💁‍♂️ Add Title of Task"
                className="AddTask"
              >Add Task</Button>
            </div>
          </div>
          <br />
        </>
    )
}

export default AddTaskForm;