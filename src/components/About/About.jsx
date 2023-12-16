import TopInfo from "../common/TopInfo/TopInfo"
import img from "../../images/title/about.png"

const About = () => {
    return (
        <>
            <div>
                <TopInfo data={{image: img, direction: 'About'}}/>
            </div>
        </>
    )
}

export default About