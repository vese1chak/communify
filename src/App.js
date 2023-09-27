import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <Header />
                <NavBar state={props.state.dialogsPage} />
                <div className='app-wrapper__content'>
                    <Routes>
                        <Route path='/dialogs/*' 
                            element={<Dialogs 
                                state={props.state.dialogsPage}
                                newMessageText={props.state.dialogsPage.newMessageText}
                                dispatch={props.dispatch} />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='*' 
                            element={<Profile 
                                state={props.state.profilePage}
                                dispatch={props.dispatch} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
