import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import useStyles from './styles';

interface CustomizedSnackbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomizedSnackbar: React.FC<CustomizedSnackbarProps> = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
