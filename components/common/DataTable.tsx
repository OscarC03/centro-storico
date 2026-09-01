'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/Table';

export interface DataTableColumn<T> {
    key: string;
    header: string;
    cell?: (row: T) => React.ReactNode;
    accessor?: (row: T) => string | number;
    sortable?: boolean;
    className?: string;
    headerClassName?: string;
}

interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    data: T[];
    getRowId: (row: T) => string;
    pageSize?: number;
    emptyMessage?: string;
    className?: string;
}

type SortDirection = 'asc' | 'desc';

interface SortState {
    key: string;
    direction: SortDirection;
}

function getCellValue<T>(row: T, column: DataTableColumn<T>): string | number {
    if (column.accessor) {
        return column.accessor(row);
    }
    const value = (row as Record<string, unknown>)[column.key];
    return typeof value === 'number' ? value : String(value ?? '');
}

export function DataTable<T>({
    columns,
    data,
    getRowId,
    pageSize = 10,
    emptyMessage,
    className,
}: DataTableProps<T>) {
    const { t } = useTranslation('common');
    const [sort, setSort] = React.useState<SortState | null>(null);
    const [page, setPage] = React.useState(0);

    const sortedData = React.useMemo(() => {
        if (!sort) {
            return data;
        }
        const column = columns.find((item) => item.key === sort.key);
        if (!column) {
            return data;
        }
        const factor = sort.direction === 'asc' ? 1 : -1;
        return [...data].sort((a, b) => {
            const valueA = getCellValue(a, column);
            const valueB = getCellValue(b, column);
            if (valueA < valueB) return -1 * factor;
            if (valueA > valueB) return 1 * factor;
            return 0;
        });
    }, [data, sort, columns]);

    const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
    const currentPage = Math.min(page, totalPages - 1);
    const pageData = sortedData.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

    function toggleSort(key: string) {
        setPage(0);
        setSort((current) => {
            if (current?.key !== key) {
                return { key, direction: 'asc' };
            }
            return {
                key,
                direction: current.direction === 'asc' ? 'desc' : 'asc',
            };
        });
    }

    return (
        <div className={cn('space-y-4', className)}>
            <div className="overflow-hidden rounded-xl border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column) => (
                                <TableHead key={column.key} className={column.headerClassName}>
                                    {column.sortable ? (
                                        <button
                                            type="button"
                                            onClick={() => toggleSort(column.key)}
                                            className="hover:text-foreground -ml-1 inline-flex items-center gap-1 rounded px-1 transition-colors"
                                        >
                                            {column.header}
                                            {sort?.key === column.key ? (
                                                sort.direction === 'asc' ? (
                                                    <ChevronUp className="size-3.5" />
                                                ) : (
                                                    <ChevronDown className="size-3.5" />
                                                )
                                            ) : (
                                                <ChevronsUpDown className="size-3.5 opacity-50" />
                                            )}
                                        </button>
                                    ) : (
                                        column.header
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pageData.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="text-muted-foreground h-24 text-center"
                                >
                                    {emptyMessage ?? t('table.noResults')}
                                </TableCell>
                            </TableRow>
                        ) : (
                            pageData.map((row) => (
                                <TableRow key={getRowId(row)}>
                                    {columns.map((column) => (
                                        <TableCell key={column.key} className={column.className}>
                                            {column.cell
                                                ? column.cell(row)
                                                : getCellValue(row, column)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                        {t('table.page', { current: currentPage + 1, total: totalPages })}
                    </p>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 0}
                            onClick={() => setPage((value) => Math.max(0, value - 1))}
                        >
                            {t('table.previous')}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage >= totalPages - 1}
                            onClick={() => setPage((value) => Math.min(totalPages - 1, value + 1))}
                        >
                            {t('table.next')}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
