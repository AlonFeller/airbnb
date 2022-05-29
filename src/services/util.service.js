import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { KitchenIcon, FireplaceIcon, BeachAccessIcon, OutdoorGrillIcon, KingBed, Deck, LocalLaundryService,
// Pool, Bathtub, RoomService, Speaker, SportsEsports,  Balcony, Checkroom, CoffeeMaker, Crib, Iron } from '@mui/material';
// import {
//     FaSnowflake, FaBlender, FaCar, FaHotTub, FaPaw, FaSmoking, FaSmokingBan, FaWifi,
//     FaLock, FaThermometerHalf, FaDoorClosed, FaWineGlassAlt, FaSwimmingPool, FaAccessibleIcon
// } from 'react-icons/fa';
// import {}
import {
    Tv, NetworkWifi, Kitchen, SmokingRooms, HotTub, Pets, SmokeFree,
    AcUnit, HeatPump, Pool, Countertops, Fireplace, Yard, OutdoorGrill, Crib, Lock,
    ScreenLockLandscape, BeachAccess, Checkroom, LocalBar, LocalParking,
    AccessibleForward, Bed, Bathtub, Balcony, Iron, RoomService, CoffeeMaker
    , LocalLaundryService, Speaker, SportsEsports, Accessible, Cable, Router, AccountBox,
    FitnessCenter, FamilyRestroom, InsertInvitation, MedicalServices
    , NotificationsActive, CreditScore, FireExtinguisher, HomeRepairService, Soap, WatchLater
    , Air, UnfoldMore, CheckBox, Laptop, Man, RollerShades, Shower, KingBed, SingleBed, Luggage,
    EventNote, Grass, AccessibilityNew, DirectionsWalk, Accessibility, DoorFront,
    WheelchairPickup, Light, Water
} from '@mui/icons-material';

export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    getAmenitiesIcons
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

// function getAmenitiesIcons(amenity) {
//         switch (amenity) {
//             case 'TV':
//     return <Tv />
// }}

function getAmenitiesIcons(amenity) {
    switch (amenity) {
        case 'TV':
            return <Tv />
        case 'Wifi':
            return <NetworkWifi />
        case 'Kitchen':
            return <Countertops />
        case 'Smoking allowed':
            return <SmokingRooms />
        case 'Hot tub':
            return <HotTub />
        case 'Pets allowed':
            return <Pets />
        case 'No smoking':
            return <SmokeFree />
        case 'Air conditioning':
            return <AcUnit />
        case 'Heating':
            return <HeatPump />
        case 'Pool':
            return <Pool />
        case 'Indoor fireplace':
            return <Fireplace />
        case 'Refrigerator':
            return < Kitchen />
        case 'Backyard':
            return <Yard />
        case 'BBQ grill':
            return <OutdoorGrill />
        case 'Crib':
            return <Crib />
        case 'Private entrance':
            return <Lock />
        case 'Lockbox':
            return <ScreenLockLandscape />
        case 'Beachfront':
            return <BeachAccess />
        case 'Hangers':
            return < Checkroom />
        case 'Wine glasses':
            return <LocalBar />
        case 'Free parking':
            return <LocalParking />
        case 'Accessible':
            return <AccessibleForward />
        case 'King size bed':
            return <Bed />
        case 'Bathub':
            return <Bathtub />
        case 'Balcony':
            return <Balcony />
        case 'Iron':
            return <Iron />
        case 'Room service':
            return <RoomService />
        case 'Coffee machine':
            return <CoffeeMaker />
        case 'Laundry machine':
            return <LocalLaundryService />
        case 'Speakers':
            return < Speaker />
        case 'Gaming console':
            return < SportsEsports />
        case 'Wheelchair accessible':
            return < Accessible />
        case 'Cable TV':
            return < Cable />
        case 'Internet':
            return < Router />
        case 'Free parking on premises':
            return < LocalParking />
        case 'Doorman':
            return < AccountBox />
        case 'Gym':
            return < FitnessCenter />
        case 'Elevator':
            return < UnfoldMore />
        case 'Family/kid friendly':
            return < FamilyRestroom />
        case 'Suitable for events':
            return < InsertInvitation />
        case 'Washer':
            return < LocalLaundryService />
        case 'Dryer':
            return < LocalLaundryService />
        case 'Smoke detector':
            return < NotificationsActive />
        case 'Carbon monoxide detector':
            return < NotificationsActive />
        case 'First aid kit':
            return < MedicalServices />
        case 'Safety card':
            return < CreditScore />
        case 'Fire extinguisher':
            return < FireExtinguisher />
        case 'Essentials':
            return < HomeRepairService />
        case 'Shampoo':
            return < Soap />
        case '24-hour check-in':
            return < WatchLater />
        case 'Hair dryer':
            return < Air />
        case 'Laptop friendly workspace':
            return < Laptop />
        case 'Self check-in':
            return < CheckBox />
        case 'Building staff':
            return < Man />
        case 'Room-darkening shades':
            return < RollerShades />
        case 'Hot water':
            return < Shower />
        case 'Bed linens':
            return < KingBed />
        case 'Extra pillows and blankets':
            return < SingleBed />
        case 'Ethernet connection':
            return < Cable />
        case 'Luggage dropoff allowed':
            return < Luggage />
        case 'Long term stays allowed':
            return < EventNote />
        case 'Ground floor access':
            return < Grass />
        case 'Wide hallway clearance':
            return < AccessibilityNew />
        case 'Step-free access':
            return < DirectionsWalk />
        case 'Wide doorway':
            return < Accessibility />
        case 'Flat path to front door':
            return < DoorFront />
        case 'Well-lit path to entrance':
            return < Light />
        case 'Disabled parking spot':
            return < WheelchairPickup />
        case 'Wide clearance to bed':
            return < Accessibility />
        case 'Wide entryway':
            return < Accessibility />
        case 'Waterfront':
            return < Water />
        default:
            break;

    }
}




