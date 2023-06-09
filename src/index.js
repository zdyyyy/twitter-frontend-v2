import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from '@containers/Login';
import App from '@containers/App';
import Register from '@containers/Register';
import Tweets from '@containers/Tweets';
import Comments from '@containers/Comments';
import './index.scss';
import { CxtProvider } from '@utils/context';
import CreateTweet from '@containers/CreateTweet';
import Tweet from '@containers/Tweet';
import My from '@containers/My';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<App />}>
            <Route index element={<Tweets />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="comments/:id" element={<Comments />} />
            {/* <Route path="comments" element={<Comments />} /> */}
            <Route path="createTweet" element={<CreateTweet />} />
            <Route path="message" element={<Comments />} />
            <Route path="notification" element={<Comments />} />
            <Route path="search" element={<Comments />} />
            <Route path="my" element={<My />} />
            <Route path="tweet/:id" element={<Tweet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

