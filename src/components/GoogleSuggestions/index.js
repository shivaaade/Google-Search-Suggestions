// Write your code here

const GoogleSuggestions = props => {
  const {userList, onclickIconSug} = props
  const {id, suggestion} = userList

  const onclickIcon = () => {
    onclickIconSug(suggestion)
  }

  return (
    <div>
      <li>
        <p>{suggestion}</p>
        <img
          onClick={onclickIcon}
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </li>
    </div>
  )
}

export default GoogleSuggestions
