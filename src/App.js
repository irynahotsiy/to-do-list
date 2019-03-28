import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack} from '@fortawesome/free-solid-svg-icons'




import Main from './components/main/Main';

library.add(faTrashAlt);
library.add(faAlignLeft);
library.add(faThumbtack);

class App extends Component {
  render() {
    return (
     <>
        <Main />
     </>
    );
  }
}

export default App;
