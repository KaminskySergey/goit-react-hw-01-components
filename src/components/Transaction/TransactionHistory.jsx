import { Table, TableName, TableInfo, TableIContainerInfo } from './Transaction.styled';

import PropTypes from 'prop-types';


export function TransactionHistory({items}){
    return (
        <Table>
    <thead>
      <TableIContainerInfo>
        <TableName>Type</TableName>
        <TableName>Amount</TableName>
        <TableName>Currency</TableName>
      </TableIContainerInfo>
    </thead>
  
    <tbody>
      {items.map(item => (
      <TableIContainerInfo key={item.id}>
        <TableInfo>{item.type}</TableInfo>
        <TableInfo>{item.amount}</TableInfo>
        <TableInfo>{item.currency}</TableInfo>
      </TableIContainerInfo>
      ))}
    </tbody>
  </Table>
    )
}


TransactionHistory.propTypes = {
item: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
})
)
}

