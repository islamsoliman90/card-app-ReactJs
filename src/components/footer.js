import Img1 from "../image/Facebook Icon.png";
import Img2 from "../image/GitHub Icon.png";
import Img3 from "../image/Instagram Icon.png";
import Img4 from "../image/Twitter Icon.png";
export default function Footer ()
{
    return (
        <footer>
            <img src={ Img1 } />
            <img src={ Img2 } />
            <img src={ Img3 } />
            <img src={ Img4 } />
        </footer>
    );
}