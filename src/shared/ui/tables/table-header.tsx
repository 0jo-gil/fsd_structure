import {ColumnHelper} from '@tanstack/react-table'
export interface TableHeaderProps<T> extends ColumnHelper<T> {
    columns: ColumnHelper<T>[];
}

export function TableHeader<T> ({
    columns
}: TableHeaderProps<T>){
    return (
        <div></div>
    )
}