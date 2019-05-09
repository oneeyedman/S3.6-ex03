import React, {Component} from "react";
import './OnionHater.css';

class OnionHater extends Component {
  render() {
    const {hate, actionToHate} = this.props;
    return (
      <div className={`app ${hate === true ? 'app--red':''}`}>
        <textarea 
          name="" 
          id="" 
          className="app__field"
          placeholder="Escribe algo..."
          onChange={actionToHate}
        ></textarea>
      </div>
    );
  }
}

export default OnionHater;