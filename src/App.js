
import './App.css';
import { Routes, Route ,Navigate} from 'react-router-dom';
import Login from './views/Login/Login.jsx';
import Layout from './views/layout/Layout.jsx';
import Home from './Home.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
         {/* <Route path='/' element={<Home />}></Route>  */}
         <Route path='/login' element={<Login />}  /> 
         <Route path='/Layout' element={<Layout />}  /> 
        {/* 建立二级路由就是在主路由组件里面再写Route */}
        <Route path='/home' element={<Home />}>
          </Route> 
       
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
