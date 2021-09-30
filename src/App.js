// import ClassCounter from './components/Class/ClassCounter';
// import FuncCounter from './components/Funtional/FuncCounter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <>
      {/* <ClassCounter /> */}
      {/* <FuncCounter /> */}

      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/about' component={AboutScreen} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
