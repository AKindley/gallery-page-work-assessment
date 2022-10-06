import { render, screen, fireEvent } from '@testing-library/react';
import Column from './Column';

test('Column & Popup rendering correctly', () => {
    const test = {
        id : 1337,
        imgSrc : "https://via.placeholder.com/200x150",
        description : 'test me',
        alt : 'last image',
        title : 'TEST TITLE'        
    }
    render(<Column key={test.id} imgSrc={test.imgSrc} desc={test.description} alt={test.alt} title={test.title}/>);
    const lastImg = screen.queryByAltText('last image');
    expect(lastImg).toBeInTheDocument();
    fireEvent.click(lastImg);
    expect(screen.queryByText('test me')).toBeInTheDocument();
    fireEvent.click(lastImg);
    expect(screen.queryByText('test me')).not.toBeInTheDocument();
  });