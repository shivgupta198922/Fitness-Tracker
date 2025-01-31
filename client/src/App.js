// import { ThemeProvider, styled } from "styled-components";
// import { lightTheme } from "./utils/Themes";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Authentication from "./pages/Authentication";
//  import { useState } from "react";
// import { useSelector } from "react-redux";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";
// import Workouts from "./pages/Workouts";
// import Tutorials from "./pages/Tutorials";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: ${({ theme }) => theme.bg};
//   color: ${({ theme }) => theme.text_primary};
//   overflow-x: hidden;
//   overflow-y: hidden;
//   transition: all 0.2s ease;
// `;

// function App() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <BrowserRouter>
//         {currentUser ? (
//           <Container>
//             <Navbar currentUser={currentUser} />
//             <Routes>
//               <Route path="/" exact element={<Dashboard />} />
//               <Route path="/workouts" exact element={<Workouts />} />
//             </Routes>
//           </Container>
//         ) : (
//           <Container>
//             <Authentication />
//           </Container>
//         )}
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

// import { ThemeProvider, styled } from "styled-components";
// import { lightTheme } from "./utils/Themes";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Authentication from "./pages/Authentication";
// import { useSelector } from "react-redux";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";
// import Workouts from "./pages/Workouts";
// import Tutorials from "./pages/Tutorials";  // ✅ Import Tutorials Page

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: ${({ theme }) => theme.bg};
//   color: ${({ theme }) => theme.text_primary};
//   overflow-x: hidden;
//   overflow-y: hidden;
//   transition: all 0.2s ease;
// `;

// function App() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <BrowserRouter>
//         {currentUser ? (
//           <Container>
//             <Navbar currentUser={currentUser} />
//             <Routes>
//               <Route path="/" exact element={<Dashboard />} />
//               <Route path="/workouts" exact element={<Workouts />} />
//               <Route path="/tutorials" exact element={<Tutorials />} />  {/* ✅ Added Tutorials Route */}
//             </Routes>
//           </Container>
//         ) : (
//           <Container>
//             <Authentication />
//           </Container>
//         )}
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;


import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Tutorials from "./pages/Tutorials";  // ✅ Import Tutorials Page
import Contact from "./pages/Contact";  // ✅ Import Contact Page
import Blog from "./pages/Blogs";  // ✅ Import Blog Page

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/tutorials" exact element={<Tutorials />} />  {/* ✅ Added Tutorials Route */}
              <Route path="/contact" exact element={<Contact />} />  {/* ✅ Added Contact Route */}
              <Route path="/blog" exact element={<Blog />} />  {/* ✅ Added Blog Route */}
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
