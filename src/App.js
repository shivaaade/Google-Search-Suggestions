import {Component} from 'react'

import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component {
  state = {userInput: '', newList: suggestionsList}

  onChangeInput = event => {
    const inputDown = event.target.value
    this.setState({userInput: inputDown.toLowerCase()})
  }

  onclickIconSug = suggestion => {
    this.setState({userInput: suggestion})
  }

  render() {
    const {userInput, newList} = this.state
    const searchList = newList.filter(each =>
      each.suggestion.toLowerCase().includes(userInput),
    )
    return (
      <div>
        <img
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <ul>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            placeholder="Search Google"
            value={userInput}
            onChange={this.onChangeInput}
            type="search"
            alt="google logo"
          />
          {searchList.map(each => (
            <GoogleSuggestions
              onclickIconSug={this.onclickIconSug}
              userList={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
