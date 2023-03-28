import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, CloseButton  } from 'react-bootstrap'
import '../../App.css'
import './PopUp.css'
const url = process.env.REACT_APP_API_BASE_URL

export default function PopUp(props) {
    
    const [formData, setFormData] = useState({...props.initial})

    const handleChange = ({ target }) => {
      setFormData({ ...formData, [target.name]: target.value })
    }

    const handleSubmit = (event) => {
        console.log('props:', props)
      props.setModalShow(false)
      axios.post(`${url}${props.path}`, { "data": [formData] }, {headers:{"Content-Type" : "application/json; charset=utf-8" }})
          .then((response) => console.log('Data send'))
          .catch((error) => console.log(error.response.data))
      setTimeout(function() { window.location.reload() },10)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-gray">
          <Modal.Title id="contained-modal-title-vcenter" className="text">
            Add Tasks
          </Modal.Title>
          <CloseButton onClick={() => props.setmodalshow(false)}/>
        </Modal.Header>
        <Modal.Body className="styled-background">
          <form className='text-center text'>
            <label htmlFor='task_description'>
                Task
                <input type='text' id='task_description' name='task_description' className='m-2' onChange={handleChange} />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer className="d-flex bg-gray">
          <Button type='button' onClick={handleSubmit} className="btn-secondary metalfont col btn p-0"><span>submit</span></Button>
        </Modal.Footer>
      </Modal>
    );
}