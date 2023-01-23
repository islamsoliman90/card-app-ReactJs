import Imgemail from "../image/email.png";
import Imgelinkdin from "../image/linkdin.png";
import Img from "../image/Rectangle 90.png";
export default function Main ()
{
    return (
        <main >
            <img src={ Img } />
            <h2>Laura Smith</h2>
            <h3>Frontend Developer</h3>
            <h5>laurasmith.website</h5>
            <div className="btn">
                <span><img src={ Imgemail } />Email</span>
                <span><img src={ Imgelinkdin } /> LinkedIn</span>
            </div>
            <div className="info">
                <div className="section">
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="section">
                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </main>
    );
};
