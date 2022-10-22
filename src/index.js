import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="signup" element={<SignUp />}>
//           <Route index element={<Login />} />
//           <Route path="main" element={<Main />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
