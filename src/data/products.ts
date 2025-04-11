import { Product } from '../types/product';
import Makhana from "../images/Makhana.png";
import Gooseberry from "../images/Gooseberry.png";
import Almonds from "../images/Almond.png";
import Cashews from "../images/Cashew.png";
import MakhanaModel from "../assets/models/Makhana.glb";
import AlmondModel from "../assets/models/Almond.glb"
import CashewModel from "../assets/models/Cashew.glb"
import GooseBerryModel from "../assets/models/GooseBerry.glb"

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Makhana",
    price: {
      
      "250g": 7.49,
      "500g": 13.99,
      "1kg": 26.99
    },
    image: Makhana, 
    description: "Crunchy, roasted organic makhana—perfect for guilt-free snacking.",
    category: "Snacks",
    benefits: ["Low in calories", "High in protein", "Gluten-free"],
    origin: "India",
    organic: true,
     background:"#fff8e6",
     model: MakhanaModel,
  },
  {
    id: 2,
    name: "Gooseberry",
    model: GooseBerryModel,
    price: {
      
      "250g": 8.49,
      "500g": 15.49,
      "1kg": 30.89
    },
    image: Gooseberry, 
    description: "Sun-dried organic gooseberries packed with Vitamin C and antioxidants.",
    category: "Herbal Supplements",
    benefits: ["Boosts immunity", "Good for digestion", "Rich in antioxidants"],
    origin: "India",
    organic: true,
     background:"#e8f6d0"
  },
  {
    id: 3,
    name: "Organic Almonds",
    price: {
      "250g": 7.99,
      "500g": 14.99,
      "1kg": 27.99
    },
    image: Almonds, 
    description: "Versatile and nutritious almonds in your choice of raw, soaked, or roasted.",
    category: "Nuts",
    benefits: ["Heart-healthy", "High in protein", "Rich in vitamin E"],
    origin: "California, USA",
    organic: true,
    background:"#FFF2D8",
    model: AlmondModel,
  },
  {
    id: 4,
    name: "Organic Cashews",
    price: {
      "250g": 6.99,
      "500g": 12.99,
      "1kg": 23.99
    },
    image: Cashews, 
    description: "Creamy and crunchy cashews, perfect as snacks or for cooking.",
    category: "Nuts",
    benefits: ["Rich in healthy fats", "Boosts energy", "Good for heart health"],
    origin: "India",
    organic: true,
     background:"#fff9ec",
     model: CashewModel,
  },
 

];
