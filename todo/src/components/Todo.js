import React from 'react'

class Todo extends React.Component {


        render(){
            return (

           <div>
            <h1>{this.props.value}</h1>
            <button> Status:  {JSON.stringify(this.props.completed)} </button> 
           </div>

            )
        }
}

export default Todo;