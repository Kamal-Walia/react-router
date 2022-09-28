import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>Home
        <p>
        <Link to="/login">Go To Login</Link>
        </p>
        </div>
    )
}

export default Home;