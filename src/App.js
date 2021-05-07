
import './App.css';
import 'sweetalert/dist/sweetalert.css';
import Home from './Components/Home';
import {Container} from '@material-ui/core'
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Breadcrumb from "./Components/Breadcrumb";


function App() {
  return (
   <>
    <Sidebar />
     <Header />
    <Container >
      <Breadcrumb/>
    <Home />
    </Container>
     
   </>
  );
}

export default App;
