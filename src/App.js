import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Community from './page/community/Community';
import Tip from './page/tip/Tip';
import Diary from './page/diary/Diary';
import MyPage from './page/MyPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Community} />
        <Route path='/community' component={Community} />
        <Route path='/tip' component={Tip} />
        <Route path='/diary' component={Diary} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/mypage' component={MyPage}/>
        <Route path="*" element={<h1>404 페이지</h1>}/>
      </Switch>
  </Router>
  );
}

export default App;
