import { Component } from "react"

class Navi extends Component {
  constructor(props){
    const { collapsed = false } = props
    this.state = {
      collapsed
    }
    super(props)
  }

  expand: () => {
    this.setState({ collapsed: false })
  }

  collapse: () => {
    this.setState({ collapsed: true })
  }

  render () {
    const { collapsed } = this.state;
    return <div id="navi" class={collapsed ? 'collapsed' : 'expanded'}>Navi</div>
  }
}

export default Navi