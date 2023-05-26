import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { allCategories } from '../../../redux/categoriesRedux';



const PostForm = ({action, actionText, ...props}) => {
    const categories = useSelector(allCategories);
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author ||'');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate ||'');
    const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
    const [content, setContent] = useState(props.content ||'');

    const [category, setCategory] = useState(props.category ||'' );

    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);



    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = (e) => {
      setContentError(!content)
      setDateError(!publishedDate)
      if(content && publishedDate) {
        action({ title, author, publishedDate, shortDescription, content, category });
      }
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Title</Form.Label>
          <Form.Control  {...register("title", { required: true, minLength: 3 })} type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Author</Form.Label>
          <Form.Control {...register("author", { required: true, minLength: 3 })} type='text'  placeholder='Enter Author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
          {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
        </Form.Group>

        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Published</Form.Label>
          <Form.Text className='text-muted'></Form.Text>
          <DatePicker
            value={publishedDate}
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select className='mb-3 w-50' onChange={e => setCategory(e.target.value) }>
            <option>Select category</option>
            {categories.map((category, index)=> (<option key={index} value={category}>{category}</option>))}
          </Form.Select>
        </Form.Group>
        <Form.Group className={'mb-3 w-50'}>
          <Form.Label>Short description</Form.Label>
          <Form.Control {...register("shortDescription", { required: true, minLength: 20 })} as='textarea' rows={3} placeholder='Leave a comment here' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}/>
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">short description is too short (min is 20)</small>}
        </Form.Group>
        <Form.Group className={'mb-3 w-50'}>
          <Form.Label>Main Content</Form.Label>
          <ReactQuill theme='snow' value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
    
        <Button variant='primary' type='submit'>Add Post </Button>
        </Form>
    );

};

export default PostForm;