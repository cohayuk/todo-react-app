import React from 'react';
import Todo from './Todo';
import {Paper, List}from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props){   //매개변수 props 생성자
    super(props);     // 매개변수 pros 초기화
    this.state ={   // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
      items :[
        {id:0, title:"Todo 1 ", done:true},
        {id:1, title:"Todo 2 ", done:false},
      ],
    };
  }
  
  render(){
    var todoItems =this.state.items.length >0 &&(
      <Paper style={{margin:16}}>
        <List>
        {this.state.items.map((item,idx)=>(
        <Todo item={item} key={item.id}/>
        ))}
        </List>
      </Paper>

    );

    return <div className="App">{todoItems}</div>;
  }
}

export default App;