import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";

interface UserDiagnosesProps {
  diagnosis: string[];
}

export const UserDiagnoses: React.FC<UserDiagnosesProps> = ({ diagnosis }) => {
    if (diagnosis.length === 0) {
        return (
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                No diagnoses
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#26AAC4' }}>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}}>Diagnose</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '18px', color: 'white' }}>Doctor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {diagnosis.map((d, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                        >
                            <TableCell component="th" scope="row" style={{ fontSize: '16px'}}>
                                {d}
                            </TableCell>
                            <TableCell style={{
                                fontSize: '16px',
                                textAlign: 'right',
                                paddingRight: '40px',
                            }}>-</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};