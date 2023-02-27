import "./styles/section-side-by-side.css";
import { Link } from "react-router-dom";


const SectionSideBySide = (props) => {
    let isList = (props.points) ? true : false;
    let ListElement;
    if (isList) {
        ListElement = props.points.map (cardItem => {
            return (
                <li index={cardItem.key}>{cardItem.point}</li>
            )}
        )
    }
    return (
        <section className="side-by-side" style={{flexDirection: props.fdRR}}>
            <div>
                <h2>{props.title}</h2>
                <p>
                    {props.para}
                </p>
                    
                {(isList) && <ul>{ListElement}</ul>}
                <Link to={props.link}>{ (props.btn) ? props.btn :"Learn More"}</Link>
            </div>
            <div className="side-img">
                <img src={props.img} alt={props.title} />
            </div>
        </section>
    );
}

export default SectionSideBySide;