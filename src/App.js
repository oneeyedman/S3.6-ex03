import React from 'react';
import OnionHater from './components/OnionHater';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.isHating = false;
    this.handleHate = this.handleHate.bind(this);
  }

  handleHate(event) {
    const userText = event.currentTarget.value;

    if (userText.toLowerCase().includes('cebolla')) {
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <OnionHater 
        hate={this.isHating}
        actionToHate={this.handleHate}
      />
    );
  }
  
}

export default App;
