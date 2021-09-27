import ReactDOM from 'react-dom';
import App from './App/App'
import './index.module.css';
import {RecoilRoot} from 'recoil'


ReactDOM.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
  document.getElementById('root')
);