import { render, screen, fireEvent } from '@testing-library/react';
import Row from './Row';

test('Clicking off popup behaving correctly', () => {
    let test = [{
        id : 1337,
        imgSrc : "https://via.placeholder.com/200x150",
        description : 'test me first',
        alt : '1st image',
        title : 'TEST TITLE 1'        
    },
    {
        id : 1338,
        imgSrc : "https://via.placeholder.com/200x150",
        description : 'test me last',
        alt : '2nd image',
        title : 'TEST TITLE 2'        
    }]
    render(<Row data={test}/>);
    const firstImg = screen.queryByAltText('1st image');
    const secondImg = screen.queryByAltText('2nd image');
    expect(firstImg).toBeInTheDocument();
    expect(secondImg).toBeInTheDocument();
    expect(screen.queryByText('test me first')).not.toBeInTheDocument();
    fireEvent.click(firstImg);
    expect(screen.queryByText('test me first')).toBeInTheDocument();
    fireEvent.click(secondImg);
    expect(screen.queryByText('test me first')).not.toBeInTheDocument();
    expect(screen.queryByText('test me last')).toBeInTheDocument();
  });

  test('Row Rendering Correctly', () => {
    let test2 = [];
    for(let i=0; i < 4; i++){
        test2.push({
            id : i,
            imgSrc : "https://via.placeholder.com/200x150",
            description : 'test me',
            alt : 'image',
            title : 'TEST TITLE' 
        });
    };
    console.log(test2);
    render(<Row data={test2}/>);
    expect(screen.queryAllByAltText('image').length).toBe(4);
  });