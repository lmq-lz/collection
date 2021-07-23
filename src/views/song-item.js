import React, { Component } from "react";


class SongItem extends Component {
    state = {
        "song": {
            name: "",
            source:  "",
            time: "",
        }
        
    }
    constructor (props) {
        super(props);
        // console.log('list--》item:', props)
        this.state.song = props.song
        

        this.remove = this.remove.bind(this)
    }


    remove (name) {
        // console.log('删除的歌名为：', name)
        // console.log('子组件点击删除')
        // 父组件list中向本组件中传来了props,其中包括songs，key和可操作父组件中的函数remove
        // console.log('子组件中this.props:', this.props)
        // 执行父组件传来的方法
        this.props.remove(this.props.song)
    }

    render () {
        // const song = this.props.song;

        return (
            <li className="song-item">
                <h3>
                    <span>{this.state.song.name}</span>
                    <button onClick={() => this.remove(this.state.song.name)}>取消收藏</button>
                </h3>
                <div>歌曲名称：{this.state.song.name}</div>
                <div>歌曲来源：{this.state.song.source}</div>
                <div>收藏时间：{this.state.song.time}</div>
            </li>
        )
    }
    
}

export default SongItem