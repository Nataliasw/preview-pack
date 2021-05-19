import { Cell } from "../state";
import CodeCell from "./code-cell";
import ActionBar from "./action-bar";
import "./cell-list-item.css";

interface CellListItemProps {
  cell: Cell
}


const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {

  let child: JSX.Element;
  child = <>
    <div className="action-bar-wrapper"></div>
    <ActionBar id={cell.id} />
    <CodeCell cell={cell} />
  </>


  return <div className="cell-list-item">
    {child}

  </div>
}

export default CellListItem;