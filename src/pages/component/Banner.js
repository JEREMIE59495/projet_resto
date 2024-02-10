import '../../styles/banner.css'
import logo from '../../assets/logo.png'
function Banner() {
    return (
    <div className='banner'>
        <img src={logo} alt='Le resto' className='resto-logo' />
    <h1> Le restaurant de ...</h1>
</div>
)}

export default Banner;