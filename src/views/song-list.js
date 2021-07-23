import React, { Component } from 'react';
import SongItem from './song-item';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SongAdd from './song-add'

// 获取json数据方式一
// import SongsData from '../data/songs-info.json';

// import { Router, Route } from 'react-router-dom'

class SongList extends Component {

    

  constructor (props) {
    super(props);
    console.log('SongList Constructor')


    // 获取json数据方式二
    var SongsInfo = require('../data/songs-info.json');

    
    
    // 初始化收藏列表以及数量
    this.state = {
        list: SongsInfo,
        total: SongsInfo.length,    //收藏数量
        pageNum: 1,     // 分页时，默认为第一页
        pageSize: 10    // 分页时，默认size为10
    };
    var allSong = SongsInfo
    var newSong = this.props.location.query
    // console.log('添加的新歌为：', newSong)
    if(newSong && newSong.song) {
        console.log('新歌为：', newSong)
        this.state.list = [...allSong, newSong.song]
        this.state.total = this.total + 1
    }
    console.log('list为：', this.state.list)
  }

  // 当页码挂载之后请求数据
  componentDidMount() {
    
  }

  //添加新任务，在组件中以props的形式传递给子组件
//   addSong (newitem) {
//     var allSong = this.state.list;
//     allSong.push(newitem);
//     this.setState({
//       list: allSong
//     });
//   }

  remove(song) {
      const data = this.state.list.filter(item =>  item.name !== song.name);
    //   console.log('filter之后的data：', data);
      this.setState({
          list: data,
          total: data.length
      });
      // 设置检测重新渲染之后的list
      setTimeout(() => {
        console.log('set后的list：', this.state.list);
      }, 2000);
      console.log('删除成功');
  }
  
  // 收藏新歌，在组件中以props的形式传递给我i子组件
  addNewSong(newSong) {
    console.log("父组件收藏新歌")
    var allSong = this.state.list;
    // var now = new Date()
    // newSong.time = now
    allSong.push(newSong);
    this.setState({
        list: allSong,
        total: allSong.length
    })
  }


  render () {
    return (
        // <Router>
        //     <Route path="/SongAdd" Component={SongAdd}>添加</Route>
        // </Router>
      <div className="container">
        <h1>
            <span>音乐收藏列表</span>
            <Link to="/songAdd">
                <span>添加收藏界面</span>
            </Link>
            {/* <button onClick={this.addNewSong}>收藏新歌</button> */}
            
        </h1>
        <h5>
            <span>收藏总数：{this.state.total}</span> 
        </h5>
        <input type="text"></input>&nbsp;
        <button>搜索</button>
        {/* 
            注：记得以后要操作列表项时，一定要加key标识，否则会造成错误
        */}
        <ul>
          { this.state.list.map ((song, index) =>
            <SongItem 
              song={song} 
              key={song.name}
              remove={this.remove.bind(this)}
            />
          )}
          </ul>
      </div>
    );
  }
}

export default SongList;

