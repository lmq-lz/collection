import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import SongList from './views/song-list';
import SongAdd from './views/song-add';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {
  return (
    <Router>
      <div>
        <Route path="/songList" component={SongList}></Route>
        <Route path="/songAdd" component={SongAdd}></Route>
      </div>
    </Router>
  );
}

export default App;
