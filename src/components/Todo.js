import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const {title} = this.props.todo
        return (
            <h3 className="text-dark text-center p-1 bg-light border-bottom">
                <i className="fa-times-circle fa-sm m-1 float-left text-danger"></i>{title}
                <input type="checkbox" className="m-2 float-right"/>
            </h3>
        )
    }
}

