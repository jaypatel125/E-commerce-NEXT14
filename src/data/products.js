const products = {
    products: [
        {
            id: 1,
            name: "Soft Baby Cap – Cozy Comfort for Little Ones",
            description:
                "A soft, comfortable baby cap made from gentle materials, perfect for keeping your baby warm and stylish during cooler months. Available in multiple colors to match any outfit.",
            category: "Baby",
            price: 9.99,
            availableColors: ["Black", "Gray", "White"],
            availableImages: [
                "/assets/product_images/baby-cap-black.png",
                "/assets/product_images/baby-cap-gray.png",
                "/assets/product_images/baby-cap-white.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 75,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {
                    type: "On Sale",
                    title: "Discounted Products",
                    description:
                        "Grab these amazing deals before they're gone!",
                    newPrice: 6.99,
                },
            },
        },
        {
            id: 2,
            name: "Cozy Baby Onesie – Stylish Comfort for Newborns",
            description:
                "A cozy and soft onesie that ensures your baby stays comfortable all day long. Made with breathable fabric, it’s perfect for playtime or naptime. Available in classic colors and easy to wear for any season.",
            price: 19.99,
            category: "Baby",
            availableColors: ["Beige", "Black", "White"],
            availableImages: [
                "/assets/product_images/baby-onesie-beige-1.png",
                "/assets/product_images/baby-onesie-beige-2.png",
                "/assets/product_images/baby-onesie-black-1.png",
                "/assets/product_images/baby-onesie-black-2.png",
                "/assets/product_images/baby-onesie-white-1.png",
                "/assets/product_images/baby-onesie-white-2.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 37,
            collection: {
                winter: {
                    type: "Winter",
                    title: "Winter Collection",
                    description: "Cozy, warm clothing for the chilly season.",
                },
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 3,
            name: "Durable Everyday Bag – Practical and Trendy",
            description:
                "A versatile, durable bag designed for everyday use. Its spacious interior and sleek design make it perfect for work, school, or casual outings. Available in stylish black and white colors.",
            price: 24.99,
            category: "Accessories",
            availableColors: ["Black", "White"],
            availableImages: [
                "/assets/product_images/bag-black.png",
                "/assets/product_images/bag-white.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 100,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {
                    type: "On Sale",
                    title: "Discounted Products",
                    description:
                        "Grab these amazing deals before they're gone!",
                    newPrice: 21.99,
                },
            },
        },
        {
            id: 4,
            name: "Stylish Bomber Jacket – Warmth and Fashion Combined",
            description:
                "This stylish bomber jacket is designed for all seasons, providing the perfect balance of warmth and fashion. Whether you're layering up for winter or styling it for a casual look, it’s a must-have in every wardrobe.",
            price: 49.99,
            category: "Men",
            availableColors: ["Army", "Black"],
            availableImages: [
                "/assets/product_images/bomber-jacket-army.png",
                "/assets/product_images/bomber-jacket-black.png",
            ],
            availableSizes: ["S", "M", "L", "XL"],
            stock: 50,
            collection: {
                winter: {
                    type: "Winter",
                    title: "Winter Collection",
                    description: "Cozy, warm clothing for the chilly season.",
                },
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 5,
            name: "Classic Cowboy Hat – Ready for Outdoor Adventures",
            description:
                "A timeless cowboy hat that’s ideal for outdoor enthusiasts. Whether you’re attending a rodeo, going for a hike, or simply enjoying a sunny day, this hat provides both style and protection from the elements.",
            category: "Accessories",
            price: 34.99,
            availableColors: ["Black", "Tan"],
            availableImages: [
                "/assets/product_images/cowboy-hat-black-1.png",
                "/assets/product_images/cowboy-hat-black-2.png",
                "/assets/product_images/cowboy-hat-black-3.png",
                "/assets/product_images/cowboy-hat-tan-1.png",
                "/assets/product_images/cowboy-hat-tan-2.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 40,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 6,
            name: "Classic Coffee Cup – A Must-Have for Coffee Lovers",
            description:
                "This classic coffee cup is perfect for your morning brew or afternoon tea. Made from high-quality materials, it keeps your drink warm while adding a touch of elegance to your kitchen or office.",
            category: "Accessories",
            price: 14.99,
            availableColors: ["Black", "White"],
            availableImages: [
                "/assets/product_images/cup-black.png",
                "/assets/product_images/cup-white.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 200,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 7,
            name: "Cozy Dog Sweater – Warmth for Your Furry Friend",
            description:
                "This cozy dog sweater is perfect for keeping your pet warm and stylish during the colder months. Made with soft, breathable fabric, it's comfortable and ensures your dog stays snug no matter the weather.",
            category: "Pets",
            price: 19.99,
            availableColors: ["Gray"],
            availableImages: [
                "/assets/product_images/dog-sweater-1.png",
                "/assets/product_images/dog-sweater-2.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 60,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 8,
            name: "Trendy Everyday Hat – Casual Style for Any Occasion",
            description:
                "A versatile and trendy hat for everyday wear. Whether you’re out for a walk, running errands, or heading to a casual outing, this hat adds the perfect finishing touch to your look.",
            category: "Accessories",
            price: 15.99,
            availableColors: ["Black"],
            availableImages: [
                "/assets/product_images/hat-1.png",
                "/assets/product_images/hat-2.png",
            ],
            availableSizes: ["S", "M", "L"],
            stock: 80,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 9,
            name: "Comfortable Black Hoodie – Casual All-Day Wear",
            description:
                "A cozy and stylish black hoodie designed for comfort and warmth. Perfect for any casual occasion, whether you're lounging at home, heading to the gym, or hanging out with friends.",
            category: "Women",
            price: 39.99,
            availableColors: ["Black"],
            availableImages: [
                "/assets/product_images/hoodie-1.png",
                "/assets/product_images/hoodie-2.png",
            ],
            availableSizes: ["S", "M", "L", "XL"],
            stock: 120,
            collection: {
                winter: {
                    type: "Winter",
                    title: "Winter Collection",
                    description: "Cozy, warm clothing for the chilly season.",
                },
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 10,
            name: "Trendy T-Shirt Circles – A Stylish Statement",
            description:
                "A modern t-shirt featuring unique circular designs. Perfect for adding a touch of style to your casual wardrobe, it’s made with soft fabric for all-day comfort. Available in black, blue, and white.",
            category: "Men",
            price: 24.99,
            availableColors: ["Black", "Blue", "White"],
            availableImages: [
                "/assets/product_images/t-shirt-circles-black.png",
                "/assets/product_images/t-shirt-circles-blue.png",
                "/assets/product_images/t-shirt-circles-white.png",
            ],
            availableSizes: ["S", "M", "L", "XL"],
            stock: 100,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 11,
            name: "Comfy Colorful T-Shirt – Perfect for Every Day",
            description:
                "A vibrant and comfy t-shirt available in multiple colors. Whether you're dressing up or down, this t-shirt is perfect for a laid-back look or an easygoing day out. Soft and breathable fabric ensures comfort all day long.",
            category: "Men",
            price: 22.99,
            availableColors: ["Black", "Blue", "Gray", "Pink", "White"],
            availableImages: [
                "/assets/product_images/t-shirt-color-black.png",
                "/assets/product_images/t-shirt-color-blue.png",
                "/assets/product_images/t-shirt-color-gray.png",
                "/assets/product_images/t-shirt-color-pink.png",
                "/assets/product_images/t-shirt-color-white.png",
            ],
            availableSizes: ["S", "M", "L", "XL"],
            stock: 200,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {
                    type: "On Sale",
                    title: "Discounted Products",
                    description:
                        "Grab these amazing deals before they're gone!",
                    newPrice: 19.99,
                },
            },
        },
        {
            id: 12,
            name: "Stylish Everyday Bag – Functional and Fashionable",
            description:
                "A stylish and practical bag that’s perfect for daily use. Its chic design and spacious interior make it the ideal accessory for carrying all your essentials while maintaining a fashionable look.",
            category: "Bags",
            price: 49.99,
            availableColors: ["Black", "Brown", "Gray"],
            availableImages: ["/assets/product_images/bag.png"],
            availableSizes: [],
            stock: 150,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {
                    type: "On Sale",
                    title: "Discounted Products",
                    description:
                        "Grab these amazing deals before they're gone!",
                    newPrice: 39.99,
                },
            },
        },
        {
            id: 13,
            name: "Elegant Wrist Watch – Timeless Style for Men and Women",
            description:
                "A sleek wristwatch designed to elevate your look. With its refined design and high-quality craftsmanship, it’s perfect for any occasion, whether it's formal or casual. Available in black, silver, and gold.",
            category: "Accessories",
            price: 149.99,
            availableColors: ["Black", "Silver", "Gold"],
            availableImages: ["/assets/product_images/watch.png"],
            availableSizes: [],
            stock: 100,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 14,
            name: "Comfortable Black Hoodie for Women – All-Season Essential",
            description:
                "A comfortable and versatile black hoodie designed for women. Made for all seasons, it’s perfect for layering or wearing on its own. Whether you're lounging or out with friends, it offers the perfect balance of warmth and style.",
            category: "Women",
            price: 39.99,
            availableColors: ["Black", "Gray"],
            availableImages: ["/assets/product_images/black-hoodie.png"],
            availableSizes: ["S", "M", "L", "XL", "XXL"],
            stock: 250,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
        {
            id: 15,
            name: "High-Quality Wireless Headphones – Premium Sound Experience",
            description:
                "These wireless headphones deliver superior sound quality, perfect for music lovers and audiophiles. Enjoy clear, crisp audio with excellent bass and sound clarity, all while experiencing the convenience of wireless technology.",
            category: "Electronics",
            price: 79.99,
            availableColors: [],
            availableImages: ["/assets/product_images/headphone.png"],
            availableSizes: [],
            stock: 180,
            collection: {
                winter: {},
                summer: {},
                spring: {},
                onsale: {},
            },
        },
    ],
};

export default products;

export const addresses = {
    userId: "user123",
    addresses: [
        {
            addressId: "64fd123456abcdef",
            addressName: "Home",
            firstName: "John",
            lastName: "Doe",
            address: "123 Main St",
            city: "Hamilton",
            province: "Ontario",
            postalCode: "L8P1A1",
            country: "Canada",
            phone: "123-456-7890",
        },
        {
            addressId: "sldfhalsdjffa;lsd",
            addressName: "Work",
            firstName: "Xyz",
            lastName: "Doe",
            address: "1 Bills dr",
            city: "Toronto",
            province: "Ontario",
            postalCode: "L8P1A1",
            country: "Canada",
            phone: "123-456-7890",
        },
    ],
    userId: "user123",
    addresses: [
        {
            addressId: "64fd123456abcdef",
            addressName: "Home",
            firstName: "John",
            lastName: "Doe",
            address: "123 Main St",
            city: "Hamilton",
            province: "Ontario",
            postalCode: "L8P1A1",
            country: "Canada",
            phone: "123-456-7890",
        },
        {
            addressId: "sldfhalsdjffa;lsd",
            addressName: "Work",
            firstName: "Xyz",
            lastName: "Doe",
            address: "1 Bills dr",
            city: "Toronto",
            province: "Ontario",
            postalCode: "L8P1A1",
            country: "Canada",
            phone: "123-456-7890",
        },
    ],
};
