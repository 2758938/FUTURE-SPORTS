// App.js

import React from "react";
import "./App.css";
import "./components/Header/Header";
import "./components/Main/about";
import "./components/Main/photo_carousel";
import "./components/Main/nextMeet";
import "./components/Main/join";
import "./components/Main/blog";
import "./components/Footer/Footer";


function App() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
}

export default App;