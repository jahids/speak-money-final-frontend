/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List: React.FC = () => {
  const classes = useStyles();
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  console.log("tr", transactions);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const dm  = [
  //   {
  //     amount: 100,
  //     category: "Savings",
  //     type: "Income",
  //     date: "2022-1-4",
  //     id: "037a35a3-40ec-4212-abe0-cc485a98aeee",
  //   },
  //   {
  //     amount: 123,
  //     category: "Car",
  //     type: "Expense",
  //     date: "2020-11-16",
  //     id: "0f72e66e-e144-4a72-bbc1-c3c92018635e",
  //   },
  //   {
  //     amount: 500,
  //     category: "Travel",
  //     type: "Expense",
  //     date: "2020-11-13",
  //     id: "365a4ebd-9892-4471-ad55-36077e4121a9",
  //   },
  //   {
  //     amount: 50,
  //     category: "Investments",
  //     type: "Income",
  //     date: "2020-11-23",
  //     id: "80cf7e33-fc3e-4f9f-a2aa-ecf140711460",
  //   },
  // ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions?.map((transaction: { id: any; category: any,  amount: any; date:any, type:any }) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction?.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction?.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction?.category} secondary={`$${transaction?.amount} - ${transaction?.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction?._id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
    
  );
};

export default List;
