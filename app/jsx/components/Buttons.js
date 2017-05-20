import React from 'react'
import {request} from '../net'
import Button from './Button'

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
    }

  render() {
    let buttonNodes = [...Array(16).keys()].map((i) => {return <Button id={i} key={i}/>});
    return(
      <div id='buttons'>
        {buttonNodes}
      </div>
    );
  }
}
