import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContainerForm from './containers/ContainerForm';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/form/:id" element={<ContainerForm />}/>
            <Route path="/settings" element={<Home />}/>
            <Route path="/historical" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App