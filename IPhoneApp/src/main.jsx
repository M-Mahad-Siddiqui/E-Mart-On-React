import 'font-awesome/css/font-awesome.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import './index.css';
import store from './redux/store';
        // import reportWebVitals from './reportWebVitals';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </StrictMode>
)

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
