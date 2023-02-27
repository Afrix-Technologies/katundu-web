import './styles/hero-container.css';

const HeroContainer = (props) => {

    return (
        <div className="hero-container" >
            <div className='text'>
                <h2>{props.title}</h2>
            </div>
            <img src={props.imgbg} alt={props.title}/>
        </div>
    );
}

export default HeroContainer;