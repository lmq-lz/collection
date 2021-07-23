import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import { Form, Input, Button, Select } from 'antd';

// const { Option } = Select;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const FormItem = Form.Item;

class SongAdd extends Component {


    constructor(props) {
        super(props);
        console.log('SongAdd Constructor')
        // this.state = {
        //     [form]: Form.useForm,
        //     newSong: {
        //         name: "",
        //         source: "",
        //         time: new Date()
        //     }
        // }
        this.state = {
            song: {
                name: "123",
                source: "resource",
                time: ""
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    handleChange(event) {
        console.log('change：', event.target)
        // this.setState({value: event.target.value});
    }

    // handleSubmit(event) {
    //     console.log('提交的数据: ' , this.state.song);
    //     event.preventDefault();
    // }

    handleSubmit=(e)=>{
        // 一点提交就会刷新，阻止submit事件
       e.preventDefault();
       var obj = {}
       obj = this.state.song
       obj.time = new Date()+""
       this.setState({
           song: obj
       })
       console.log(this.state.song);

       this.props.history.push({pathname:'/songList', query:this.state})
    }

    handleName = (e) => {
        var obj = {}
        obj.name = e.target.value
        obj.source = this.state.song.source
        this.setState({
            song: obj
        })
    }

    handleSource= (e) => {
        var obj = {}
        obj.name = this.state.song.name
        obj.source = e.target.value
        this.setState({
            song: obj
        })
    }


    render() {
        return (
            <form className="add-container" onSubmit={this.handleSubmit}>
                <br/>
                <label htmlFor="">
                    歌曲名称:&nbsp;&nbsp;
                    <input type="text" value={this.state.song.name} onChange={this.handleName}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="">
                    歌曲来源:&nbsp;&nbsp;
                    <input type="text" value={this.state.song.source} onChange={this.handleSource}/>
                </label>
                <br/>
                <br/>
                {/* <label htmlFor="">收藏时间</label>
                <input type="text"/>
                <br/> */}
                <div>
                    <input type="submit" value="添加"></input>
                    &nbsp; 
                    <Link to="/songList">
                        <button >取消</button>
                    </Link>
                </div>
            </form>
            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //     歌名:
            //     <input type="text" value={this.state.song.name} onChange={this.handleChange} />
            //     </label>
            //     <br />
            //     <label>
            //     来源:
            //     <input type="text" value={this.state.song.source} onChange={this.handleChange} />
            //     </label>
            //     <input type="submit" value="提交" />
            //     <input type="submit" value="取消" />
            // </form>
        )
    }
}

export default SongAdd;