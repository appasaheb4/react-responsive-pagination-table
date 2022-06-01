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

const array: [
  {
    _id:"86fds987fgfdsg86",
    name: 'Collection',
    title: 'Master Setup',
  },
  {
    _id:"86fds987fgfdsg87",
    name: 'Setting',
    title: 'Login Activity',
  }
];

<List
            data={array}
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

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/appasaheb4.png?s=100" width="100">
    </td>
    <td>
      Appasaheb Lakade<br />
      <a href="mailto:onlyappasaheb4@gmail.com">onlyappasaheb4@gmail.com</a><br />
      <a href="https://youtube.com/tech-abl">https://youtube.com/tech-abl</a>
    </td>
  </tr>
</table>

## Contributes / Support

1.  Subscribe channel 😊 : https://www.youtube.com/tech-abl

2.  Submit your pr for idea / issue / feature
    ### How To Contribute
        - Fork and clone this repository
        - Make some changes as required
        - Write unit test to showcase its functionality
        - Run the test suites to make sure it's not breaking anything `$ npm test`
        - Submit a pull request under `dev` branch

## Donate

<table>
  <tr>
    <td>
      <img src="https://github.com/appasaheb4/react-native-verify-otp/blob/master/assets/upiQrCode.jpeg" width="100">
    </td>
    <td>
      <a href="https://www.paypal.com/paypalme/AppasahebLakade/">or Paypal</a><br />
    </td>
  </tr>
</table>

😊 ALWAYS WELCOME 😊
