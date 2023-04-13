// Created By Hemant
import 'antd/dist/reset.css';
import { Button } from 'antd';

const UpdateForm = ({updateData, changeTask, updateTask, cancelUpdate }) => {
    return (
        <>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e)=> changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>

            <div className="col-auto">
              <Button 
                className='UpdateBtn'
                title="💁‍♂️ Update Your Task"
                onClick={updateTask}
                // className="btn btn-lg btn-success mr-20"
              >Update</Button>

              <button
                title="💁‍♂️ Cancel Update"
                onClick={cancelUpdate}
                className="UpdateBtn CancelBtn"
              >Cancel</button>

            </div>
          </div>
          <br />
        </>
    )
}

export default UpdateForm;