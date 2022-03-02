import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./itemRecomendation.css";
export default function ItemRecomendation({ avatar, name, description }) {
  return (
    <div className="item__recomendation">
      <Avatar src={avatar} className="avatar">
        {name[0].toUpperCase()}
      </Avatar>
      <div className="recomendation_description">
        <h5>{name}</h5>
        <p>{description}</p>
        <button>
          <AddIcon />
          Follow
        </button>
      </div>
    </div>
  );
}
