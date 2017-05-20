import React from 'react'
import {request} from '../net'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
    }

  render() {
    let {id} = this.props;
    return(
      <div className='button-box'>
        <a className={"button button" + id} href="#">{"Button" + id}</a>
          </div>
    );
  }
}
