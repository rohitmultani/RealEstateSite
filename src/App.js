import './App.css';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import NavBar from './components/NavBar';
import DisplayProperties from './components/DisplayProperties';
function App() {
  return (
   <Fragment>
<NavBar/> 
<DisplayProperties/>
   </Fragment>
  );
}

export default App;
