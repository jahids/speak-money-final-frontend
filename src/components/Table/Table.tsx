 /* eslint-disable */
// // import * as React from "react";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import Paper from "@mui/material/Paper";
// // import "./Table.css";

// // function createData(name, trackingId, date, status) {
// //   return { name, trackingId, date, status };
// // }


// // const rows = [
// //   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
// //   createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
// //   createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
// //   createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
// // ];


// // const makeStyle=(status)=>{
// //   if(status === 'Approved')
// //   {
// //     return {
// //       background: 'rgb(145 254 159 / 47%)',
// //       color: 'green',
// //     }
// //   }
// //   else if(status === 'Pending')
// //   {
// //     return{
// //       background: '#ffadad8f',
// //       color: 'red',
// //     }
// //   }
// //   else{
// //     return{
// //       background: '#59bfff',
// //       color: 'white',
// //     }
// //   }
// // }

// // export default function BasicTable() {
// //   return (
// //       <div className="Table">
// //       <h3>Recent Orders</h3>
// //         <TableContainer
// //           component={Paper}
// //           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
// //         >
// //           <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>Product</TableCell>
// //                 <TableCell align="left">Tracking ID</TableCell>
// //                 <TableCell align="left">Date</TableCell>
// //                 <TableCell align="left">Status</TableCell>
// //                 <TableCell align="left"></TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody style={{ color: "white" }}>
// //               {rows.map((row) => (
// //                 <TableRow
// //                   key={row.name}
// //                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// //                 >
// //                   <TableCell component="th" scope="row">
// //                     {row.name}
// //                   </TableCell>
// //                   <TableCell align="left">{row.trackingId}</TableCell>
// //                   <TableCell align="left">{row.date}</TableCell>
// //                   <TableCell align="left">
// //                     <span className="status" style={makeStyle(row.status)}>{row.status}</span>
// //                   </TableCell>
// //                   <TableCell align="left" className="Details">Details</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </div>
// //   );
// // }
// // import React, { useState } from "react";
// // import TextField from "@material-ui/core/TextField";
// // import SearchIcon from "@material-ui/icons/Search";
// // import Paper from "@material-ui/core/Paper";
// // import Table from "@material-ui/core/Table";
// // import TableBody from "@material-ui/core/TableBody";
// // import TableCell from "@material-ui/core/TableCell";
// // import TableContainer from "@material-ui/core/TableContainer";
// // import TableHead from "@material-ui/core/TableHead";
// // import TableRow from "@material-ui/core/TableRow";
// // import TablePagination from "@material-ui/core/TablePagination";
// // import "./Table.css";
// // import { InputAdornment } from "@material-ui/core";

// // interface Row {
// //   name: string;
// //   trackingId: number;
// //   date: string;
// //   status: string;
// // }

// // function createData(name: string, trackingId: number, date: string, status: string): Row {
// //   return { name, trackingId, date, status };
// // }

// // const initialRows: Row[] = [
// //   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
// //   createData("Big Baza Bang ", 18908425, "2 March 2022", "Pending"),
// //   createData("Mouth Freshner", 18908426, "2 March 2022", "Approved"),
// //   createData("Cupcake", 18908427, "2 March 2022", "Delivered"),
// //   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
// //   createData("Big Baza Bang ", 18908425, "2 March 2022", "Pending"),
// //   createData("Mouth Freshner", 18908426, "2 March 2022", "Approved"),
// //   createData("Cupcake", 18908427, "2 March 2022", "Delivered"),
// //   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
// //   createData("Big Baza Bang ", 18908425, "2 March 2022", "Pending"),
// //   createData("Mouth Freshner", 18908426, "2 March 2022", "Approved"),
// //   createData("Cupcake", 18908427, "2 March 2022", "Delivered"),
// // ];

// // const makeStyle = (status: string) => {
// //   if (status === "Approved") {
// //     return {
// //       background: "rgb(145 254 159 / 47%)",
// //       color: "green",
// //     };
// //   } else if (status === "Pending") {
// //     return {
// //       background: "#ffadad8f",
// //       color: "red",
// //     };
// //   } else {
// //     return {
// //       background: "#59bfff",
// //       color: "white",
// //     };
// //   }
// // };

// // export default function AdvancedTable() {
// //   const [searchText, setSearchText] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("All");
// //   const [page, setPage] = useState(0);
// //   const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

// //   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
// //     setPage(newPage);
// //   };

// //   const filteredRows = initialRows.filter((row) => {
// //     const lowerSearchText = searchText.toLowerCase();
// //     return (
// //       row.name.toLowerCase().includes(lowerSearchText) &&
// //       (statusFilter === "All" || row.status === statusFilter)
// //     );
// //   });

// //   return (
// //     <div className="Table">
// //       <h3>Recent Orders</h3>
// //       <TextField
// //         label="Search"
// //         variant="outlined"
// //         size="small"
// //         value={searchText}
// //         onChange={(e) => setSearchText(e.target.value)}
// //         // InputProps={{
// //         //   startAdornment: (
// //         //     <InputAdornment position="start">
// //         //       <SearchIcon />
// //         //     </InputAdornment>
// //         //   ),
// //         // }}
// //         style={{ marginBottom: 16 }}
// //       />
// //       <TableContainer component={Paper} style={{ maxHeight: 400 }}>
// //         <Table stickyHeader>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Product</TableCell>
// //               <TableCell align="left">Tracking ID</TableCell>
// //               <TableCell align="left">Date</TableCell>
// //               <TableCell align="left">Status</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
// //               <TableRow key={row.name}>
// //                 <TableCell>{row.name}</TableCell>
// //                 <TableCell align="left">{row.trackingId}</TableCell>
// //                 <TableCell align="left">{row.date}</TableCell>
// //                 <TableCell align="left">
// //                   <span className="status" style={makeStyle(row.status)}>
// //                     {row.status}
// //                   </span>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[5, 10, 20]}
// //         component="div"
// //         count={filteredRows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //       />
// //     </div>
// //   );
// // }


// // ********************
// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import SearchIcon from "@material-ui/icons/Search";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import TablePagination from "@material-ui/core/TablePagination";
// import "./Table.css";
// import { InputAdornment } from "@material-ui/core";

// interface Row {
//   name: string;
//   trackingId: number;
//   date: string;
//   status: string;
// }

// function createData(name: string, trackingId: number, date: string, status: string): Row {
//   return { name, trackingId, date, status };
// }

// const initialRows: Row[] = [
//   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
//   createData("Big Baza Bang ", 18908425, "2 March 2022", "Pending"),
//   createData("Mouth Freshner", 18908426, "2 March 2022", "Approved"),
//   createData("Cupcake", 18908427, "2 March 2022", "Delivered"),

// ];

// const makeStyle = (status: string) => {
//   if (status === "Approved") {
//     return {
//       background: "rgb(145 254 159 / 47%)",
//       color: "green",
//     };
//   } else if (status === "Pending") {
//     return {
//       background: "#ffadad8f",
//       color: "red",
//     };
//   } else {
//     return {
//       background: "#59bfff",
//       color: "white",
      
//     };
//   }
// };

// export default function AdvancedTable({tabledata}):any {
//   const [searchText, setSearchText] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

//   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
//     setPage(newPage);
//   };

//   const filteredRows = initialRows.filter((row) => {
//     const lowerSearchText = searchText.toLowerCase();
//     return (
//       row.name.toLowerCase().includes(lowerSearchText) &&
//       (statusFilter === "All" || row.status === statusFilter)
//     );
//   });

//   return (
//     <div className="Table"  >
//       <p className="2-xl  mb-5">All Transactions</p>
//       <TextField
//         label="Search"
//         variant="outlined"
//         size="small"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//         style={{ marginBottom: 16 }}
//       />
//       <TableContainer component={Paper} style={{ maxHeight: 400, minHeight : 300 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               <TableCell>Product</TableCell>
//               <TableCell align="left">Tracking ID</TableCell>
//               <TableCell align="left">Date</TableCell>
//               <TableCell align="left">Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//               <TableRow key={row.name}>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell align="left">{row.trackingId}</TableCell>
//                 <TableCell align="left">{row.date}</TableCell>
//                 <TableCell align="left">
//                   <span className="status" style={makeStyle(row.status)}>
//                     {row.status}
//                   </span>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[1, 5, 10]}
//         component="div"
//         count={filteredRows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//       />
//     </div>
//   );
// }


import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import "./Table.css";
import { InputAdornment } from "@material-ui/core";

interface Row {
  _id: string;
  amount: number;
  category: string;
  type: string;
  date: string;
}

interface Props {
  tabledata: any;
}

const makeStyle = (status: string) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const AdvancedTable: React.FC<Props> = ({ tabledata }) => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const filteredRows = tabledata.filter((row:any) => {
    const lowerSearchText = searchText.toLowerCase();
    return (
      row.category.toLowerCase().includes(lowerSearchText) &&
      (statusFilter === "All" || row.type === statusFilter)
    );
  });

  return (
    <div className="Table">
      <p className="2-xl mb-5">All Transactions</p>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginBottom: 16 }}
      />
      <TableContainer component={Paper} style={{ maxHeight: 400, minHeight: 300 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => (
                <TableRow key={row._id}>
                  <TableCell>{row.category}</TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 5, 10]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default AdvancedTable;
