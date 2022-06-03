import React, { useState } from "react"
import Rating from "@mui/material/Rating"
import { useDispatch, useSelector } from "react-redux"
import { utilService } from "../../services/util.service"
import { userService } from "../../services/user.service"
import { stayService } from "../../services/stay.service"
import { updateStay, loadStay,loadReviews } from "../../store/stay/stay.actions"
import { Star } from "@mui/icons-material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Send } from "@mui/icons-material"
import { createTheme, ThemeProvider } from "@mui/material/styles"


export function AddReview({ stay }) {
    const dispatch = useDispatch();
    const { user } = useSelector(storeState => storeState.userModule)
    const { addedReveiw } = useSelector(storeState => storeState.stayModule)
    const [value, setValue] = React.useState("");
    const [rating, setRating] = React.useState([5, 5, 5, 5, 5, 5]);
    const types = ["Cleanliness:", "Communication:", "Check-in:", "Accuracy:", "Location:", "Value:"];


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    async function CreateReview() {
        if (!user) return
        let avg = (rating[0] + rating[1] + rating[2] + rating[3] + rating[4] + rating[5]) / 6;
        const newReview = {
            at: Date.now(),
            by: {
                _id: user._id,
                fullname: user.fullname,
                imgUrl: user.imgUrl,
                id: user.id
            },
            txt: value
        }
        stay.reviews.unshift(newReview);

        const newReviewRate = {
            accuracy: rating[3],
            cleanliness: rating[0],
            checkin: rating[2],
            communication: rating[1],
            location: rating[4],
            value: rating[5],
            rating: avg
        }

        const oldReviewRate = {
            accuracy: stay.reviewScores.accuracy,
            cleanliness: stay.reviewScores.cleanliness,
            checkin: stay.reviewScores.checkin,
            communication: stay.reviewScores.communication,
            location: stay.reviewScores.accuracy,
            value: stay.reviewScores.value,
            rating: stay.reviewScores.rating
        }

        stay.reviewScores = {
            accuracy: utilService.getNewAvg(oldReviewRate.accuracy, stay.numOfReviews, newReviewRate.accuracy).toFixed(0),
            cleanliness: utilService.getNewAvg(oldReviewRate.cleanliness, stay.numOfReviews, newReviewRate.cleanliness).toFixed(0),
            checkin: utilService.getNewAvg(oldReviewRate.checkin, stay.numOfReviews, newReviewRate.checkin).toFixed(0),
            communication: utilService.getNewAvg(oldReviewRate.communication, stay.numOfReviews, newReviewRate.communication).toFixed(0),
            location: utilService.getNewAvg(oldReviewRate.location, stay.numOfReviews, newReviewRate.location).toFixed(0),
            value: utilService.getNewAvg(oldReviewRate.value, stay.numOfReviews, newReviewRate.value).toFixed(0),
            rating: utilService.getNewAvg(oldReviewRate.rating, stay.numOfReviews, newReviewRate.rating * 20).toFixed(0)
        }

        stay.numOfReviews++
        // dispatch(openMsg({ txt: "Review added", type: "bnb" }));
        console.log(stay);
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#FF385C",
            },
            secondary: {
                main: "#FF385C",
            },
        },
    });
    const btnTheme = createTheme({
        palette: {
            primary: {
                main: "#222222",
            },
            secondary: {
                main: "#222222",
            },
        },
    });

    const onAddReview = () => {
        CreateReview()
        // dispatch(updateStay(stay))
        setValue("")
        setRating([5, 5, 5, 5, 5, 5])
        // dispatch(loadReviews(true))
        // console.log(addedReveiw)
        // dispatch(loadReviews(false))
        // console.log(addedReveiw)
    }
    return (
        <div>
            <div className='rating-bars-container'>{types.map((type, idx) => RatingBar(type, idx, rating, setRating))}</div>
            <div className='type-area'>
                <ThemeProvider theme={theme}>
                    <TextField fullWidth label='Share your exprience with this stay' color='secondary' multiline rows={3} value={value} onChange={handleChange} />
                </ThemeProvider>
            </div>
            <div className='add-review-btn'>
                <ThemeProvider theme={btnTheme}>
                    <Button onClick={onAddReview} variant='outlined' endIcon={<Send />}>
                        Add Review
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}

function RatingBar(type, idx, value, setValue) {
    // const [clean, setClean] = React.useState(5);
    const [hover, setHover] = React.useState(-1);

    function setnewValue() {
        value[idx] = hover;
        setValue([...value]);
        console.log(value);
    }


    return (
        <div className='bar-container'>
            <span className='rating-bar-header'>{type}</span>
            <Rating
                name='hover-feedback'
                value={value[idx]}
                precision={0.5}
                onChange={() => {
                    setnewValue();
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize='inherit' />}
            />
        </div>
    );
}