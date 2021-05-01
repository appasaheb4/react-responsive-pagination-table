/* eslint-disable */
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import moment from "moment";
const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;
const TableBootstrap = (props) => {
    const [selectedRow, setSelectedRow] = useState();
    const [isEditModify, setIsEditModify] = useState(props.isEditModify || false);
    const [isSelectRow, setIsSelectRow] = useState(props.isSelectRow || false);
    useEffect(() => {
        if (props.isEditModify) {
            setIsEditModify(props.isEditModify);
        }
        else if (props.isSelectRow) {
            setIsSelectRow(props.isSelectRow);
        }
    }, [props]);
    const customTotal = (from, to, size) => {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "clearfix" }),
            React.createElement("span", { className: "ml-2 react-bootstrap-table-pagination-total" },
                "Showing ",
                from,
                " to ",
                to,
                " of ",
                size,
                " Results")));
    };
    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange, }) => (React.createElement("div", { className: "btn-group items-center", role: "group" },
        isSelectRow && (React.createElement("button", { style: { height: 10, width: 200 }, size: "small", type: "solid", onClick: () => {
                if (selectedRow) {
                    props.onSelectedRow && props.onSelectedRow(selectedRow);
                }
                else {
                    alert("Please select any item.");
                }
            } },
            React.createElement("icon", { icon: "trash-outline", size: "large", color: "#000" }),
            "Remove Selected")),
        React.createElement("input", { type: "number", min: "0", placeholder: "Number", onChange: (e) => {
                if (e.target.value) {
                    onSizePerPageChange(e.target.value);
                }
            }, className: "mr-2 ml-2 leading-4 p-2 w-24 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-base border border-gray-300 rounded-md" }),
        options.map((option) => (React.createElement("button", { key: option.text, type: "button", onClick: () => onSizePerPageChange(option.page), className: `btn ${currSizePerPage === `${option.page}` ? "btn-primary" : "btn-secondary"}` }, option.text)))));
    const options = {
        paginationSize: 5,
        pageStartIndex: 0,
        firstPageText: "First",
        prePageText: "Back",
        nextPageText: "Next",
        lastPageText: "Last",
        nextPageTitle: "First page",
        prePageTitle: "Pre page",
        firstPageTitle: "Next page",
        lastPageTitle: "Last page",
        showTotal: true,
        disablePageTitle: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [
            {
                text: "10",
                value: 10,
            },
            {
                text: "20",
                value: 20,
            },
            {
                text: "30",
                value: 30,
            },
            {
                text: "40",
                value: 40,
            },
            {
                text: "50",
                value: 50,
            },
            {
                text: "All",
                value: props.data.length,
            },
        ],
        onPageChange: (page, sizePerPage) => {
            // console.log(page, sizePerPage)
        },
        sizePerPageRenderer: sizePerPageRenderer,
        onSizePerPageChange: (page, sizePerPage) => {
            //console.log(page, sizePerPage)
        },
    };
    const handleOnSelect = (rows, isSelect) => {
        if (isSelect) {
            if (selectedRow) {
                let itemSelected = selectedRow;
                itemSelected.push(rows);
                setSelectedRow(itemSelected);
            }
            else {
                setSelectedRow([rows]);
            }
        }
    };
    const handleOnSelectAll = (isSelect, rows) => {
        if (isSelect) {
            setSelectedRow(rows);
        }
    };
    const afterSaveCell = (oldValue, newValue, row, column) => {
        if (oldValue !== newValue) {
            props.onUpdateItem && props.onUpdateItem(newValue, column.dataField, row._id);
        }
    };
    return (React.createElement(ToolkitProvider, { keyField: props.id, bootstrap4: true, data: props.data, columns: props.columns, search: true, exportCSV: {
            fileName: `${props.fileName}_${moment(new Date()).format("YYYY-MM-DD HH:mm")}.csv`,
            noAutoBOM: false,
            blobType: "text/csv;charset=ansi",
        } }, (props) => (React.createElement("div", null,
        React.createElement(SearchBar, Object.assign({}, props.searchProps)),
        React.createElement(ClearSearchButton, Object.assign({ className: `inline-flex ml-4 bg-gray-500 items-center  small outline shadow-sm  font-medium  disabled:opacity-50 disabled:cursor-not-allowed text-center` }, props.searchProps)),
        React.createElement(ExportCSVButton, Object.assign({ className: `inline-flex ml-2 bg-gray-500 items-center  small outline shadow-sm  font-medium  disabled:opacity-50 disabled:cursor-not-allowed text-center` }, props.csvProps), "Export CSV!!"),
        React.createElement("hr", null),
        React.createElement(BootstrapTable, Object.assign({}, props.baseProps, { noDataIndication: "Table is Empty", hover: true, pagination: paginationFactory(options), filter: filterFactory(), selectRow: isSelectRow
                ? {
                    mode: "checkbox",
                    onSelect: handleOnSelect,
                    onSelectAll: handleOnSelectAll,
                }
                : undefined, cellEdit: isEditModify
                ? cellEditFactory({
                    mode: "dbclick",
                    blurToSave: true,
                    afterSaveCell,
                })
                : undefined }))))));
};
export default TableBootstrap;
//# sourceMappingURL=TableBootstrap.js.map