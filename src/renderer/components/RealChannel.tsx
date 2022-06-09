import PropTypes from 'prop-types';
import './RealChannel.css';

const RealChannel = (props: any) => {
  const { name, min, max, value, unit } = props;
  const offset = (max - min) / 2;
  return (
    <div className="channelParent">
      <div className="channelName">{name}</div>
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
};

RealChannel.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default RealChannel;
