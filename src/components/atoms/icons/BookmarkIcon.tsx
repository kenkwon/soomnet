import { FaRegBookmark } from 'react-icons/fa6';

type OwnProps = {
  count?: number;
  containerStyle?: React.CSSProperties;
};

const BookmarkIcon: React.FC<OwnProps> = ({ count = 0, containerStyle }) => {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{ ...defaultStyle, ...containerStyle }}>
      <FaRegBookmark />
      <span style={{ marginLeft: 5 }}>{count}</span>
    </div>
  );
};

export default BookmarkIcon;
