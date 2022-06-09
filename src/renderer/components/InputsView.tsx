import './InputsView.css';
import SensorView from './SensorView';

const React = require('react');
const Altctrl = require('altctrl');

class InputsView extends React.Component {
  constructor(props) {
    super(props);

    const socket = new WebSocket('ws://192.168.2.11:34567');
    socket.addEventListener('message', this.handleData.bind(this));

    this.state = { data: {} };
  }

  handleData(event: any) {
    const data = JSON.parse(event.data);
    console.log(data);
    this.setState((prevState) => ({
      data: data,
    }));
  }

  render() {
    const { data } = this.state;
    const receivedInputs = Object.keys(data).map((key) => (
      <SensorView name={key} data={data[key]} key={key} />
    ));

    return <div>{receivedInputs}</div>;
  }
}

export default InputsView;
