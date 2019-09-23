import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Component} from 'react'

class LikeButton extends Component{
    constructor(){
        super();
        this.state = {
            isLiked:false
        }
    }

    handleClickOnLikeButton(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }

    render(){
        return (
            <button onClick = {this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked?'取消':'点赞'}👍
            </button>
        )
    }
}

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

class Index extends Component {
    render () {
      return (
        <div>
          <Header />
          <Main />
          <Footer />
          <LikeButton/>
        </div>
      )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


