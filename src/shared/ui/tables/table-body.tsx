import { CoreInstance, RowModel, flexRender } from "@tanstack/react-table";

interface TableBodyProps<T> extends CoreInstance<T> {
    rowModel: RowModel<T>;
}

export function TableBody<T> ({
    rowModel
}: TableBodyProps<T>)  {
    return(
        <tbody>
            {rowModel.rows.map((row) => (
                <tr key={row.id}>
                   {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                          )
                   })}
                </tr>
            ))}
        </tbody>
    )
}