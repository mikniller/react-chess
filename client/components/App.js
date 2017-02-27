import React from 'react';
import NavigationBar from '../components/NavigationBar';


class App extends React.Component {
  render() {
    return (
      <div id="container">
          <NavigationBar/>
          {this.props.children}  
      </div>

    );
  }
}

export default App;
