import { useParams } from 'react-router-dom';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const CategoryPage = () => {
  const { category } = useParams();
  const filteredPosts = useSelector((state) =>
    getPostsByCategory(state, category)
  );
  if (filteredPosts.length === 0)
    return (
      <>
        <h1>Category Page</h1>
        <span>No posts in this category...</span>
      </>
    );

  return (
    <>
      <h1>Category Page</h1>
      <Row>
        {filteredPosts.map((post) => (
          <Col key={post.id} xs='12' md='6' lg='4' className='p-2'>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <strong>Author: </strong>
                  {post.author}
                </Card.Text>
                <Card.Text>
                  <strong>Published: </strong>
                  {dateToStr(post.publishedDate)}
                </Card.Text>
                <Card.Text>
                  <strong>Category: </strong>
                  {post.category}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button variant='primary' as={NavLink} to={'/post/' + post.id}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoryPage