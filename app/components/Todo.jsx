var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

    render: function() {
        var {text, id, completed, createAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createAt;

            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
            } 

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm A')
        };


        return (
            <div className={todoClassName} onClick={() => {
                    this.props.onToggle(id);
                }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div> 
                    <p>{text}</p>
                    <p className="todo_subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});


module.exports = Todo;