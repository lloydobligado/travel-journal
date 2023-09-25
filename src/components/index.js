import Pin from "../assets/icons/location.svg";
import London from "../assets/images/London.jpg";
import Japan from "../../assets/images/MiyajimaItsukushimaIslandJapan.jpg";
import Philippines from "../assets/images/London.jpg";
import Lisbon from "../../assets/images/Lisboa-Portugal-The-city-of-poets-and-old-trams.jpg";
import Algarve from "../../assets/images/Algarve-Portugal.jpg";
import Italy from "../../assets/images/La-Toscana-being-inside-a-movie.jpg";

const locations = [
  {
    id: 1,
    img: London,
    pin: Pin,
    country: "LONDON",
    link: "https://www.google.com/maps/place/London,+UK/@51.528607,-0.4312497,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw",
    destination: "London Bridge",
    date: {
      from: "12 Jan, 2021",
      to: "24 Jan, 2021",
    },
    description:
      "London Bridge is an iconic bridge in London that has spanned the River Thames since Roman times. It has played a significant role in London's history and has been the site of important events, such as the Peasants' Revolt and the Great Fire of London.",
  },
  {
    id: 2,
    img: Japan,
    pin: Pin,
    country: "JAPAN",
    link: "https://www.google.com/maps/place/Japan/@31.6629422,115.6465795,4z/data=!3m1!4b1!4m6!3m5!1s0x34674e0fd77f192f:0xf54275d47c665244!8m2!3d36.204824!4d138.252924!16zL20vMDNfM2Q",
    destination: "Miyajima Itsukushima",
    date: {
      from: "31 Feb, 2021",
      to: "24 Mar, 2021",
    },
    description:
      "Miyajima Itsukushima is a small sacred island in Hiroshima Bay, Japan. It's famous for its Torii gate that appears to float on water during high tide. The island also has historic landmarks, including the UNESCO World Heritage Site Itsukushima Shrine, and is known for its natural beauty with opportunities for outdoor activities.",
  },
  {
    id: 3,
    img: Philippines,
    pin: Pin,
    country: "PHILIPPINES",
    link: "https://www.google.com/maps/place/El+Nido,+Palawan/@11.2048334,118.8150154,10z/data=!3m1!4b1!4m6!3m5!1s0x33b65515ef5c9e0f:0xfc4e665b599b0455!8m2!3d11.1953602!4d119.4189097!16zL20vMDJodjVr",
    destination: "El Nido Palawan",
    date: {
      from: "10 Mar, 2021",
      to: "16 Apr, 2021",
    },
    description:
      "El Nido is a breathtaking destination in Palawan, Philippines, with over 50 white sand beaches, crystal-clear waters, and towering limestone cliffs. It's ideal for island hopping, snorkeling, and diving, and is home to diverse marine life such as sea turtles and manta rays. The town has a rich history and various accommodation options.",
  },
  {
    id: 4,
    img: Lisbon,
    pin: Pin,
    country: "PORTUGAL",
    link: "https://www.google.com/maps/place/Lisbon,+Portugal/@38.7437316,-9.2426055,12z/data=!3m1!4b1!4m6!3m5!1s0xd19331a61e4f33b:0x400ebbde49036d0!8m2!3d38.7222524!4d-9.1393366!16zL20vMDRsbGI",
    destination: "Lisboa Portugal",
    date: {
      from: "01 Jun, 2021",
      to: "30 Jun, 2021",
    },
    description:
      "Lisbon is a historic and vibrant city in Portugal, known for its colorful streets, stunning architecture, and traditional cuisine. It's home to UNESCO World Heritage Sites like the Belém Tower and the Jerónimos Monastery, and visitors can enjoy panoramic views from the São Jorge Castle or explore the city on yellow trams.",
  },
  {
    id: 5,
    img: Algarve,
    pin: Pin,
    country: "PORTUGAL",
    link: "https://www.google.com/maps/place/Faro+District,+Portugal/@37.2435917,-8.8547298,9z/data=!3m1!4b1!4m6!3m5!1s0xd0554ee55d1cfef:0x80e2652e12910e45!8m2!3d37.0179538!4d-7.930834!16zL20vMDFnZzg0",
    destination: "Algarve Portugal",
    date: {
      from: "15 Jul, 2021",
      to: "30 Jul, 2021",
    },
    description:
      "The Algarve in southern Portugal is famous for its stunning coastline, golden beaches, and picturesque towns. It's a popular destination for outdoor activities like surfing, sailing, and hiking, and visitors can explore historic landmarks like the Moorish Castle of Silves and the Roman ruins of Milreu, or take a boat tour of the Benagil Cave.",
  },
  {
    id: 6,
    img: Italy,
    pin: Pin,
    country: "ITALY",
    link: "https://www.google.com/maps/place/Tuscany,+Italy/@43.3287892,8.3880549,7z/data=!3m1!4b1!4m6!3m5!1s0x12d42b531080347b:0xbac6c3ba5b2059ab!8m2!3d43.7710513!4d11.2486208!16zL20vMDdrZzM",
    destination: "La Toscana",
    date: {
      from: "01 Sept, 2021",
      to: "30 Sept, 2021",
    },
    description:
      "Tuscany, in central Italy, is famous for its beautiful landscapes, historic cities, world-renowned wine, and delicious cuisine. Florence, Pisa, and Siena are iconic cities with unique history and cultural treasures. The picturesque countryside features rolling hills, olive groves, and vineyards for leisurely drives and scenic walks.",
  },
];

export default locations;
