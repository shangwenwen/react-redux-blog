import React, { Component } from 'react'
import { connect } from 'react-redux'

class BlogContainer extends Component {
  constructor() {
    super(...arguments)
  }

  // 匹配URL
  // componentWillMount(){
  //   console.log(this.props.match.params.tag)
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.match.params.tag !== this.props.match.params.tag) {
  //     console.log(nextProps.match.params.tag)
  //   }
  // }

  render() {
    return(
      <div>
        {this.props.match.params.tag}
      </div>
    )
  }
}

// connect redux
export default connect(null, null)(BlogContainer)
