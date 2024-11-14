import { FaRegCommentDots } from 'react-icons/fa';

type OwnProps = {
  count?: number;
  containerStyle?: React.CSSProperties;
};

const CommentIcon: React.FC<OwnProps> = ({ count = 0, containerStyle }) => {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{ ...defaultStyle, ...containerStyle }}>
      <FaRegCommentDots />
      <span style={{ marginLeft: 5 }}>{count}</span>
    </div>
  );
};

export default CommentIcon;
