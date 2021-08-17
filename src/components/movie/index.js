
const Movie = (props) => {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster,
    } = props

    return(
        
        <div id = {imdbID}className="card">
            <div className="card-image waves-effect waves-block waves-light">

                {
                    Poster === 'N/A' ? 
                        <img className="activator" src={`
                            https://via.placeholder.com/468x650/000000/FFFFFF?text=${Title}`}/> 
                    :   <img className="activator" src={Poster}/> 
                    
                }
              
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right">{Type}</i></span>
                <p>{Year} <span className="right"></span></p>
            </div>
        </div>
    )
}

export default Movie