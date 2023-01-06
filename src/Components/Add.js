import {useState} from 'react'

const Add = (props) => {
    const [movie, setMovie] = useState({title: '', runtime: '', review: '', img: '', link: ''})
    
    const handleChange = (event) => {
        setMovie({...movie, [event.target.name]: event.target.value} )
    }
    //event.movie.name
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(movie)
    }
    return (
        <><div className="containeradd">

            <form onSubmit={handleSubmit}>
                
                <h2 className="addDescription">Add New Movie</h2>
                <br/>
                <br/>
                <label className="titleadd" htmlFor='title'>Title:</label>
                <input type='text' name='title' onChange={handleChange} />

                <br />

                <label className="runtimeadd" htmlFor='runtime'>Runtime:</label>
                <input type='text' name='runtime' onChange={handleChange} />

                <br />

                <label className="reviewadd" htmlFor='review'>Review:</label>
                <input type='text' name='review' onChange={handleChange} />

                <br />

                <label className="imgadd" htmlFor='img'>Image Input:</label>
                <input type='text' name='img' onChange={handleChange} />

                <br />

                <label className="linkadd" htmlFor='link'>Trailer Link:</label>
                <input type='text' name='trailer' onChange={handleChange}value={movie.trailer}/>

                <br />
                <br />

                <input className="submitaddbtm" type='submit' />
            </form>

            <br/>
            
        <div className="carosize">
                <div id="carouselExampleFade" className="carousel slide carousel-fade $carousel-control-transition:opacity .5s ease mw-100" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/Elf-on-the-Shelf-49ScoutElfKazooBand-thumbnail.png" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDM3N15BMl5BanBnXkFtZTgwMzIzMzU2MzE@._V1_.jpg" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://i.etsystatic.com/35427494/r/il/382fc3/4135055235/il_1588xN.4135055235_8dif.jpg" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
    </div></>
    )
}
export default Add
