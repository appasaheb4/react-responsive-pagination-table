"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const react_1 = __importStar(require("react"));
const react_bootstrap_table_next_1 = __importDefault(require("react-bootstrap-table-next"));
const react_bootstrap_table2_toolkit_1 = __importStar(require("react-bootstrap-table2-toolkit"));
const react_bootstrap_table2_editor_1 = __importDefault(require("react-bootstrap-table2-editor"));
const react_bootstrap_table2_paginator_1 = __importDefault(require("react-bootstrap-table2-paginator"));
const react_bootstrap_table2_filter_1 = __importDefault(require("react-bootstrap-table2-filter"));
const moment_1 = __importDefault(require("moment"));
const { SearchBar, ClearSearchButton } = react_bootstrap_table2_toolkit_1.Search;
const { ExportCSVButton } = react_bootstrap_table2_toolkit_1.CSVExport;
const TableBootstrap = (props) => {
    const [selectedRow, setSelectedRow] = react_1.useState();
    const [isEditModify, setIsEditModify] = react_1.useState(props.isEditModify || false);
    const [isSelectRow, setIsSelectRow] = react_1.useState(props.isSelectRow || false);
    react_1.useEffect(() => {
        if (props.isEditModify) {
            setIsEditModify(props.isEditModify);
        }
        else if (props.isSelectRow) {
            setIsSelectRow(props.isSelectRow);
        }
    }, [props]);
    const customTotal = (from, to, size) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "clearfix" }),
            react_1.default.createElement("span", { className: "ml-2 react-bootstrap-table-pagination-total" },
                "Showing ",
                from,
                " to ",
                to,
                " of ",
                size,
                " Results")));
    };
    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange, }) => (react_1.default.createElement("div", { className: "btn-group items-center", role: "group" },
        isSelectRow && (react_1.default.createElement("button", { style: { height: 10, width: 200 }, size: "small", type: "solid", onClick: () => {
                if (selectedRow) {
                    props.onSelectedRow && props.onSelectedRow(selectedRow);
                }
                else {
                    alert("Please select any item.");
                }
            } },
            react_1.default.createElement("icon", { icon: "trash-outline", size: "large", color: "#000" }),
            "Remove Selected")),
        react_1.default.createElement("input", { type: "number", min: "0", placeholder: "Number", onChange: (e) => {
                if (e.target.value) {
                    onSizePerPageChange(e.target.value);
                }
            }, className: "mr-2 ml-2 leading-4 p-2 w-24 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-base border border-gray-300 rounded-md" }),
        options.map((option) => (react_1.default.createElement("button", { key: option.text, type: "button", onClick: () => onSizePerPageChange(option.page), className: `btn ${currSizePerPage === `${option.page}` ? "btn-primary" : "btn-secondary"}` }, option.text)))));
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
    return (react_1.default.createElement(react_bootstrap_table2_toolkit_1.default, { keyField: props.id, bootstrap4: true, data: props.data, columns: props.columns, search: true, exportCSV: {
            fileName: `${props.fileName}_${moment_1.default(new Date()).format("YYYY-MM-DD HH:mm")}.csv`,
            noAutoBOM: false,
            blobType: "text/csv;charset=ansi",
        } }, (props) => (react_1.default.createElement("div", null,
        react_1.default.createElement(SearchBar, Object.assign({}, props.searchProps)),
        react_1.default.createElement(ClearSearchButton, Object.assign({ className: `inline-flex ml-4 bg-gray-500 items-center  small outline shadow-sm  font-medium  disabled:opacity-50 disabled:cursor-not-allowed text-center` }, props.searchProps)),
        react_1.default.createElement(ExportCSVButton, Object.assign({ className: `inline-flex ml-2 bg-gray-500 items-center  small outline shadow-sm  font-medium  disabled:opacity-50 disabled:cursor-not-allowed text-center` }, props.csvProps), "Export CSV!!"),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(react_bootstrap_table_next_1.default, Object.assign({}, props.baseProps, { noDataIndication: "Table is Empty", hover: true, pagination: react_bootstrap_table2_paginator_1.default(options), filter: react_bootstrap_table2_filter_1.default(), selectRow: isSelectRow
                ? {
                    mode: "checkbox",
                    onSelect: handleOnSelect,
                    onSelectAll: handleOnSelectAll,
                }
                : undefined, cellEdit: isEditModify
                ? react_bootstrap_table2_editor_1.default({
                    mode: "dbclick",
                    blurToSave: true,
                    afterSaveCell,
                })
                : undefined }))))));
};
exports.default = TableBootstrap;
//# sourceMappingURL=TableBootstrap.js.map