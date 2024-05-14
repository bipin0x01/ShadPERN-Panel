"use client";
import { useMemo } from "react";

import { IPagination } from "@/interfaces";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TablePagination({
  total,
  pagination,
  setPagination,
}: {
  total: number;
  pagination: IPagination;
  setPagination: (pagination: IPagination) => void;
}) {
  const { current, pageSize } = pagination;

  // if (total <= pageSize) return null;

  const onNextPage = () => {
    setPagination({
      ...pagination,
      current: current + 1,
      skip: current * pageSize,
    });
  };

  const onPrevPage = () => {
    setPagination({
      ...pagination,
      current: current - 1,
      skip: (current - 2) * pageSize,
    });
  };

  const totalPages = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize]
  );

  const isNextDisabled = useMemo(
    () => current === totalPages,
    [current, totalPages]
  );

  const isPrevDisabled = useMemo(() => current === 1, [current]);

  return (
    <div className="flex text-sm items-center gap-3 justify-between">
      <p>
        {current}-{totalPages} of {total}
      </p>

      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={onPrevPage}
            disabled={isPrevDisabled}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            variant="ghost"
            onClick={onNextPage}
            disabled={isNextDisabled}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <select
          value={pageSize}
          onChange={(e) =>
            setPagination({
              ...pagination,
              pageSize: Number(e.target.value) as IPagination["pageSize"],
              current: 1,
              skip: 0,
            })
          }
          className="border border-gray-300 rounded-md px-3 py-1"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
