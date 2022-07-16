import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../store/user/user.actions'
import { Star, IosShare, FavoriteBorder, Favorite } from '@mui/icons-material'
import { UserMsg } from '../general/user-msg'


export const StayInfoLine = ({ stay, setIsOpenModal, isOpenModal }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(storeState => storeState.userModule)
    const [likeHeart, setLikeHeart] = useState(null)
    const [savedLink, setSavedLink] = useState(null)
    const [textMsg, setTextMsg] = useState('')

    useEffect(() => {
        if (savedLink && savedLink != null) {
            openMsg()
        }
    }, [savedLink])

    useEffect(() => {
        if (likeHeart != null) {
            openMsg()
        }
    }, [likeHeart])

    const ToggleHeart = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        if (!user) {
            document.body.classList.toggle("login-page-open");
            document.body.classList.toggle("login-screen-open");
        } else {
            let updatedUser = { ...user }
            setLikeHeart(!likeHeart)
            if (!updatedUser.favorites) {
                updatedUser.favorites = []
            }
            if (updatedUser.favorites.map(fav => fav._id).includes(stay._id)) {
                updatedUser.favorites = updatedUser.favorites.filter(fav => fav._id !== stay._id)
            } else {
                updatedUser.favorites.push(stay)
            }
            dispatch(updateUser(updatedUser))
        }

    }

    function onCopyUrlToClipboard(ev) {
        ev.preventDefault()
        navigator.clipboard.writeText(window.location.href);
        setSavedLink(true)
    }

    const chooseTxtMsg = () => {
        let txtMsg = ''
        console.log(savedLink)
        if (savedLink) txtMsg = 'Link Copied to clipboard'
        else if (likeHeart) txtMsg = 'Stay liked'
        else txtMsg = 'Stay unliked'
        setTextMsg(txtMsg)
    }

    const openMsg = () => {
        chooseTxtMsg()
        setTimeout(() => {
            closeMsg()
        }, 3000);
    }

    const closeMsg = () => {
        setSavedLink(false)
        setTextMsg('')
    }

    return (
        <>
            <section className="stay-modal">
                {textMsg && <UserMsg textMsg={textMsg} closeMsg={closeMsg} />}
            </section>
            <section className="stay-info-line flex space-between">
                <div className="stay-info-container flex">
                    <span className="icon-star">< Star /></span>
                    <h4 className="info-rating"> {(stay.reviewScores.rating / 20).toFixed(1)} </h4>
                    <span className="info-point" > · </span>
                    <h4 className="info-reviews pointer" onClick={() => { setIsOpenModal(!isOpenModal) }}>
                        <u>{stay.numOfReviews} reviews</u>
                    </h4>
                    <span className="info-point" > . </span>
                    {stay.host.isSuperhost && <h4 className="info-super-host"> Superhost </h4>}
                    {stay.host.isSuperhost && <span className="info-point" > . </span>}
                    <h4 className="info-host-address"><u> {stay.address.street}</u> </h4>
                </div>
                <div className="info-user-btns flex">
                    <div className="share-btn-container flex align-center" onClick={(event) => onCopyUrlToClipboard((event))}>
                        <p className="details-share"  ><IosShare /></p>
                        <p>Share</p>
                    </div>
                    <div className="save-btn-container flex align-center" onClick={(event) => ToggleHeart(event, likeHeart)}>
                        <p className="details-save" >{!likeHeart ? <FavoriteBorder /> : <Favorite />}</p>
                        <p>Save</p>
                    </div>
                </div>
            </section>
        </>
    )
}

