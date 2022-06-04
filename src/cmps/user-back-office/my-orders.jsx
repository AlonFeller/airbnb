import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from "../../store/order/order.actions";
import { userReducer } from "../../store/user/user.reducer";
import { utilService } from "../../services/util.service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const MyOrders = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadOrders())
    }, [])
    const orders = useSelector((state => state.orderModule.orders))
    const user = useSelector((state => state.userModule.user))
    const hostOrders = orders.filter(order => order.host.id === user._id)
    const stays = useSelector(state => state.stayModule.stays)
    const hostStays = stays.filter(stay => stay.host._id === user._id)

    console.log('host orders', orders);

    function createData(name, id, stay, time, guests, from, till, total) {
        return { name, id, stay, time, guests, from, till, total };
    }

    const orderRows = hostOrders.map(order => createData(order.buyer.name, order.buyer.id,
        order.stay.name, order.timeOrder, order.guestsNumber.total, order.checkIn, order.checkOut, utilService.numberWithCommas(order.totalPrice)))


    let rating = hostStays.reduce((acc, stay) => { return acc + stay.reviewScores.rating }, 0) / hostStays.length
    rating = rating / 20
    const totalEarnings = hostOrders.reduce((acc, order) => { return acc + parseInt(order.totalPrice) }, 0)
    return (
        <section className="my-orders">
            <h1>Orders for your properties</h1>


            <div className="orders-statistics">

                <div className="statistics-box">
                    <h3>Avarage ratings: </h3>
                    <div>

                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>

                <div className="statistics-box">
                    <h3>Total income </h3>
                    <h4>${utilService.numberWithCommas(totalEarnings)}</h4>

                </div>
            </div>






            <div >


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order by</TableCell>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Property</TableCell>
                                <TableCell align="left">Ordered at</TableCell>
                                <TableCell align="left">Guests</TableCell>
                                <TableCell align="left">Checkin</TableCell>
                                <TableCell align="left">Checkout</TableCell>
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
                                    <TableCell align="left">{row.id.substring(0, 6)}</TableCell>
                                    <TableCell align="left">{row.stay}</TableCell>
                                    <TableCell align="left">{new Date(row.time).getDate() + '/' + (+new Date(row.time).getMonth() + 1)  + '/' + new Date(row.time).getFullYear()}</TableCell>
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