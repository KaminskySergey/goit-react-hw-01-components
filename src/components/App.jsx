import user from './ObjInfo/user.json'
import data from './ObjInfo/data.json'
import friends from './ObjInfo/friends.json'
import transaction from './ObjInfo/transactions.json'

import Box from './box/Box';

import { CardHuman } from "./Card/CardHuman";
import { Statistics } from './Stats/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';


export const App = () => {
  return (
    
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <CardHuman
      avatar={user.avatar}
      name={user.username}
      nameAlt={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory  items={transaction}/>
      </Box>
      
  )
};
