import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
  }

  render() {
    const { id, title} = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox"
                  onChange={this.props.markComplete.bind(this, id)}
                  /> {' '}
                {this.props.todo.title}
                <button style={btnStyle}
                  onClick={this.props.deleteTodo.bind(this, id)}>
                  x
                </button>
            </p>
        </div>
    );
  }
}
// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
