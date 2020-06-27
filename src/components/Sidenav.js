import React from 'react';
import { Link } from 'react-router-dom';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import useStyles from '../styles';


function Sidenav(props) {
  const classes = useStyles();

  const {menus} = props;

  const getMenuChild = (menu) => {
    const newMenu = menu;
    const children = menus.filter(function(child) {
      if(menu.id === child.parent){
        const newChild = getMenuChild(child);
        return newChild;
      }
    })
    newMenu.children = children;
    return newMenu;
  }

  const newMenu = menus.filter((menu) => {
    if(menu.parent === 0){
      return getMenuChild(menu)
    }
  })

  const setTree = (menu) => {
    if(menu.children !== undefined && menu.children.length > 0){
      return (
        <TreeItem nodeId={menu.id.toString()} label={menu.text} key={menu.id}>
          {
            menu.children.map((child) => {
              return setTree(child);
            })
          }
        </TreeItem>
      )
    } else {
      return (
        <Link to={menu.slug} key={menu.id}><TreeItem nodeId={menu.id.toString()} label={menu.text}/></Link>
      )
    }
  }  

 return (
    <TreeView
    className={classes.sideNavList}
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpandIcon={<ChevronRightIcon />}
  >
      {
        newMenu.map((menu) => {
          return setTree(menu);
        })
      }
    </TreeView>
  );
}

export default Sidenav;
