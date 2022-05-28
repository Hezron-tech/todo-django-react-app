import React from 'react'
import { Form,Button } from 'react-bootstrap'
const AddTodo = () =>{
    return( 
        <Form>
            <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control type ='text' placeholder='Enter Todo Title'/>

            </Form.Group>

            <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type ='text' placeholder='Enter Description Title'/>

            </Form.Group>

            <Button variant ='primary' type ='submit'>Add Todo</Button>


        </Form>
    )
}
export default AddTodo;