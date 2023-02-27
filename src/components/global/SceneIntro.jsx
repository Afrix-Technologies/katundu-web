import "./styles/scene-intro.css";

const SceneIntro = (props) => {
    return (
        <section className="scene-intro">
            <header className="section-header">
                <h2>{props.title}</h2>
            </header>
            <div>{props.para}</div>
        </section>
    );
}

export default SceneIntro;