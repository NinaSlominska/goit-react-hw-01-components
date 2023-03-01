import FriendListItem from './FriendListItem';
import css from 'components/Friends/Friends.module.css';
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
