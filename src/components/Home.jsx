import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>Home
        <p>
        <Link to="/signup">Go To Sign Up </Link>
        </p>
        </div>
    )
}

export default Home;