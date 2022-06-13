import PropTypes from 'prop-types';
import './RealChannel.css';

const React = require('react');

class RealChannel extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = { threshold: { min: 0, max: 0 } };
  }

  render() {
    const { name, min, max, value, unit } = this.props;
    const { threshold } = this.state;

    const offset = (max - min) / 2;
    return (
      <div className="channelParent">
        <div className="channelName">{name}</div>
        <div>
          <input
            type="range"
            min={min}
            max={0}
            className="channelThreshold"
            // value={threshold.max}
            defaultValue={min / 2}
          />
          <input
            type="range"
            min={0}
            max={max}
            className="channelThreshold"
            // value={threshold.max}
            defaultValue={max / 2}
            style={{ direction: 'rtl' }}
          />
        </div>
        <progress
          className="progressBar"
          value={value + offset}
          max={max - min}
        />
        <div className="channelValue">
          {value.toFixed(4)} {unit}
        </div>
      </div>
    );
  }
}

RealChannel.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default RealChannel;
