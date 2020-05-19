import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

interface ITableComponent {
    label: any;
    rows: any;
}


const TableComponent: React.FC<ITableComponent> = ({
    label,
    rows,
}) => {
    const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const row = rows.slice(rowsPerPage*page, (page+1)*rowsPerPage);

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {
                                label.map((data: any) => <TableCell>{data.label}</TableCell>)
                            }                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        row.map((row: any, key: number) => (
                            <TableRow key={key}>
                                <TableCell>{row.taskName}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.status ? 'Выполнено' : 'Не выполнено'}</TableCell>

                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
        </>
    )
}

export default TableComponent;