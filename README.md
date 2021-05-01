# React Responsive Pagination Table

Easy responsive table manage.Single delete,multiple delete, Edit single singel filed,search gobal and single filed and more....

## Installation

```
npm i react-responsive-pagination-table
or
yarn add react-responsive-pagination-table
```

## Usage

```jsx
## Child Comp
import * as LibraryComponents from "react-responsive-pagination-table"
interface ListProps {
  data: any
  isDelete?: boolean
  isEditModify?: boolean
  onDelete?: (selectedItem: LibraryModels.Confirm) => void
  onSelectedRow?: (selectedItem: any) => void
  onUpdateItem?: (value: any, dataField: string, id: string) => void
}
const List = (props: ListProps) => {
  return (
    <LibraryComponents.Organisms.TableBootstrap
      id="_id"
      data={props.data}
      columns={[
        {
          dataField: "_id",
          text: "Id",
          hidden: true,
          csvExport: false,
        },
        {
          dataField: "title",
          text: "Title",
          sort: true,
          filter: LibraryComponents.Organisms.Utils.textFilter(),
          headerStyle: { minWidth: "200px" },
        },
      ]}
      isEditModify={props.isEditModify}
      isSelectRow={true}
      fileName="List"
      onSelectedRow={(rows) => {
        props.onSelectedRow && props.onSelectedRow(rows.map((item: any) => item._id))
      }}
      onUpdateItem={(value: any, dataField: string, id: string) => {
        props.onUpdateItem && props.onUpdateItem(value, dataField, id)
      }}
    />
  )
}
export default List

## Parent Comp
import List from './List';

<List
            data={yourArray}
            isDelete={true}
            isEditModify={false}
            onDelete={(selectedItem) =>console.log({selectedItem})}
            onSelectedRow={(rows) => console.log({rows})}
            onUpdateItem={(value: any, dataField: string, id: string) => {
             console.log({value,dataField,id})
            }}
          />
```

### Outputs

<img src="https://github.com/appasaheb4/react-responsive-pagination-table/blob/main/assets/table.png">

### More inforamtion watch youtube channel: https://www.youtube.com/channel/UCvD-7h7G0IYWRC42jAjSHXQ
