import { getIcon } from "../../../../constants";
import UrgentPriority from "../../../../assets/SVG - Urgent Priority grey.svg";
import Name from "../Name/Name";
import "./Card.css";
export default function Card({
  title,
  id,
  status,
  tag,
  isStatus,
  userDetail,
  isName,
}) {
  return (
    <div className="card">
      <div className="card-title">
        <p>{id}</p>
        {!isName && (
          <Name name={userDetail.name} isAvailable={userDetail.available} />
        )}
      </div>
      <div className="card-description">
        <p>{!isStatus && <img src={getIcon(status)} alt="icon" />}</p>
        <p>{title}</p>
      </div>
      {tag.length > 0 && (
        <div className="card-feature">
          <img src={UrgentPriority} alt="Urgent Priority Icon" />
          <div className="feature-request">
            <div className="circle-grey">&nbsp;</div>
            <p>{tag[0]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
