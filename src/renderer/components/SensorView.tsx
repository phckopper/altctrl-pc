import PropTypes from 'prop-types';
import RealChannel from './RealChannel';
import './SensorView.css';

const SensorView = (props: any) => {
  const { name, data } = props;

  const channels = Object.keys(data).map((key) =>
    data[key].type === 'real' ? (
      <RealChannel
        name={key}
        min={data[key].min}
        max={data[key].max}
        unit={data[key].unit}
        value={data[key].value}
        key={key}
      />
    ) : (
      <div>Unsupported binary sensor</div>
    )
  );
  return (
    <div className="sensorParent">
      <div className="sensorTitle">{name}</div>
      <div className="sensorChannels"> {channels} </div>
    </div>
  );
};

SensorView.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
};

export default SensorView;
