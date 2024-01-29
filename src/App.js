//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
function App() {
  return (
    <>
<Navbar title="TEXTER" />
<div className="container my-3">
<TextForm heading="Enter text to ananlyze"/>
</div>

    </>
  );
}

export default App;
