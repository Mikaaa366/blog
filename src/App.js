import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Post from "./components/pages/Post/Post";
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import { Container } from 'react-bootstrap'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Category from './components/pages/Category/Category';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';

const App = () => {
  return (
    <main>
      <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      </Container>
  </main>
  );
};

export default App;