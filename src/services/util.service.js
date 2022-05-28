import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KitchenIcon, FireplaceIcon, BeachAccessIcon, OutdoorGrillIcon, KingBed, Deck, LocalLaundryService,
Pool, Bathtub, RoomService, Speaker, SportsEsports, TvIcon, Balcony, Checkroom, CoffeeMaker, Crib, Iron } from '@mui/material';
import {
    FaSnowflake, FaBlender, FaCar, FaHotTub, FaPaw, FaSmoking, FaSmokingBan, FaWifi,
    FaLock, FaThermometerHalf, FaDoorClosed, FaWineGlassAlt, FaSwimmingPool, FaAccessibleIcon
} from 'react-icons/fa';

export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    // getAmenitiesIcons
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
//     switch (amenity) {
//         case 'TV':
//             return <TvIcon />
//         case 'Wifi':
//             return <FaWifi />
//         case 'Kitchen':
//             return <KitchenIcon />
//         case 'Smoking allowed':
//             return <FaSmoking />
//         case 'Hot tub':
//             return <FaHotTub />
//         case 'Pets allowed':
//             return <FaPaw />
//         case 'No smoking':
//             return <FaSmokingBan />
//         case 'Cooking basics':
//             return <FaBlender />
//         case 'Air conditioning':
//             return <FaSnowflake />
//         case 'Heating':
//             return <FaThermometerHalf />
//         case 'Pool':
//             return <Pool />
//         case 'Indoor fireplace':
//             return <FireplaceIcon />
//         case 'Refrigerator':
//             return < KitchenIcon />
//         case 'Refrigerator':
//             return <FontAwesomeIcon icon="refrigerator" />
//         case 'Dishwasher':
//             return <LocalLaundryService />
//         case 'Backyard':
//             return <Deck />
//         case 'BBQ grill':
//             return <OutdoorGrillIcon />
//         case 'Crib':
//             return <Crib />
//         case 'Private entrance':
//             return <FaDoorClosed />
//         case 'Lockbox':
//             return <FaLock />
//         case 'Beachfront':
//             return <BeachAccessIcon />
//         case 'Hangers':
//             return < Checkroom />
//         case 'Wine glasses':
//             return <FaWineGlassAlt />
//         case 'Free parking':
//             return <FaCar />
//         case 'Accessible':
//             return <FaAccessibleIcon />
//         case 'King size bed':
//             return <KingBed />
//         case 'Bathub':
//             return <Bathtub />
//         case 'Balcony':
//             return <Balcony />
//         case 'Iron':
//             return <Iron />
//         case 'Room service':
//             return <RoomService />
//         case 'Coffee machine':
//             return <CoffeeMaker />
//         case 'Laundry machine':
//             return <LocalLaundryService />
//         case 'Speakers':
//             return < Speaker />
//         case 'Gaming console':
//             return < SportsEsports />
//         default:
//             break;

//     }
// }




