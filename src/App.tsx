import "./App.css";
import { Navbar, Header, About, Projects, Contact, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 font-sans">
      <Navbar />
      <Header />

      <main className="container mx-auto px-6 py-12 space-y-8">
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
export default App;
