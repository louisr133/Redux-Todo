import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {


        render(){
            console.log(this.props.addValue.value)
            return (

            <div>
                <form action="submit">
                    <input
                    type = "text"
                    placeholder="To do"
                    name= {'value '}
                    value={this.props.addValue.value}
                    onChange = {this.props.adding}

                    />

                    <button type="submit" onClick = {(e) => {this.props.added(e)}}> Add </button>
                </form>


                {
                    this.props.todo.map((i,index) => {
                        return <Todo key = {index} value = {i.value} completed = {i.completed} />
                    })
                }
            </div>
            

            )
        }
}

export default TodoList;