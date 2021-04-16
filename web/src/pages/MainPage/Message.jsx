import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Avatar5 from 'asset/avatar-female-5.jpg';

const Message = ({ isMine, message, time }) => {
  return (
    <Box className={clsx('message', isMine && 'me')}>
      {!isMine && (
        <img
          className="avatar-md"
          src={Avatar5}
          data-toggle="tooltip"
          data-placement="top"
          alt="avatar"
        />
      )}
      <Box className="text-main">
        <Box className={clsx('text-group', isMine && 'me')}>
          <Box className={clsx('text', isMine && 'me')}>
            <p>{message}</p>
          </Box>
        </Box>
        <span>{time}</span>
      </Box>
    </Box>
  );
};
export default Message;
