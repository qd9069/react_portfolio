import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import BottomNav from './Footer';
import space from "./images/space_one.jpg";
// import view from "./images/view.jpg";
// import Paper from "@mui/material/Paper";

const styles = {
  paperContainer: {
    backgroundImage: `url(${space})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This function is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // <Paper style={styles.paperContainer} sx={{ height: "100%" }}>
    //  <div>
    <div style={styles.paperContainer} sx={{ height: "100%" }}>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage function which will return a component  */}
      {renderPage()}
      <BottomNav />
    </div>
    // </Paper>
  );
}
