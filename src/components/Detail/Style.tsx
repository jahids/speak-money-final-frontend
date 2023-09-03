// eslint-disable-next-line react-refresh/only-export-components

import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line react-refresh/only-export-components
export default makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));


// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   card: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white
//     backdropFilter: 'blur(5px)', // Apply a blur effect
//     boxShadow: theme.shadows[3],
//     borderRadius: theme.shape.borderRadius,
//     transition: 'box-shadow 0.3s ease-in-out',
//     '&:hover': {
//       boxShadow: theme.shadows[6],
//     },
//   },
//   income: {
//     borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
//   },
//   expense: {
//     borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
//   },
// }));
