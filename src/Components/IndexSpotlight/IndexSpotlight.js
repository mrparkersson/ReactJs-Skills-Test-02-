import data from '../../JSONFILES/artists.json'

const IndexSpotlight =()=>{
    return (
        <div>
            {data.map(elements => <div>

             <h1>{elements.text.h1}</h1>
             <h3>{elements.text.h3}</h3>
            </div>)}
        </div>
    )
};

export default IndexSpotlight;


