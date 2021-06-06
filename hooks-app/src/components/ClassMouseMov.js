import React, { Component } from 'react'

class ClassMouseMov extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0,
        }
    }
    logPosition = (e) =>{
        this.setState({x: e.clientX,y: e.clientY})
    }
    componentDidMount(){
        window.addEventListener("mousemove", this.logPosition)
    }
    render() {
        return (
            <div>
                <h2>X: {this.state.x}  Y:{this.state.y}</h2>
            </div>
        )
    }
}

export default ClassMouseMov
