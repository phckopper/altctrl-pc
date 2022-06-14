import PropTypes from 'prop-types';
import './RealChannel.css';

const React = require('react');

class BinaryChannel extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = { keyPress: 'none' };
  }

  handleChangeKey(event) {
    this.setState({ keyPress: event.target.value });
  }

  render() {
    const { name, value } = this.props;
    const { keyPress } = this.state;
    const options = Object.keys(electron.nutjs.Key)
      .filter((v) => Number.isNaN(Number(v)))
      .map((v) => (
        <option value={v} key={v}>
          {v}
        </option>
      ));

    if (value && (keyPress !== 'none')) {
      console.log('pressing key', keyPress);
      electron.nutjs.pressKey(electron.nutjs.Key[keyPress]);
    } else {
      electron.nutjs.releaseKey(electron.nutjs.Key[keyPress]);
    }

    return (
      <div className="channelParent">
        <div className="channelName">{name}</div>
        <div>
          <select value={keyPress} onChange={this.handleChangeKey.bind(this)}>
            <option value="none">None</option>
            {options}
          </select>
        </div>
        <progress className="progressBar" value={value ? 1 : 0} max="1" />
      </div>
    );
  }
}

BinaryChannel.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
};

export default BinaryChannel;
