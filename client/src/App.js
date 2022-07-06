// import logo from './logo.svg';
import './App.css';
import Album from './components/Album';
import Nav from './components/nav/index';
import Profile from './components/profile/index';

function App() {
  return (
    <div className="App">
      <h1>api call</h1>
      <Album />
    </div>
  );

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  // return (
  //   <div>
  //     <Nav
  //       categories={categories}
  //       setCurrentCategory={setCurrentCategory}
  //       currentCategory={currentCategory}
  //       contactSelected={contactSelected}
  //       setContactSelected={setContactSelected}
  //     ></Nav>
  //     <main>
  //       {!contactSelected ? (
  //         <>
  //           <Gallery currentCategory={currentCategory}></Gallery>
  //           <About></About>
  //         </>
  //       ) : (
  //         <ContactForm></ContactForm>
  //       )}
  //     </main>
  //   </div>
  // );
}


export default App;
