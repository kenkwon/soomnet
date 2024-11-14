import { PiHandsPrayingDuotone } from 'react-icons/pi';

type OwnProps = {
  count?: number;
  containerStyle?: React.CSSProperties;
};

const PrayerIcon: React.FC<OwnProps> = ({ count = 0, containerStyle }) => {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{ ...defaultStyle, ...containerStyle }}>
      <PiHandsPrayingDuotone />
      <span style={{ marginLeft: 5 }}>{count}</span>
    </div>
  );
};

export default PrayerIcon;
