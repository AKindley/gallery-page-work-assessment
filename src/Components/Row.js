import Column from "./Column";
import './Row.css';
const Row = (props) => {
    const {data} = props;
    return (
        <div className="Row">
            {data.map(({id, imgSrc, description, alt, title}) => 
            (<Column key={id} imgSrc={imgSrc} desc={description} alt={alt} title={title}/>))}
        </div>
    )
};

export default Row;