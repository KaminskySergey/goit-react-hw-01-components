import { 
  Profile, 
  Avatar, 
  FirstName, 
  Tag, 
  Location,
  ListStats,
  ItemStats,
  LabelItem,
  Quantity,
} 
from './CardHuman.styled';
import PropTypes from 'prop-types';
import Box from 'components/box/Box';



export function CardHuman({avatar, name, nameAlt, tag, location, followers, views, likes}){
return(
    
    <Profile>
    <Box  display="flex" flexDirection="column" alignItems="center" mb={20}>
      <Avatar src={avatar} alt={nameAlt}/>
      <FirstName>{name}</FirstName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Box>
  
    <ListStats>
      <ItemStats>
        <LabelItem>Followers</LabelItem>
        <Quantity>{followers}</Quantity>
      </ItemStats>
      <ItemStats>
        <LabelItem>Views</LabelItem>
        <Quantity>{views}</Quantity>
      </ItemStats>
      <ItemStats>
        <LabelItem>Likes</LabelItem>
        <Quantity>{likes}</Quantity>
      </ItemStats>
    </ListStats>
  </Profile>
  
  )
}

CardHuman.propTypes = {
    avatar: PropTypes.string.isRequired,
    nameAlt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    
}