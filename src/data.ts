import avatar1 from './static/img/person.jpg';

export interface Iseller {
        id: number,
        name: string,
        image: any,
        currency: string
}
export const data:Iseller[] = [
    {
        id: 1,
        name: 'John Smith',
        image: avatar1,
        currency: '500.6 ETH'
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: avatar1,
        currency: '500.6 ETH'
    },
    {
        id: 3,
        name: 'John Doe',
        image: avatar1,
        currency: '500.6 ETH'
    },
    {
        id: 4,
        name: 'Sarah Doe',
        image: avatar1,
        currency: '500.6 ETH'
    }
]
