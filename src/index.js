import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Component} from 'react'



class Tittle extends Component{
    //事件监听
    handleClickOnTittle(word){
        console.log(this,word);
    }
    render(){
        return (
            <h1 onClick = {this.handleClickOnTittle.bind(this,'Hello')}>React Knight</h1>
        )
    }
}

class Header extends Component{
    render(){
        return (
            <div>
                <Tittle/>
                <h2>
                    This is Header.
                </h2>
            </div>
        )  
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main content</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
      return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}
//20190923
class LikeButton extends Component{
    static defaultProps = {
        likedText:'取消',
        unLikedText:'点赞'
    }
    constructor(){
        super();
        this.state = {
            isLiked:false
        }
    }

    handleClickOnLikeButton(){
        //props传进来的值都是只读的,不可改变,所以点击时会报错
        //this.props.likedText = '取消'
        this.setState({
            isLiked:!this.state.isLiked
        })
        if(this.props.onClick){
            this.props.onClick()
        }
    }

    render(){
        // const wordings = this.props.wordings ||{
        //     likedText : '取消',
        //     unLikedText:'点赞'
        // }
        //const likedText = this.props.likedText || '取消';
        //const unLikedText = this.props.unLikedText || '点赞';
        return (
            <button onClick = {this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked?this.props.likedText:this.props.unLikedText}👍
            </button>
        )
    }
}

class Index extends Component {
    render () {
      return (
        <div>
          <Header />
          <Main />
          <Footer />
          <LikeButton wordings = {{likedText : '已赞' ,unLikedText : '赞'}}
                    onClick ={() => {
                        console.log('Clike on the likeButton!');
                    }}   />
        </div>
      )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


