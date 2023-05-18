import { useDispatch } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import { getPostById, editPost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  if (!postData) return <Navigate to='/' />;
  return (
    <>
      <PostForm
        action={handleSubmit}
        actionText='Edit Post'
        id={id}
        title={postData.title}
        author={postData.author}
        publishedDate={postData.publishedDate}
        shortDescription={postData.shortDescription}
        content={postData.content}
      />
    </>
  );
};

export default EditPostForm;