import {ColumnHelper, HeaderGroup, flexRender} from '@tanstack/react-table'
export interface TableHeaderProps<T> extends ColumnHelper<T> {
    headerGroup: HeaderGroup<T>[];
}


export function TableHeader<T> ({
    headerGroup
}: TableHeaderProps<T>){

    return (
        <thead>
            {headerGroup.map((header) => (
                <tr>
                    {header.headers.map((header) => (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                        <div>
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </div>
                        )}
                    </th>
                    ))}
                </tr>
            ))}
        </thead>
    )
}