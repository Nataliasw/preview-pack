import "./cell-list.css";
import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import Logo from "./logo";
import { useActions } from "../hooks/use-actions";
import Footer from "./footer";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    })
  });

  const { fetchCells, saveCells } = useActions();
  useEffect(() => {
    fetchCells();
  }, []);


  const renderedCells = cells.map(cell =>
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />

    </Fragment>
  )

  const firstId = "abd43"
  return <div className="cell-list">
    <Logo />
    <Footer />
    <div className={cells.length === 0 ? "force-visible" : ""}>
      <AddCell previousCellId={firstId} />
    </div>
    {renderedCells}

  </div>
}

export default CellList;