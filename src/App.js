
import './App.css';
import Main from './components/Main'
import SignUp from './components/SignUp'
// import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter >
      
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/SignUp" element={<SignUp />} />
      
      </Routes>
      
      
     </BrowserRouter>
       */}
       <Main/>
       <SignUp/>
     
    </div>
  );
}

export default App;
