import {BrowserRouter,  Route,  Routes} from 'react-router-dom';
import AddUsers from './components/AddUsers';
import ListUsers from './components/ListUsers';
import UpdateUsers from './components/UpdateUsers';
function App() {
  return (
    <div style={{paddingLeft:40}}>
      <header className="App-header">
        <h1>crud redux application</h1>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListUsers />} />
          <Route path='/add-user' element={<AddUsers />} />
          <Route path='/update-user/:id' element={<UpdateUsers />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
