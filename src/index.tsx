import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/app';

const container = document.getElementById('root');
render(
<BrowserRouter>
    <Routes><Route path='/' element={<App/>} /></Routes>
</BrowserRouter>
, container);
