import { useSelector } from 'react-redux';
import { allCategories } from '../../../redux/categoriesRedux';
import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const categories = useSelector(allCategories);
  return (
    <>
      <h1>All Categories</h1>
      {categories.map((category) => (
        <Col className='d-flex justify-content-center' key={category}>
          <Card className='w-25 mt-2'>
            <Card.Body
              as={NavLink}
              to={'/category/' + category}
              className='d-flex justify-content-center'
            >
              <span>{category}</span>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Category;