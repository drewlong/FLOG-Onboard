import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'reactjs-admin-lte';

class Note extends React.Component{
  render(){
    return(
      <div className="row note-row">
        <div className="col-md-12">
        <Box className="note-box">
        <Box.Header className="note-box-header">
          <Box.Tools className="note-close">
            <Box.RemoveButton className="close-btn"/>
          </Box.Tools>
          <Box.Title className="note-title">{this.props.title}</Box.Title>
        </Box.Header>
        <Box.Body className="note-box-body">{this.props.message}</Box.Body>
        </Box>
        </div>
      </div>
    )
  }
}

export default Note;
