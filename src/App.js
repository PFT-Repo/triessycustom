import React,{Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header className="App-header">
          <Header></Header>
        </header>
        <body className="App-body">
          <Body/>
        </body>
        <footer className="App-footer">
            <Footer/>
        </footer>
      </React.Fragment>
    </div>
  );
}

export default App;
