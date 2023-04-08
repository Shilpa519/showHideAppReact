import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  first = () => {
    const {firstName} = this.state
    console.log(firstName)
    if (firstName) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  last = () => {
    const {lastName} = this.state
    console.log(lastName)
    if (lastName) {
      this.setState({lastName: false})
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    let firstname
    let textf
    let textl
    let lastname
    if (firstName) {
      firstname = 'sfname'
      textf = 'Joe'
    } else {
      firstname = 'hfname'
      textf = ''
    }

    if (lastName) {
      lastname = 'slname'
      textl = 'Jonas'
    } else {
      lastname = 'hlname'
      textl = ''
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="button-container">
            <button className="button" type="button" onClick={this.first}>
              Show/Hide Firstname
            </button>
            {firstName && <p className={firstname}>{textf}</p>}
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.last}>
              Show/Hide Lastname
            </button>
            {lastName && <p className={lastname}>{textl}</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
