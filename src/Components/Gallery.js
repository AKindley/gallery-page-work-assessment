import Row from "./Row";
import './Gallery.css'

const Gallery = (props) => {
    const {data} = props;
    return (
        <div className='Gallery'>
            <div><h1>Gallery</h1></div>
            {data.map(({id, row}) => (<Row key={id} data={row}/>))}
        </div>
    )
};

export default Gallery;