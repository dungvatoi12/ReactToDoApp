var React = require('react');
var Todo = require('Todo');
var TodoList = React.createClass({

    render: function() {
        var {todos} = this.props;

        var renderTodo = () => {
            if (todos.length ===0) {
                return (
                    <p className="container_massage">
                        Nothing To Do
                    </p>
                )
            };
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            })
        };

        return (
            <div>
                {renderTodo()}
            </div>
        )
    }
});

module.exports = TodoList;