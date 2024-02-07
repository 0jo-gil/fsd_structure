import { Column, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { TableBody, TableHeader } from ".";

type TableProps<T extends object> = {
    columns: Column<T>[];
    data: T[];
}

export function Table<T extends object>({columns, data}: TableProps<T>) {
    const {getHeaderGroups, getRowModel} = useReactTable<T>({data, columns, getCoreRowModel: getCoreRowModel()})

    return (
        <table>
            <TableHeader headerGroup={getHeaderGroups()} />
            <TableBody rowModel={getRowModel()}/>
        </table>
    )
}