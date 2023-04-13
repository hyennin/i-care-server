import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Community from './page/Community';
import CommunityPost from './page/CommunityPost';
import CommunityPosting from './page/CommunityPosting';
import Tip from './page/Tip';
import TipPost from './page/TipPost';
import TipPosting from './page/TipPosting';
import Diary from './page/Diary';
import DiaryPost from './page/DiaryPost';
import DiaryPosting from './page/DiaryPosting';
import MyPage from './page/MyPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/community' exact component={Community} />
        <Route path='/post' component={CommunityPost} />
        <Route path='/posting' component={CommunityPosting} />
        <Route path='/tip' component={Tip} />
        <Route path='/tip/post' component={TipPost} />
        <Route path='/tip/posting' component={TipPosting} />
        <Route path='/diary' component={Diary} />
        <Route path='/diary/post' component={DiaryPost} />
        <Route path='/diary/posting' component={DiaryPosting} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/mypage' component={MyPage}/>
        <Route path="*" element={<h1>404 페이지</h1>}/>
      </Switch>
  </Router>
  );
}

export default App;
