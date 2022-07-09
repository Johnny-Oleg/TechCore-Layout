import avatarFirst from '../assets/images/users-avatars/user-1.png';
import avatarSecond from '../assets/images/users-avatars/user-2.png';
import avatarThird from '../assets/images/users-avatars/user-3.png';
import avatarFourth from '../assets/images/users-avatars/user-4.png';
import avatarFifth from '../assets/images/users-avatars/user-5.png';
import avatarSixth from '../assets/images/users-avatars/user-6.png';
import avatarSeventh from '../assets/images/users-avatars/user-7.png';

export const data = [
    { id: 1, name: 'Australia', default: true, users: [
            { userId: 1, name: 'And', surname: 'Yes', avatar: avatarFirst },
            { userId: 2, name: 'Bill', surname: 'Shit', avatar: null },
            { userId: 3, name: 'Test', surname: 'User', avatar: avatarSecond },
            { userId: 4, name: 'Nin', surname: 'Tendo', avatar: avatarFirst },
            { userId: 5, name: 'Play', surname: 'Station', avatar: avatarThird },
            { userId: 6, name: 'Henry', surname: 'Mac', avatar: null },
            { userId: 7, name: 'Tech', surname: 'Core', avatar: avatarSecond },
            { userId: 8, name: 'No', surname: 'User', avatar: avatarFourth },
            { userId: 9, name: 'No', surname: 'User', avatar: avatarFifth },
            { userId: 10, name: 'No', surname: 'User', avatar: avatarSecond },
            { userId: 11, name: 'No', surname: 'User', avatar: avatarSecond },
            { userId: 12, name: 'No', surname: 'User', avatar: avatarSecond },
            { userId: 13, name: 'No', surname: 'User', avatar: avatarSecond },
        ]
    },
    { id: 2, name: 'Belarus', default: false, users: [
            { userId: 1, name: 'And', surname: 'Yes', avatar: avatarFirst },
            { userId: 2, name: 'Bill', surname: 'Shit', avatar: null },
            { userId: 3, name: 'Test', surname: 'User', avatar: avatarSecond },
            { userId: 4, name: 'Nin', surname: 'Tendo', avatar: avatarFirst },
            { userId: 5, name: 'Henry', surname: 'Mac', avatar: null },
        ] 
    },
    { id: 3, name: 'USA', default: false, users: [
            { userId: 1, name: 'And', surname: 'Yes', avatar: avatarFirst },
            { userId: 2, name: 'Bill', surname: 'Shit', avatar: null },
            { userId: 3, name: 'Test', surname: 'User', avatar: avatarSecond },
            { userId: 4, name: 'Nin', surname: 'Tendo', avatar: avatarFirst },
            { userId: 5, name: 'Play', surname: 'Station', avatar: avatarThird },
            { userId: 6, name: 'Henry', surname: 'Mac', avatar: null },
            { userId: 7, name: 'Good', surname: 'Luck', avatar: avatarSixth },
            { userId: 8, name: 'Please', surname: 'Hire Me', avatar: avatarFifth },
            { userId: 9, name: 'New', surname: 'Dude', avatar: avatarSeventh },
        ] 
    },
    { id: 4, name: 'Canada', default: false, users: [
            { userId: 1, name: 'Bill', surname: 'Shit', avatar: null },
            { userId: 2, name: 'And', surname: 'Yes', avatar: avatarThird },
            // { userId: 3, name: 'Test', surname: 'User', avatar: avatarSecond },
            // { userId: 4, name: 'Nin', surname: 'Tendo', avatar: avatarFirst },
            // { userId: 5, name: 'Play', surname: 'Station', avatar: avatarThird },
            // { userId: 6, name: 'Henry', surname: 'Mac', avatar: null },
        ] 
    },
]