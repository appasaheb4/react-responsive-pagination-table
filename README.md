# How to use

```
## Child Comp
import * as LibraryComponents from "@{path}/library/components"
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

more info watch videos: https://www.youtube.com/channel/UCvD-7h7G0IYWRC42jAjSHXQ
