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
import moment from 'moment'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Graph } from "./graph.tsx";


export const MyOrders = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadOrders())
    }, [])
    const orders = useSelector((state => state.orderModule.orders))
    const user = useSelector((state => state.userModule.user))
    const hostOrders = orders.filter(order => order.host.id === user._id).reverse()
    const stays = useSelector(state => state.stayModule.stays)
    const hostStays = stays.filter(stay => stay.host._id === user._id)

    function createData(name,  stay, time, guests, from, till, total) {
        return { name, stay, time, guests, from, till, total };
    }

    const orderRows = hostOrders.map(order => createData(order.buyer.name,
        order.stay.name, order.timeOrder, order.guestsNumber.total, order.checkIn, order.checkOut, utilService.numberWithCommas(order.totalPrice)))


    let rating = hostStays.reduce((acc, stay) => { return acc + stay.reviewScores.rating }, 0) / hostStays.length
    rating = rating / 20
    const ratingStr = rating + ''
    const totalEarnings = hostOrders.reduce((acc, order) => { return acc + parseInt(order.totalPrice) }, 0)
    const totalGuests = hostOrders.reduce((acc, order) => { return acc + parseInt(order.guests) }, 0)

    const randInc = utilService.getRandomIntInclusive(-100, 100)
    const randTraffic = utilService.getRandomIntInclusive(-100, 100)

    return (
        <section className="my-orders">

            <div className="orders-statistics">

                <Card  className="statistics-box">
                    <CardContent className="card-content">
                        <h3>Avarage ratings: </h3>

                        <h3 className="order-rating-flex">{ratingStr.substring(0, 3)}</h3>
                        <div>

                            <Rating name="read-only" value={rating} readOnly />
                        </div>
                    </CardContent>
                </Card>

                <Card  className="statistics-box">
                    <CardContent className="card-content">
                        <h3>Monthly income: </h3>
                        <h4 className={(randInc > 0) ? 'static-pos' : 'static-neg'}>${utilService.numberWithCommas(totalEarnings)} &nbsp; {(randInc > 0) ? '▲' : '▼'} {randInc}% </h4>

                    </CardContent>
                </Card>

                <Card  className="statistics-box">
                    <CardContent className="card-content">
                        <h3>Annual income: </h3>
                        <h4>${utilService.numberWithCommas(totalEarnings + 8540)}</h4>

                    </CardContent>
                </Card>

                <Card  className="statistics-box">
                    <CardContent className="card-content">
                        <h3>Total orders: </h3>
                        <h4>{hostOrders.length}</h4>

                    </CardContent>
                </Card>

                <Card  className="statistics-box">
                    <CardContent className="card-content">
                        <h3>Traffic:</h3>
                        <h4 className={(randTraffic > 0) ? 'static-pos' : 'static-neg'}>{(randTraffic > 0) ? '▲' : '▼'} {randTraffic}%</h4>

                    </CardContent>
                </Card>

                {/* <Card sx={{ minWidth: 600 }} className="card-graph" >
                
                       
                        <Graph />
                  
                </Card> */}


            </div>






            <div >


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} size="medium" aria-label="simple table">
                        <TableHead>
                            <TableRow className="order-table-head">
                                <TableCell ><h3>Order by</h3></TableCell>
                                <TableCell align="left"><h3>Property</h3></TableCell>
                                <TableCell align="left"><h3>Ordered at</h3></TableCell>
                                <TableCell align="left"><h3>Guests</h3></TableCell>
                                <TableCell align="left"><h3>Checkin</h3></TableCell>
                                <TableCell align="left"><h3>Checkout</h3></TableCell>
                                <TableCell align="left"><h3>Total</h3></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {orderRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.stay}</TableCell>
                                    <TableCell align="left">{(+new Date(row.time).getMonth() + 1) + '/' + new Date(row.time).getDate() + '/' + new Date(row.time).getFullYear()}</TableCell>
                                    <TableCell align="Left">{row.guests}</TableCell>
                                    <TableCell align="left">{moment(row.from).format('MM/DD/YYYY')}</TableCell>
                                    <TableCell align="left">{moment(row.till).format('MM/DD/YYYY')}</TableCell>
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



// import * as React from 'react';

// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';





