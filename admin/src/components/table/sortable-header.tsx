import { MoveUp, MoveDown, ArrowUpDown } from "lucide-react";
import { useMemo } from "react";

import { IColumnSort, ITableColumn } from "@/interfaces";
import { TableHead } from "../ui/table";

const SortableHeader = <T,>({
  column,
  sort = null,
  onSort,
}: {
  column: ITableColumn<T>;
  sort: IColumnSort | null;
  onSort?: (sort: IColumnSort | null) => void;
}) => {
  const { title, sort: sortKey, key, width } = column;

  const handleSort = () => {
    if (!onSort) return;

    if (!column.sort) return;

    if (sort?.field !== column.sort) {
      return onSort({
        field: column.sort as string,
        order: "ASC",
      });
    }

    // If not sort, add new sort with asc order
    if (!sort) {
      return onSort({
        field: column.sort as string,
        order: "ASC",
      });
    }

    // If sort is desc, remove sort and add new sort with desc order
    if (sort.order === "ASC") {
      return onSort({
        field: column.sort as string,
        order: "DESC",
      });
    }

    // if nothing match, remove sort
    return onSort(null);
  };

  const renderSort = () => {
    if (!sortKey) return null;

    if (sort?.field !== column.sort) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }

    if (sort?.order === "ASC") {
      return <MoveUp className="ml-2 h-4 w-4" />;
    }

    if (sort?.order === "DESC") {
      return <MoveDown className="ml-2 h-4 w-4" />;
    }

    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  const isSortActive = useMemo(() => {
    if (!sort) return false;

    if (!sortKey) return false;

    return sort.field === column.sort;
  }, [column.sort, sort, sortKey]);

  return (
    <TableHead
      key={key}
      className={
        "text-md font-semibold items-center cursor-pointer" +
        (isSortActive ? " text-primary" : "")
      }
      onClick={handleSort}
      style={{ width }}
    >
      <div className="flex items-center">
        {title}

        {renderSort()}
      </div>
    </TableHead>
  );
};

export default SortableHeader;
