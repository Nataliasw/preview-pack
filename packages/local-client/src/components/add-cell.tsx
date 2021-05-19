import "./add-cell.css";
import { useActions } from "../hooks/use-actions";

interface AddCellProps {
  previousCellId: string | null;
}
const AddCell: React.FC<AddCellProps> = ({ previousCellId }) => {

  const { insertCellAfter } = useActions();
  return <div className="add-cell">
    <div className="add-buttons">
      <button
        className="button is-rounded is-danger is-small"
        onClick={() => insertCellAfter(previousCellId)}
      >
        <span className="icon is-small">
          <i className="fa fa-plus-square"></i>
        </span>
        <span>Add Cell</span>
      </button>
    </div>
    <div className="divider"></div>
  </div>
}

export default AddCell;