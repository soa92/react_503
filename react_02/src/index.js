import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// jsx > 비동기(동시에 일함)
// props 
// state 

// map > 배열(순회)

// 디자인 포트폴리오 = 클라이언트 중심으로 제작
// 1. 타이포그래피 : 폰트 사이즈(작게 쓰다 키우기), 웨이트 다르게 주되 같으 포맷으로. 문장이 길어졌을 때는 마름모꼴로 보이게
// 2. 공간(위아래) : 일정하게 배치(넓게 쓰다 좁히기)
// 3. 라인 지킬 것
// 4. 라인과 텍스트(콘텐츠) : 붙이지 말 것 