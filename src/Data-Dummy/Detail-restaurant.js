import Geprek from '../Assets/Image/Detail-restaurant/geprek.png';
import GeprekKeju from '../Assets/Image/Detail-restaurant/geprek-keju.png';
import GeprekLeleh from '../Assets/Image/Detail-restaurant/geprek-leleh.png';
import MieAyamGeprek from '../Assets/Image/Detail-restaurant/mie-ayam-geprek.png';
import MieAyamGeprekKeju from '../Assets/Image/Detail-restaurant/mie-ayam-geprek-keju.png';
import MieAyamLeleh from '../Assets/Image/Detail-restaurant/mie-ayam-leleh.png';
import MieAyamSambel from '../Assets/Image/Detail-restaurant/mie-ayam-sambel.png';
import SambelMatah from '../Assets/Image/Detail-restaurant/sambel-matah.png';

export const DetailRestaurant = [
    {
        name: "Bensu",
        menu: [
            {
                name: 'Paket Geprek',
                price: 'Rp 15.000',
                image: Geprek,
            },
            {
                name: 'Paket Geprek Keju',
                price: 'Rp 20.000',
                image: GeprekKeju,
            },
            {
                name: 'Paket Geprek Leleh',
                price: 'Rp 25.000',
                image: GeprekLeleh,
            },
            {
                name: 'Paket Sambel Matah',
                price: 'Rp 15.000',
                image: SambelMatah,
            },
            {
                name: 'Mie Ayam Geprek',
                price: 'Rp 17.000',
                image: MieAyamGeprek,
            },
            {
                name: 'Mie Ayam  Geprek Keju',
                price: 'Rp 22.000',
                image: MieAyamGeprekKeju,
            },
        ]
    },
    {
        name: "Rony",
        menu: [
            {
                name: 'Mie Ayam Leleh',
                price: 'Rp 27.000',
                image: MieAyamLeleh,
            },
            {
                name: 'Mie Ayam Sambel',
                price: 'Rp 22.000',
                image: MieAyamSambel,
            },
        ]
    }
];