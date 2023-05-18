import { getPostById, removePost } from '../../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row, Modal  } from 'react-bootstrap';
import { useState } from 'react';


const Post = () => {

  const {id} = useParams ();
  const postData = useSelector(state=> getPostById (state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const postDelete = (id) => {
    dispatch(removePost(id));
  }
  
  
  
  if (!postData) return <Navigate to='/'/>;

    return (
      <>
      <Container>
      <Row>
        <Col>
          <Card border='light'>
            <Card.Body>
              <Card.Title>{postData.title}</Card.Title>
              <Card.Text>
                <strong> Author: </strong>
                {postData.author} <br/>
                <strong>Published: </strong>
                {postData.publishedDate} <br />
              </Card.Text>
              <Card.Text>{postData.shortDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Button variant='outline-info' as={NavLink} to={'/post/edit/' + id}>
          Edit
          </Button>
          <Button variant='outline-danger'  onClick={handleShow}>Delete</Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        This operation will completely remove this post from the app. <br />{' '}
        Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Cancel</Button>
          <Button variant='danger' onClick={()=> {handleClose(); postDelete(postData.id);}}>Remove</Button>
        </Modal.Footer>
      </Modal>
      </Container>
      </>

    );
  };

  export default Post;