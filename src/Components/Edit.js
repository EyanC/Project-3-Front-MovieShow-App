import {useState} from 'react'

    const Edit = (props) => {
        const [movie, setMovie] = useState({...props.movie})
        

        const handleChange = (event) => {
            setMovie({...movie, [event.target.name]: event.target.value})

        }
        const handleSubmit = (event) => {
            event.preventDefault()
            props.handleEdit(movie)
        }

        return (
            <details>
                <summary className="edittab">Edit Movie</summary>
                <form onSubmit={handleSubmit}>

                    <label className="edittitle" htmlFor='title'>Title:</label>
                    <input type='text' name='title'onChange={handleChange}value={movie.title}/>

                    <br/>

                    <label className="editruntime" htmlFor='runtime'>Runtime:</label>
                    <input type='text' name='runtime' onChange={handleChange}value={movie.runtime}/>
                    
                    <br/>


                    <label className="editreview" htmlFor='review'>Review:</label>
                    <input type='text' name='review' onChange={handleChange}value={movie.review}/>

                    <br/>

                    <label className="editimg"  htmlFor='img'>Img:</label>
                    <input type='text' name='img' onChange={handleChange}value={movie.img}/>

                    <br/>

                    <label className="editlink"  htmlFor='link'>Link:</label>
                    <input type='text' name='link' onChange={handleChange}value={movie.trailer}/>

                    <br/>
                    <input className="editbtn" type='submit'/>
                </form>
            </details>
        )
    }

export default Edit
