import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form>
                <input type="text" className="form-control rounded-0" placeholder="write Todo"/>
                <button className="form-control rounded-0 btn-secondary" type="submit">Add Todo</button>
            </form>
        )
    }
}
