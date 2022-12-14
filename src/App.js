import './App.css';
import Gallery from './Components/Gallery';

function App() {
  
  const arrGenerator = (n, col) => { //For demonstrating dynamic component creation (number of pictures, columns per row)
    let array = [];
    let data = [];
    let src = ''
    for(let i=0; i < n; i++){
      if(Math.floor(Math.random() * 2) === 1){
        src = "https://via.placeholder.com/150x200";
      }
      else {
        src = "https://via.placeholder.com/200x150";
      }
      array.push({
        id : i+10000,
        imgSrc : src,
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare in nisi eget sodales. Vestibulum ac quam et ligula condimentum lacinia in at orci. Nunc blandit turpis euismod nisi pharetra rhoncus. Mauris elementum sapien quis libero volutpat iaculis.',
        alt : 'img',
        title : 'LOREM IPSUM'
      });
    }
    let j = 0;
        while(array.length){
            data.push({
                id: j,
                row: array.splice(0, col)
            });
            j++;
        }
    return(data);
  };

  const rows = arrGenerator(57, 4); //The intention with this demo data is to show the dynamic components. Realistically this would be imported or fetched data. 
  return (
    <div className='App'>
      <Gallery data={rows}/>
    </div>
  );
}

export default App;
