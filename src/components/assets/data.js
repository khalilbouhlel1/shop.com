import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img1_1 from '../assets/img1_1.jpg'
import img1_2 from '../assets/img1_2.jpg'
import img1_3 from '../assets/img1_3.jpg'
import img1_4 from '../assets/img1_4.jpg'

const new_collections = [
    {
      id: 1,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      images: [img1,img1,img1,img1],
      mainImage: img1,
      new_price: 50.0,
      gender: "women",
      sizes: ["XS", "S", "M", "L", "XL"],
      availableSizes: {
        XS: 5,
        S: 8,
        M: 10,
        L: 6,
        XL: 4
      }
    },
    {
      id: 2,
      name: "Elegant Floral Print Maxi Dress",
      images: [img2,img2,img2,img2],
      mainImage: img2,
      new_price: 85.0,
      gender: "women",
      sizes: ["S", "M", "L", "XL"],
      availableSizes: {
        S: 6,
        M: 8,
        L: 4,
        XL: 3
      }
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      images: [img3,img3,img3,img3],
      mainImage: img3,
      new_price: 60.0,
      gender: "men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      availableSizes: {
        S: 4,
        M: 8,
        L: 10,
        XL: 6,
        XXL: 3
      }
    },
    {
      id: 4,
      name: "High-Waist Tailored Trousers",
      images: [img4,img4,img4,img4],
      mainImage: img4,
      new_price: 70.0,
      gender: "women",
      sizes: ["XS", "S", "M", "L"],
      availableSizes: {
        XS: 3,
        S: 7,
        M: 9,
        L: 5
      }
    },
    {
      id: 5,
      name: "Bohemian Style Summer Dress",
      images: [img5,img5,img5,img5],
      mainImage: img5,
      new_price: 65.0,
      gender: "women",
      sizes: ["XS", "S", "M", "L", "XL"],
      availableSizes: {
        XS: 4,
        S: 8,
        M: 12,
        L: 6,
        XL: 3
      }
    },
    {
      id: 6,
      name: "Premium Cotton T-Shirt",
      images: [img6,img6,img6,img6],
      mainImage: img6,
      new_price: 30.0,
      gender: "men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      availableSizes: {
        S: 10,
        M: 15,
        L: 12,
        XL: 8,
        XXL: 5
      }
    },
    {
      id: 7,
      name: "Casual Linen Blazer",
      images: [img1_1, img1_2, img1_3, img1_4],
      mainImage: img1_1,
      old_price: 80.0,
      new_price: 65.0,
      gender: "men",
      sizes: ["S", "M", "L", "XL"],
      availableSizes: {
        S: 5,
        M: 8,
        L: 6,
        XL: 4
      }
    }
];

export default new_collections;

