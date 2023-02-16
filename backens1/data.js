import bcrypt from 'bcryptjs';

const data = {
    users:[],
    products: [
        {
            name: 'iPhone 14 Pro Max',
            slug: 'iPhone-14-Pro-Max',
            category: 'Phones',
            image: '/images/iPhone14ProMax.jpg',
            price: 5500,
            countInStock: 5,
            brand: 'Apple',
            rating: 4.9,
            numReviews:15,
            description: 'New iPhone 14 Pro Max'
        },
        {
            name: 'iPhone 14 Pro',
            slug: 'iPhone-14-Pro',
            category: 'Phones',
            image: '/images/iPhone14Pro.jpg',
            price: 4500,
            countInStock: 8,
            brand: 'Apple',
            rating: 4.6,
            numReviews:12,
            description: 'New iPhone 14 Pro'
        },
        {
            name: 'iPhone 14 Plus',
            slug: 'iPhone-14-Plus',
            category: 'Phones',
            image: '/images/iPhone14Plus.jpg',
            price: 3800,
            countInStock: 15,
            brand: 'Apple',
            rating: 4.8,
            numReviews:18,
            description: 'New iPhone 14 Plus'
        },
        {
            name: 'iPhone 14',
            slug: 'iPhone-14',
            category: 'Phones',
            image: '/images/iPhone14.jpg',
            price: 3400,
            countInStock: 0,
            brand: 'Apple',
            rating: 4.3,
            numReviews:23,
            description: 'New iPhone 14x'
        },
        {
            name: 'Galaxy S23 Ultra',
            slug: 'Galaxy-S23-Ultra',
            category: 'Phones',
            image: '/images/GalaxyS23Ultra.jpg',
            price: 4200,
            countInStock: 7,
            brand: 'Samsung',
            rating: 4.8,
            numReviews:4,
            description: 'New Galaxy S23 Ultra'
        },
        {
            name: 'Galaxy S23 Plus',
            slug: 'Galaxy-S23-Plus',
            category: 'Phones',
            image: '/images/GalaxyS23Plus.jpg',
            price: 3700,
            countInStock: 10,
            brand: 'Samsung',
            rating: 4.5,
            numReviews:6,
            description: 'New Galaxy S23 Plus'
        },
        {
            name: 'Galaxy Z Flip 4',
            slug: 'Galaxy-Z-Flip-4',
            category: 'Phones',
            image: '/images/GalaxyZFlip4.jpg',
            price: 4000,
            countInStock: 5,
            brand: 'Samsung',
            rating: 4.9,
            numReviews:5,
            description: 'New Galaxy Z Flip 4'
        },
        {
            name: 'Galaxy Z Fold 4',
            slug: 'Galaxy-Z-Fold-4',
            category: 'Phones',
            image: '/images/GalaxyZFold4.jpg',
            price: 4900,
            countInStock: 8,
            brand: 'Samsung',
            rating: 5,
            numReviews:10,
            description: 'New Galaxy Z Fold 4'
        }
        
    ]
}

export default data;