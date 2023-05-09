// import logo from './logo.svg';
import './App.css';
import './Header';
import Navbar from './components/Navbar';
import Header from './Header';
import TextArea from './components/TextArea';
import Card from './components/Card';


function App() {
  return (
  <>
    <Navbar/>
    <Header/>
    <Card/>
    <TextArea heading="This is a heading"/>
    
  </>
    );
}

export default App;
