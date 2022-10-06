import { render, screen } from '@testing-library/react';
import Gallery from './gallery';

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
    array.push({
        id : 1337,
        imgSrc : "https://via.placeholder.com/200x150",
        description : 'test me',
        alt : 'last image',
        title : 'TEST TITLE'        
    });

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

test('renders full gallery correctly', () => {
    const rows = arrGenerator(24, 4);

    render(<Gallery data={rows}/>);
    const demoText = screen.queryAllByText('LOREM IPSUM');
    const lastImg = screen.queryByAltText('last image');
    expect(demoText[0]).toBeInTheDocument();
    expect(lastImg).toBeInTheDocument();
    expect(demoText.length).toBe(24);

  });
  