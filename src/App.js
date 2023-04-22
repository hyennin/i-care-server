import './App.css';
// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Community from './page/community/Community';
import Tip from './page/tip/Tip';
import Diary from './page/diary/Diary';
import MyPage from './page/MyPage';

function App() {
  // const [mode, setMode] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3001/authcheck")
  //     .then((res) => res.json())
  //     .then((json) => {        
  //       if (json.isLogin === "True") {
  //         setMode("WELCOME");
  //       } else {
  //         setMode("LOGIN");
  //       }
  //     });
  // }, []); 

  // let content = null;  

  // if(mode==="LOGIN"){
  //   content = <Login setMode={setMode}></Login> 
  // } else if (mode === 'SIGNUP') {
  //   content = <SignUp setMode={setMode}></SignUp> 
  // } else if (mode === 'WELCOME') {
  //   content = <>
  //   <h2>메인 페이지에 오신 것을 환영합니다</h2>
  //   <p>로그인에 성공하셨습니다.</p> 
  //   <a href="/logout">로그아웃</a>   
  //   </>
  // }
  
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
