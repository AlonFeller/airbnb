import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from "../../store/order/order.actions";
import { userReducer } from "../../store/user/user.reducer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const MyOrders = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadOrders())
    }, [])
    const orders = useSelector((state => state.orderModule.orders))
    const user = useSelector((state => state.userModule.user))
    const hostOrders = orders.filter(order => order.host.id === user._id)

    console.log('host orders', orders);

    function createData(name, stay, guests, from, till, total) {
        return { name, stay, guests, from, till, total };
    }

    const orderRows = hostOrders.map(order => createData(order.buyer.name,
        order.stay.name, order.guestsNumber.total, order.checkIn, order.checkOut, order.totalPrice))

    return (
        <section className="my-orders">
            <h1>My Stays orders</h1>

            <div >


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order by</TableCell>
                                <TableCell align="left">Property</TableCell>
                                <TableCell align="left">Guest Count</TableCell>
                                <TableCell align="left">From</TableCell>
                                <TableCell align="left">Till</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.stay}</TableCell>
                                    <TableCell align="Left">{row.guests}</TableCell>
                                    <TableCell align="left">{row.from.substring(0, 10)}</TableCell>
                                    <TableCell align="left">{row.till.substring(0, 10)}</TableCell>
                                    <TableCell align="left">${row.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </section>

    )
}