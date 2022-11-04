import './App.css';
import AuthorContainer from './components/author/AuthorContainer';
import Footer from './components/navigations/Footer';
import HeaderNav from './components/navigations/HeaderNav';

function App() {
  return (
    <div className="bg-gray-200">
      <HeaderNav />
      <AuthorContainer />
      <Footer />
    </div>
  );
}

export default App;
