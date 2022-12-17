import { FriendItem , IsOnline, FriendImg, FriendName}  from './FriendList.styled'
import PropTypes from 'prop-types';
import Box from 'components/box/Box';




export function FriendList({friends}){

    return (
        <Box as="ul" m={32} display="flex" justifyContent="center" flexDirection="column">
            {friends.map(friend => (
                <FriendItem key={friend.id}>
                <IsOnline friends={friend.isOnline}>{friend.isOnline}</IsOnline>
                <FriendImg src={friend.avatar} alt={friend.name} width="48" />
                <FriendName>{friend.name}</FriendName>
              </FriendItem>
            ))}
        </Box>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}