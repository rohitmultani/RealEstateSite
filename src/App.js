import './App.css';
import { Fragment } from 'react';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import DisplayProperties from './components/DisplayProperties';
function App() {
  return (
   <Fragment>
<NavBar/> 
<Provider store={store}>
<DisplayProperties/>
</Provider>
   </Fragment>
  );
}

export default App;
