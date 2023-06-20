<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>  
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <style>
    hr {
      border: none;
      border-top: 1px solid black;
    }
    input {
      width: 150px;
      border: 1px solid  black;
    }
    input.checkbox {
      border: 1px solid  black;
    }
    textarea {
      width: 150px;
      height: 150px;
      border: 1px solid black;
    }
    table {
      border: 1px solid  black;
    }
    th {
      background-color: grey;
      border: 0px solid  black;
    }
    td {
      border: 1px solid  black;
      vertical-align: top;
    }
    button {
      font-weight: bold;
      width: 107px;
      border: 2px solid black;
    }
  </style>
   <script type="text/babel">
function Registration() {
  const [formData, setFormData] = React.useState({
    name: ' ', 
    email: ' ', 
    message: ' '
  })
  const [showInfo, setShowInfo] = React.useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleClick = () => {
    setShowInfo(true)
  }

  function handleCancel(event) {
      setFormData(initialFormData)
    }

  return (
    <div>
      <form>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Form </th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td><label htmlFor="name">Name: </label> </td>
           <td><input type="text" id="name" name="name" onChange={handleChange} />
            </td>
          </tr>
          <tr>
           <td><label htmlFor="email">Email: </label> </td>
           <td><input type="text" id="email" name="email" onChange={handleChange} />
            </td>
          </tr>
          <tr>
           <td><label htmlFor="message">Message: </label> </td>
           <td><textarea type="textarea" id="message" name="message" onChange={handleChange} /> 
            </td>
          </tr>
          <tr>
           <td colSpan="2">
            <button type="button" onClick={handleClick}>Submit</button>{' '}
            <button type="cancel" onCancel={handleCancel}>Cancel</button>
            <hr />
            </td>
          </tr>
          <tr>
          <th colSpan="2">
            Display
          </th>
          </tr>
          <tr>
        <td colSpan="2">
          {showInfo && (
        <div>
          <p>{formData.name}<br />
          {formData.email}<br />
          {formData.message}</p>
        </div>
      )}
        </td>
      </tr>
        </tbody>
      </table>
    </form>
    </div>
  );
}
  ReactDOM.render(<Registration />, document.getElementById('root'))
  </script>
  </body>