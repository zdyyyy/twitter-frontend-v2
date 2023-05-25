import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import Bottom from '@components/Bottom';

const App = () => (
    <>
        <Header />
        <Outlet />
        <Bottom />
    </>
)

export default App; 