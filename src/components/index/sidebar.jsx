import React from 'react';
import ReactDOM from 'react-dom';
import { MainSidebar } from 'reactjs-admin-lte';
import Note from '../global/note.jsx'
class SideBar extends React.Component{
  render(){

    var welcomeMsg = "Just testing the note widget :)";
    var aTestMsg   = "Testing to see how they stack."
    var longMsg    = "I'm using a longer message in this note to see how well the notes scale as the length of the message increases. Again, I'm using a longer message in this note to see how well the notes scale as the length of the message increases."
    return(
      <MainSidebar>
          <Note title="Welcome" message={welcomeMsg} />
          <Note title="Another Test" message={aTestMsg} />
          <Note title="A Longer One" message={longMsg} />
      </MainSidebar>
    )
  }
}

export default SideBar;
