import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const ImageCard = props => {

    let {imgSrc} = props.data;

  return (

    <Card className="p-0 overflow-hidden w-100 h-100 " style={{borderRadius: "0", border: "none"}}>
        <div className="overflow-hidden p-0">
            <Card.Img variant="top" src={imgSrc} style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}/>
        </div>
    </Card>
  );

};

export default ImageCard;