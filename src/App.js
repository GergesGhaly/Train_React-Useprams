import Home from './Home';
import './App.css';
import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Fullcard from './Fullcard';

function App() {

  const [search, setSearch] = useState('')

  const [names, setNames] = useState([
  {id:1,
  namee:'Arrangement',
  num:"White flowers have a certain timelessness and elegance, perfect for expressing your heartfelt condolences during times of sorrow. Pristine white roses, lilies and snapdragons are hand-gathered by our florists with touches of lush greenery inside a sleek cylinder vase. It’s a classic and comforting gesture that conveys the purity of your sentiment",
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/1126px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg"},
  {id:2,
     namee:'Dish Garden',
     num:"A special gift of remembrance for a life so beautifully lived. Our lush green dish garden arrives in an elegant container adorned with butterflies and textured gold details. Featuring a touching sentiment on the front, it’s an elegant tribute to someone deeply loved. Add to your gesture with a lovely angel keepsake.",
     img:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"},
  {id:3,
     namee:'Cherished ',
     num:"Memories are timeless treasures of the heart, meant to be cherished. Our striking, all-white sympathy arrangement of roses, snapdragons, alstroemeria and more, elegantly designed by hand in a graceful cylinder vase, is a touching tribute to a life well lived and the memories that will be held dear forever.",
     img:"https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"},
  {id:4,
     namee:'White Rose',
     num:"Convey your deepest sympathies with our elegant all-white arrangement. One dozen lovely roses are paired with five calla lilies, creating an expression of graceful beauty during this difficult time.",
     img:"https://thumbs.dreamstime.com/b/purple-flower-2212075.jpg"},
  {id:5,
     namee:'Healing Tears™ Blue & White',
     num:"Soothe their tears as they mourn the loss of a loved one with the serenity of blue and white. Our sympathy arrangement of fresh blue delphinium, white roses and lilies, expertly gathered together in a clear glass cube lined with Ti leaf ribbon, makes for an exquisite gesture of comfort and healing. ",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nF97CSsqJIjQQuBJX5M0wHU4zQYfKsQX2A&usqp=CAU"}
     
]
)


const [admin, setAdmin] = useState(true)


const Removhandel=(e)=>{
console.log(e)
  const delet = names.filter((el)=>el.id !== e)
  setNames(delet)
}

// const Add = (data)=>{ 
//   setNames([...names,data])
// console.log(data)
// }


  return (
   
    <div className="App"> 
      <Routes>
      <Route  path="/" element={<Home  setSearch={setSearch} names={names} search={search} Removhandel={Removhandel} admin={admin}/> }/>
      
      <Route path="/cards/:id" element={<Fullcard names={names} />} />
     </Routes>

    
      </div>   
        
  );
}

export default App;
