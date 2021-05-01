interface TableBootstrapProps {
    id: string;
    data: any;
    columns: any;
    fileName: string;
    isDelete?: boolean;
    isEditModify?: boolean;
    isSelectRow?: boolean;
    onDelete?: (selectedItem: any) => void;
    onSelectedRow?: (selectedItem: any) => void;
    onUpdateItem?: (value: any, dataField: string, id: string) => void;
}
declare const TableBootstrap: (props: TableBootstrapProps) => any;
export default TableBootstrap;
