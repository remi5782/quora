import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlusOne from '@material-ui/icons/PlusOne';
import ExposureNeg1 from '@material-ui/icons/ExposureNeg1';
import TreeItem from '@material-ui/lab/TreeItem';

const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView({data}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
      console.log(nodeIds);
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id}  label={nodes.author}>
       {expanded[nodes.id] ? <PlusOne /> : <ExposureNeg1 />} {nodes.text}
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
    //   defaultExpandIcon={}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {renderTree(data)}
    </TreeView>
  );
}
