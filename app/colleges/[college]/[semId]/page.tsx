"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { notFound, useSearchParams } from "next/navigation";

type Student = {
  id: number;
  studentName: string;
  rollNo: string;
  sgpa: number;
  subjects: string[];
  semester: number;
};

const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "NO",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "studentName",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("studentName")}</div>,
  },
  {
    accessorKey: "rollNo",
    header: "Roll No",
    cell: ({ row }) => <div>{row.getValue("rollNo")}</div>,
  },
  {
    accessorKey: "sgpa",
    header: "SGPA",
    cell: ({ row }) => <div>{row.getValue("sgpa")}</div>,
  },
  {
    accessorKey: "subjects",
    header: "Subjects Score",
    cell: ({ row }) => (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Subjects</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="h-72 rounded-md border">
              {(row.getValue("subjects") as string[]).map(
                (subject: string, index: number) => {
                  const [name, grade] = subject.split(":");
                  return (
                    <DropdownMenuItem key={index}>
                      <li>
                        {name} : {grade}
                      </li>
                    </DropdownMenuItem>
                  );
                }
              )}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];

export default function StudentList({ params }: { params: { college: string, semId: string } }) {
  const searchParams = useSearchParams()
  const { college, semId } = params;
  const semesterId = parseInt(semId, 10);
  const batch = searchParams.get("batch");
  const year = searchParams.get("year");
  const [students, setStudents] = useState<Student[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 40 });

  if (isNaN(semesterId)  || !batch || !year ) {
    notFound();
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`/api/data/${college}?semId=${semesterId}&batch=${batch}&year=${year}`);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [college, semesterId]);

  const table = useReactTable({
    data: students,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
  });

  return (
    <div className="w-full p-6 mt-14">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by name..."
          value={
            (table.getColumn("studentName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("studentName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto m-3">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id === "studentName" ? "Name" : column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Loading Data Wait a Sec...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} Result(s) Found.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
