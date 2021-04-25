import React from 'react';

import './App.css';

//my stuff ↓↓↓
import Topnavbar from "./top-navbar/Topnavbar";
//import PublicationWriter from './publications/PublicationWriter';
//import PublicationViewer from './publications/PublicationViewer';
//import MainCategory from './categories/MainCategory';
//import PublicationSingleViewer from './publications/PublicationSingleViewer';
//my stuff ↑↑↑

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: '',
      currentPostId: ''    
    };//this.state
    this.handleToUpdateState  = this.handleToUpdate.bind(this);
  }

  handleToUpdate(someArg, post_id){
    this.setState({currentView:someArg, currentPostId:post_id});
  }

  render(){
    return(
      <Topnavbar></Topnavbar>
    );
  };
}
export default App;


/* Old stuff left for reference
let handleToUpdate=this.handleToUpdateState;
    switch (this.state.currentView) {
      case 'Publications':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <PublicationWriter fatherId='0'/>
            <PublicationViewer /> 
          </div>
        );
      case 'Main Category':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <MainCategory handleToUpdate={handleToUpdate.bind(this)}/>
          </div>
        );  
      case 'Current post':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <PublicationSingleViewer post_id={this.state.currentPostId}/>
          </div>
        );  
      case '':
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <div className="selfContainedWellPadded">
              <p>The Objective of this APP is to show the skills I'm learning in React+Express+Node.js+PostgreSQL</p>
              <p>Please go to: Views/Publications to create "Father" publications.</p>
              <p>The database backup is the FARGUS_PROJECT github. The original was created on PostgreSQL.</p>
            </div>
          </div>
        );
      default:
        return(
          <div id="appDiv">
            <Topnavbar handleToUpdate={handleToUpdate.bind(this)}/>
            <p>Nothing to be seen here boi!</p>
          </div>
        );
    }

*/