import React, { Component } from 'react'

class ListContacts extends Component {
  render () {
    return (
      <ol className='contact-list'>
        {
          // javascript
          this.props.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}
            </li>
          ))
        }
      </ol>
      )
    }
  }
  
  export default ListContacts