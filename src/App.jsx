import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
      <SearchBox />
    </>
  );
}

export default App;
