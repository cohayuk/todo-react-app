import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Paper, List, Container}from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props){   //매개변수 props 생성자
    super(props);     // 매개변수 pros 초기화
    this.state ={   // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
      items :[
        {id:"todo0", title:"Todo 1 ", done:true},
        {id:"todo1", title:"Todo 2 ", done:false},
      ],
    };
  }
  // (1) add 함수 추가
  add =(item)=>{
    const thisItems =this.state.items;
    item.id ="ID-"+ thisItems.length;
    item.done =false;
    thisItems.push(item);
    this.setState({items:thisItems});
    console.log("items:",this.state.items);

  }
   // delete 함수 추가
   delete = (item) => {
    const thisItems = this.state.items;
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({ items: newItems }, () => {
      //디버깅 콜백
      console.log("Update Items : ", this.state.items)
    });
  }
  
  render(){
    var todoItems =this.state.items.length >0 &&(
      <Paper style={{margin:16}}>
        <List>
        {this.state.items.map((item,idx)=>(
        <Todo item={item} key={item.id} delete={this.delete}/>
        ))}
        </List>
      </Paper>

    );

    // (2) add 함수 연결
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

  }
}

export default App;