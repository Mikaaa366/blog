import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author ||'');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate ||'');
    const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
    const [content, setContent] = useState(props.content ||'');


    const handleSubmit = (e) => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
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
    );

};

export default PostForm;