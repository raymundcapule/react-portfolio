import React, {useEffect} from 'react';
import Navbar from './Navbar';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './page/home/Home';
import AboutMe from './page/aboutMe/AboutMe';
import Projects from './page/projects/Projects';
import Contacts from './page/contacts/Contacts';
import NotFound from './page/notFound/NotFound';

function App() {

  // useEffect(() => {
  //   const style = document.createElement("link");
  //   document.head.appendChild(style);
  //   const url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  //   style.href = url;
  // },[])


  return (
    <HashRouter>
      <div className="App">
          <Navbar/>
           {/* <div className="content"> */}
              <Routes>
                  <Route path='/' element={<Home />} />   
                  <Route path='home' element={<Home />} />   
                  <Route path="aboutMe" element={<AboutMe />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
           {/* </div> */}
      </div>
    </HashRouter>
  );
}

export default App;
