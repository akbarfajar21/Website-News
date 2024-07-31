import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BelajarReact } from "./componens/BelajarReact";
import { HelloWorld } from "./componens/HelloWorld";
import { Welcome } from "./componens/Welcome";
import { Card } from "./componens/Card";
import { Footer } from "./componens/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite x React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Tambah 1</button>
      </div>
      <div className="card1">
        <button onClick={() => setCount((count) => count - 1)}>Kurang 1</button>
      </div>
      <p>{count}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BelajarReact title={"Selamat datang Lamm"} body={"Kick the bady"} />
      <HelloWorld final={"Finality Ares"} />
      <Welcome
        title={"Ini bagian welcome"}
        description={"Loromeos ipsemues doloremues siteus ameteus"}
        button={"Klik"}
      />
      <Card
        title={"Ini bagian card"}
        description={"loremos ipsumes"}
        button={"cuak"}
      />
      <Footer
        title={"Ini bagian footer"}
        description={"loremos ipsumes dolores sit ametos"}
        button={"hoho"}
      />
      {/* <Tambahan/> */}
    </>
  );
}

const Tambahan = () => {
  return (
    <>
      <button>Simpan Data</button>
    </>
  );
};

export default App;
