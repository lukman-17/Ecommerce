import { AiFillStar } from "react-icons/ai";
const data = [
    {
      img: "https://images.vegnonveg.com/resized/700X573/9817/air-force-1-low-retro-qs-whitewhite-university-gold-64e5988d9696f.jpg",
      title: "AIR FORCE 1 LOW RETRO",
      star: <AiFillStar className="rating-star" />,
      reviews: "(133 reviews)",
      prevPrice: 12000,
      newPrice: 8000,
      company: "Nike",
      color: "white",
      category: "sneakers",
      id:1
      
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9693/blazer-mid-77-prm-summit-whiteblack-light-silver-64b14332dc6b8.jpg",
      title: "BLAZER MID '77 PRM 'SUMMIT ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(200 reviews)",
      prevPrice: "11000",
      newPrice: "8000",
      company: "Nike",
      color: "white",
      category: "high ankel",
      id:2
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9753/air-jordan-1-mid-sky-j-purplesky-j-purple-white-64c74d4f86f15.jpg",
      title: "AIR JORDAN 1 MID 'SKY J",
      star: <AiFillStar className="rating-star" />,
      reviews: "(150 reviews)",
      prevPrice: "25000",
      newPrice: "20000",
      company: "Nike",
      color: "blue",
      category: "high ankel",
      id:3
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9737/crazy-8-core-blackftwr-whitecollegiate-purple-64c0d12493996.jpg",
      title: "CRAZY 8 'CORE BLACK/FTWR",
      star: <AiFillStar className="rating-star" />,
      reviews: "(90 reviews)",
      prevPrice: "15000",
      newPrice: "9000",
      company: "Adidas",
      color: "black",
      category: "high ankel",
      id:4 
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9731/ozweego-tr-core-blackcore-blackoff-white-64c0bce9710ed.jpg",
      title: "OZWEEGO TR 'CORE BLACK",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      prevPrice: "14000",
      newPrice: "11000",
      company: "Adidas",
      color: "black",
      category: "sports",
      id:5
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9800/forum-mid-greenftwr-whitecream-white-64d6273f2cfed.jpg",
      title: "FORUM MID 'GREEN",
      star: <AiFillStar className="rating-star" />,
      reviews: "(143 reviews)",
      prevPrice: "23000",
      newPrice: "9000",
      company: "Adidas",
      color: "green",
      category: "high ankel",
      id:6
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9608/nike-terminator-high-whitegame-royal-649bcd6360e81.jpg",
      title: "TERMINATOR HIGH 'BLUE",
      star: <AiFillStar className="rating-star" />,
      reviews: "(111 reviews)",
      prevPrice: "22500",
      newPrice: "18500",
      company: "Nike",
      color: "blue",
      category: "high ankel",
      id:7
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9052/nike-terminator-high-whiteuniversity-red-64056ba8508a1.jpg",
      title: "TERMINATOR HIGH'RED",
      star: <AiFillStar className="rating-star" />,
      reviews: "(140 reviews)",
      prevPrice: "23000",
      newPrice: "19000",
      company: "Nike",
      color: "red",
      category: " high ankel",
      id:8
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9626/dunk-hi-retro-bttys-whitevelvet-brown-white-64a7d8f731893.jpg",
      title: "DUNK HI RETRO BTTYS",
      star: <AiFillStar className="rating-star" />,
      reviews: "(150 reviews)",
      prevPrice: "20000",
      newPrice: "15000",
      company: "Nike",
      color: "brown",
      category: "high ankel",
      id:9
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9795/ex89-whiteport-royal-64d35eec9bd6a.jpg",
      title: "EX89 'WHITE/PORT ROYAL'",
      star: <AiFillStar className="rating-star" />,
      reviews: "(90 reviews)",
      prevPrice: "10000",
      newPrice: "7000",
      company: "Asics",
      color: "white",
      category: "sneakers",
      id:10
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9799/ex89-mt-whitespice-latte-64d360af75980.jpg",
      title: "EX89 MT 'WHITE/SPICE LATTE",
      star: <AiFillStar className="rating-star" />,
      reviews: "(100 reviews)",
      prevPrice: "12000",
      newPrice: "9000",
      company: "Asics",
      color: "white",
      category: "high ankel",
      id:11
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9448/modern-cl-whiteivy-64705daea2cd1.jpg",
      title: "GEL-NYC 'WHITE/IVY'",
      star: <AiFillStar className="rating-star" />,
      reviews: "(98 reviews)",
      prevPrice: "12000",
      newPrice: "9000",
      company: "Asics",
      color: "black",
      category: "sports",
      id:12
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/5128/one-star-pro-blackblackwhite-63aaaaa8dab5f.jpg",
      title: "ONE STAR PRO ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(60 reviews)",
      prevPrice: "6000",
      newPrice: "5000",
      company: "Converse",
      color: "black",
      category: "sneakers",
      id:13
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9797/gel-lyte-iii-og-mustard-seedcream-64d3697c2f7a3.jpg",
      title: "GEL-LYTE III OG'CREAM",
      star: <AiFillStar className="rating-star" />,
      reviews: "(78 reviews)",
      prevPrice: "12000",
      newPrice: "9000",
      company: "Asics",
      color: "black",
      category: "sports",
      id:14
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9777/chuck-70-hi-black-64cce42143434.jpg",
      title: "CHUCK 70 HI 'OBSIDIAN",
      star: <AiFillStar className="rating-star" />,
      reviews: "(149 reviews)",
      prevPrice: "7000",
      newPrice: "4000",
      company: "Converse",
      color: "blue",
      category: "high ankel",
      id:15
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9768/chuck-70-marquis-hi-coffee-64ccdae170df5.jpg",
      title: "CHUCK 70 AT-CX HI ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(220 reviews)",
      prevPrice: "7000",
      newPrice: "4000",
      company: "Converse",
      color: "black",
      category: "high ankel",
      id:16
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9471/chuck-70-at-cx-hi-blackegretblack-6470993c371c0.jpg",
      title: "AS-1 PRO OX 'WHITE/FIR ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(57 reviews)",
      prevPrice: "1000",
      newPrice: "6000",
      company: "Converse",
      color: "black",
      category: "high ankel",
      id:17
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9457/as-1-pro-ox-whitefirwhite-64743aec793ea.jpg",
      title: "CHUCK 70 MARQUIS",
      star: <AiFillStar className="rating-star" />,
      reviews: "(168 reviews)",
      prevPrice: "7000",
      newPrice: "4000",
      company: "Converse",
      color: "white",
      category: "sneakers",
      id:18
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9370/2002r-navy-644f490777031.jpg",
      title: "2002R 'NAVY'",
      star: <AiFillStar className="rating-star" />,
      reviews: "(143 reviews)",
      prevPrice: "19000",
      newPrice: "16000",
      company: "New Balance",
      color: "blue",
      category: "sports",
      id:19
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/7723/vision-racer-sunset-multi-633694d2ec366.jpg",
      title: "VISION RACER SUNSET",
      star: <AiFillStar className="rating-star" />,
      reviews: "(182 reviews)",
      prevPrice: "15000",
      newPrice: "9000",
      company: "New Balance",
      color: "black",
      category: "sports",
      id:20
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/8932/574-multi-63e0da522ae18.jpg",
      title: "5740 'MULTI'",
      star: <AiFillStar className="rating-star" />,
      reviews: "(122 reviews)",
      prevPrice: "12000",
      newPrice: "10000",
      company: "New Balance",
      color: "blue",
      category: "sports",
      id:21
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9320/327-dark-mercury-643908011f117.jpg",
      title: "327 'DARK MERCURY'",
      star: <AiFillStar className="rating-star" />,
      reviews: "(45 reviews)",
      prevPrice: "9000",
      newPrice: "6000",
      company: "New Balance",
      color: "blue",
      category: "sports",
      id:22
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9585/ozelia-savannahsavannahsavannah-6495951f26b85.jpg",
      title: "OZELIA 'SAVANNAH",
      star: <AiFillStar className="rating-star" />,
      reviews: "(221 reviews)",
      prevPrice: "15000",
      newPrice: "9000",
      company: "Adidas",
      color: "white",
      category: "sports",
      id:23
    },
  
    {
      img: "https://images.vegnonveg.com/resized/700X573/9743/stan-smith-relasted-ftwr-whitegreenoff-white-64c249b735194.jpg",
      title: "STAN SMITH WHITE",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      prevPrice: "17000",
      newPrice: "13000",
      company: "Adidas",
      color: "white",
      category: "sneakers",
      id:24
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9082/nike-dunk-hi-retro-bttys-stadium-greenwhite-stadium-green-white-640b266181d36.jpg",
      title: "DUNK HI RETRO BTTYS",
      star: <AiFillStar className="rating-star" />,
      reviews: "(171 reviews)",
      prevPrice: "10500",
      newPrice: "8000",
      company: "Nike",
      color: "green",
      category: "high ankel",
      id:25
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9593/forum-low-cloud-whitegreengum-3-649985edcd27d.jpg",
      title: "FORUM LOW 'CLOUD",
      star: <AiFillStar className="rating-star" />,
      reviews: "(100 reviews)",
      prevPrice: "14000",
      newPrice: "12000",
      company: "Adidas",
      color: "green",
      category: "sneakers",
      id:26
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9557/air-force-1-mid-07-lv8-blackcoconut-milk-light-silver-648c218245189.jpg",
      title: "AIR FORCE 1 MID '07 LV8",
      star: <AiFillStar className="rating-star" />,
      reviews: "(110 reviews)",
      prevPrice: "17000",
      newPrice: "15000",
      company: "Adidas",
      color: "red",
      category: "high ankel",
      id:27
    },
    {
      img: "https://images.vegnonveg.com/resized/700X573/9594/forum-low-cl-redoff-whitegum-3-649986432c677.jpg",
      title: "FORUM LOW CL",
      star: <AiFillStar className="rating-star" />,
      reviews: "(120 reviews)",
      prevPrice: "13000",
      newPrice: "10500",
      company: "Adidas",
      color: "red",
      category: "sneakers",
      id:28
    },
   
    {
      img: "https://images.vegnonveg.com/resized/700X573/9003/ex89-whiteclassic-red-63f3217e661e1.jpg",
      title: "EX89",
      star: <AiFillStar className="rating-star" />,
      reviews: "(156 reviews)",
      prevPrice: "9000",
      newPrice: "7500",
      company: "Asics",
      color: "red",
      category: "sneakers",
      id:29
    },

    {
      img: "https://images.vegnonveg.com/resized/700X573/7982/ex89-whiteillusion-blue-637c62b7e8223.jpg",
      title: "EX89",
      star: <AiFillStar className="rating-star" />,
      reviews: "(176 reviews)",
      prevPrice: "9000",
      newPrice: "7500",
      company: "Asics",
      color: "blue",
      category: "sneakers",
      id:30
    },


  ];
  export default data;