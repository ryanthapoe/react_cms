import React from 'react';
import MaterialTable from 'material-table';

const Menu = (props) => {
  const {menus, addMenu, editMenu, deleteMenu} = props;

  
  const getParentName = (child) => {
    const parent = menus.filter((menu) => {
      return child.parent === menu.id
    })
    return `Child of ${parent[0].text}`;
  }

  const getParent = () => {
    let parent = {
      0: `Root`
    };
    menus.map((p, i) =>{
      const id = p.id
      parent[id] = `Child of ${p.text}`
    })
    return parent;
  }

  const columns =  [
    { title: 'Menu Name', field: 'text' },
    { 
      title: 'Slug', 
      field: 'slug',
      render: rowData => rowData.slug.substring(1)
    },
    { 
      title: 'Level', 
      field: 'parent', 
      render: rowData => rowData.parent === 0 ? 'Root' : getParentName(rowData),
      lookup: getParent()
    },
  ]
  
  return (
    <MaterialTable
      title="Menu"
      columns={columns}
      data={menus}
      parentChildData={(row, rows) => rows.find(a => a.id === row.parent)}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              newData.id = menus[menus.length-1].id > 0 ?  menus[menus.length-1].id + 1 : 0
              newData.parent = parseInt(newData.parent);
              newData.slug = `/${newData.slug}`
              addMenu(newData);
            }, 600);
          }),
        onRowUpdate: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              newData.parent = parseInt(newData.parent);
              newData.slug === ''? newData.slug = '/' : newData.slug = newData.slug
              editMenu(newData)
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              deleteMenu(oldData)
            }, 600);
          })
      }}
    />
  )
}

export default Menu;