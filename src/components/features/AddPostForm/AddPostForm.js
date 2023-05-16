import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from 'react-bootstrap';
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from 'react-router-dom';

const AddPostForm = props => { 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
 const dispatch = useDispatch();


 const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Lorem ipsum' value={title} onChange={(e) => setTitle(e.target.value)} />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Author</Form.Label>
          <Form.Control type='text'  placeholder='Enter Author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Published</Form.Label>
          <Form.Control type='date' placeholder='Enter Date' value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)}/>
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className={'mb-3 w-50'}>
          <Form.Label>Short description</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Leave a comment here' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className={'mb-3 w-50'}>
          <Form.Label>Main Content</Form.Label>
          <Form.Control as='textarea' rows={10} placeholder='Leave a comment here' value={content} onChange={(e) => setContent(e.target.value)}/>
        </Form.Group>
    
        <Button variant='primary' type='submit'>Add Post </Button>
    </Form>
  )



}
export default  AddPostForm;