import React from 'react';
import {
    createColumnHelper,
    useReactTable,
} from '@tanstack/react-table'
import {TableDataProps, TableProps} from "@/components/Table/type";

const Table = ({data}: TableProps) => {
    const columnHelper = createColumnHelper<TableDataProps>();
    return (
        <table>
            <thead></thead>
            <tbody></tbody>
            <tfoot></tfoot>
        </table>
    );
};

export default Table;
