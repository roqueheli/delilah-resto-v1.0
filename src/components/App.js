import { Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigator from './Header/Navigator';
import Main from './Main/Main';
import '../styles/App.css';

function App() {
  return (
    <>
      <Header />
      <Navigator />
      <Routes>
          <Route exact path='/' element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
