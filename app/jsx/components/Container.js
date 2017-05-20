import React from 'react'
import {request} from '../net'
import Buttons from './Buttons'

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
    }

    render() {
        return(
                <div className='container'>
                  <h2>Push UI Test</h2>
                  <Buttons />
                </div>
        );
    }
}
