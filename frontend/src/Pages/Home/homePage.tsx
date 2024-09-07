import './homePage.scss'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import pets from '../../Assets/Images/pets.jpg'

const Home = () => {
    const redirect = useNavigate()
  return (
    <div className='home'>
        <h1>Welcome to The Pet Store</h1>
        <Button variant='outlined' color='primary' onClick={()=> redirect("/products")}>
            Our Products
        </Button>

        <img src={pets} alt="pets" />
    </div>
  )
}

export default Home
