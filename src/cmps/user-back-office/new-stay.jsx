import { upload } from "@testing-library/user-event/dist/upload"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addStay } from "../../store/stay/stay.actions"
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { AirBnbBtn } from "../order/AirBnb-Btn";
import { useNavigate } from "react-router-dom";
import { ImgUploader } from "../app-header/img-uploader";


export const NewStayHost = (props) => {

    const user = useSelector((state => state.userModule.user))
    const dispatch = useDispatch()

    const amenitiesForMap = ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'AC', 'Heating', 'Pool',
        'Indoor fireplace', 'Dishwasher', 'Backyard', 'Free parking', 'Lockbox', 'Accessible', 'King size bed', 'Bathub',
        'Jaccozie', 'Sauna', 'Outdoor bonefire', 'Balcony', 'Iron', 'Roon service', 'Coffe machine', 'Speakers']

    const roomOptions = ['An entire place', 'Private room', 'Shared room'];
    const propertyOptions = ['Apartment', 'Villa', 'Duplex', 'Loft', 'Cabin', 'Husha', 'Home', 'Farm'];
    const [roomValue, setRoomValue] = useState(roomOptions[0]);
    const [inputRoom, setInputRoom] = useState('');
    const [propertyValue, setPropertyValue] = useState(propertyOptions[0]);
    const [inputProperty, setInputProperty] = useState('');
    const navigate = useNavigate()


    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }




    const [stay, setStay] = useState({
        name: '',
        address: '',
        price: '',
        summary: '',
        roomType: '',
        propertyType: '',
        capacity: 0,
        amenities: [],
        imgUrls: [],
        host: user,
        address: {
            street: '',
            city: '',
            country: '',
            location: {
                lat: null,
                lan: null
            }
        }
    })

    const imgUrls = stay.imgUrls
    

    // useEffect(() => {

    //     console.log(stay);

    // }, [stay])

    const handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        setStay({ ...stay, [field]: value })
    }

    const handleAmenityChange = (amenitie) => {

        const amenities = stay.amenities
        if (amenities.includes(amenitie)) {
            amenities.splice(amenities.indexOf(amenitie), 1)
        } else {
            amenities.push(amenitie)
        }
        setStay({ ...stay, amenities: amenities })
        console.log(amenities);
    }

    const onDropmenueChange = (field, val) => {
        setStay({ ...stay, [field]: val })
    }

    const handleAddressChange = ({ target }) => {
        const field = target.name;
        const value = target.value
        const address = stay.address
        address[field] = value
        setStay({ ...stay, address: address })
    }

    const onUploadImg = (ev) => {

        const CLOUD_NAME = 'Get name here'
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const file = ev.target.files[0]
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "ewa9mksh")
        return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                addImg(res.url) 
            })
            .catch(err => console.error(err))
    }

    const addImg = (url) => {
        const imgs = stay.imgUrls
        imgs.push(url)
        setStay({ ...stay, imgUrls: imgs })
    }

    //upload to cloudenery<---- add later!
    // onUploadImg = (ev) => {
    //     const CLOUD_NAME = 'dkbfdybze'
    //     const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    //     const file = ev.target.files[0]
    //     const formData = new FormData()
    //     formData.append("file", file)
    //     formData.append("upload_preset", "ewa9mksh")
    //     return fetch(UPLOAD_URL, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             const state = state
    //             const ImgUrl = res.url
    //             state.newStay.imgUrls.push(ImgUrl)
    //             setState((state))
    //         })
    //         .catch(err => console.error(err))
    // }

    const onAddStay = (ev) => {
        // ev.preventDefault()

        dispatch(addStay(stay))
        goTo('/userbackoffice')


    }

    return (
        <section className="new-stay">
            <h1>add stay</h1>
            <div >


                <form action="" className="new-stay-form" onSubmit={() => onAddStay()}>

                    <div className="new-stay-form-inputs">
                        <TextField type="text" name="name" placeholder="Name your asset:" onChange={handleChange} />
                        <TextField type="text" name="address" placeholder="Adress:" onChange={handleAddressChange} />
                        <TextField type="text" name="city" placeholder="City:" onChange={handleAddressChange} />
                        <TextField type="text" name="country" placeholder="Country:" onChange={handleAddressChange} />
                        <TextField type="number" name="price" placeholder="Price per night $:" onChange={handleChange} />

                    </div>

                    <div className="img-upload-grid">

                        <div className="img-blank" onClick={onUploadImg}>
                            {(stay.imgUrls[0]) ? <img src={stay.imgUrls[0]} alt="" className="img-upload-dispay"/> : <div>
                                <div className="img-upload-dispay upload-img-txt">
                                    <label>Upload image</label>
                                </div>
                                <input type="file" placeholder="Upload Image" name="imgUrls" onChange={onUploadImg} />
                            </div>}
                        </div>
                        <div className="img-blank" onClick={onUploadImg}>
                            {(stay.imgUrls[1]) ? <img src={stay.imgUrls[1]} alt="" className="img-upload-dispay"/> : <div>
                                <div className="img-upload-dispay upload-img-txt">
                                    <label>Upload image</label>
                                </div>
                                <input type="file" placeholder="Upload Image" name="imgUrls" onChange={onUploadImg} />
                            </div>}
                        </div>
                        <div className="img-blank" onClick={onUploadImg}>
                            {(stay.imgUrls[2]) ? <img src={stay.imgUrls[2]} alt="" className="img-upload-dispay"/> : <div>
                                <div className="img-upload-dispay upload-img-txt">
                                    <label>Upload image</label>
                                </div>
                                <input type="file" placeholder="Upload Image" name="imgUrls" onChange={onUploadImg} />
                            </div>}
                        </div>
                        <div className="img-blank" onClick={onUploadImg}>
                            {(stay.imgUrls[3]) ? <img src={stay.imgUrls[3]} alt="" className="img-upload-dispay"/> : <div>
                                <div className="img-upload-dispay upload-img-txt">
                                    <label>Upload image</label>
                                </div>
                                <input type="file" placeholder="Upload Image" name="imgUrls" onChange={onUploadImg} />
                            </div>}
                        </div>
                        <div className="img-blank" onClick={onUploadImg}>
                            {(stay.imgUrls[4]) ? <img src={stay.imgUrls[4]} alt="" className="img-upload-dispay"/> : <div>
                                <div className="img-upload-dispay upload-img-txt">
                                    <label>Upload image</label>
                                </div>
                                <input type="file" placeholder="Upload Image" name="imgUrls" onChange={onUploadImg} />
                            </div>}
                        </div>

                    </div>

                    <div className="property-inputs">

                        <TextField type="number" name="capacity" placeholder="Capacity" onChange={handleChange} />

                        <Autocomplete
                            name="roomType"
                            value={roomValue}
                            onChange={(event, newValue) => {
                                setRoomValue(newValue);
                            }}
                            inputValue={inputRoom}
                            onInputChange={(event, newInputValue) => {
                                setInputRoom(newInputValue);
                                onDropmenueChange('roomType', inputRoom)

                            }}
                            options={roomOptions}
                            sx={{ width: 240 }}
                            renderInput={(params) => <TextField {...params} label="Space type" />}
                        />

                        <Autocomplete
                            name="propertyType"
                            value={propertyValue}
                            onChange={(event, newValue) => {
                                setPropertyValue(newValue);
                            }}
                            inputValue={inputProperty}
                            onInputChange={(event, newInputValue) => {
                                setInputProperty(newInputValue);
                                onDropmenueChange('propertyType', inputProperty)

                            }}
                            options={propertyOptions}
                            sx={{ width: 240 }}
                            renderInput={(params) => <TextField {...params} label="Property type" />}
                        />
                    </div>

                    <div className="new-stay-input-txt-area">
                        <TextField
                            id="outlined-multiline-static"
                            label="A few words about your place"
                            multiline
                            rows={5}
                            style={{ width: '100%' }}
                            name="summary"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <h3>Amenities</h3>
                        <section className="new-stay-input-sliders" >

                            {
                                amenitiesForMap.map((amenitie) => {
                                    return <div className="checkbox-card" key={amenitie}>
                                        <Switch onChange={() => handleAmenityChange(amenitie)} />
                                        <label className="switch-marg" >{amenitie}</label>

                                    </div>
                                })
                            }

                        </section>
                    </div>

                    <div className="host-now-btn" onClick={() => onAddStay()}>

                        <AirBnbBtn btnInnerTxt='Host now' />
                    </div>
                </form>




            </div>


        </section>

    )
}
