import {
  Table as TableComponent,
  TableBody,
  TableCell,
  TableHeader as TableHeaderComponent,
  TableRow,
} from "@/components/ui/table";

import { ITableColumn, ITableProps } from "@/interfaces";
import TableHeader from "./header";
import SortableHeader from "./sortable-header";
import { Ghost } from "lucide-react";

export const Table = <T,>({
  data,
  columns,
  sort = null,
  onSort,
  loading = false,
  clickable = false,
  onRowClick,
}: ITableProps<T>) => {
  //function to render column
  const renderColumn = (
    column: ITableColumn<T>,
    record: any
  ): React.ReactNode => {
    const recordValue = column.dataIndex ? record[column.dataIndex] : null;

    if (column.render) {
      return column.render(recordValue, record);
    }

    return recordValue;
  };

  const onRowClickHandler = (record: any) => {
    if (clickable === false) return;

    if (onRowClick) {
      return onRowClick(record);
    }
  };

  const renderBody = () => {
    if (loading) {
      return (
        <TableRow key="loading">
          <TableCell colSpan={columns.length} width="full">
            <div className="flex flex-col w-full justify-center items-center h-96">
              <p>Loading.....</p>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (data.length === 0) {
      //TODO: Add empty state component here
      return (
        <TableRow key="loading">
          <TableCell colSpan={columns.length} width="full">
            <div className="flex flex-col w-full justify-center items-center h-96 gap-4">
              <Ghost className="w-20 h-20" />
              <p className="text-foreground">No data found for this query</p>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    return data.map((row, i) => (
      <TableRow
        key={`row-${i}`}
        className={clickable ? "hover:bg-border hover:cursor-pointer" : ""}
        onClick={() => onRowClickHandler(row)}
      >
        {columns.map((column) => (
          <TableCell
            key={column.key}
            style={{ width: column.width }}
            className="text-sm text-foreground max-w-0 h-[40px] py-1"
            // prevent click event on action column
            onClick={(e) => {
              if (column.key === "action") e.stopPropagation();
            }}
          >
            {renderColumn(column, row)}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <>
      <div className="flex flex-col border p-2 rounded-md w-full">
        <TableComponent>
          <TableHeaderComponent>
            <TableRow>
              {columns.map((column) => (
                <SortableHeader
                  key={column.key}
                  column={column}
                  sort={sort}
                  onSort={onSort}
                />
              ))}
            </TableRow>
          </TableHeaderComponent>
          <TableBody>{renderBody()}</TableBody>
        </TableComponent>
      </div>
    </>
  );
};

export default Table;

export { TableHeader };
