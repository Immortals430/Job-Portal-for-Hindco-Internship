import { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import FilterSec_M from "./Component/Filters/FilterSec_M/FilterSec_M";
import Card from "./Component/Card/Card";
import FilterList_M from "./Component/Filters/FilterLIst_M/FilterList_M";
import Aside_M from "./Component/Aside_M/Aside_M";
import FilterSec_D from "./Component/Filters/FilterSec_D/FilterSec_D";

function App() {
  const [mobileFilter, setMobileFilter] = useState(false);
  const [mobileAside, setMobileAside] = useState(false);

  return (
    <>
      <div className="container-initial">
        <header className="header">
          <Navbar setMobileAside={setMobileAside} />
          <FilterSec_M setMobileFilter={setMobileFilter} />
        </header>

        <main >
          <aside>
            <FilterSec_D />
          </aside>
          <section className="job-list-sec">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} />
            ))}
          </section>
        </main>

        <FilterList_M
          mobileFilter={mobileFilter}
          setMobileFilter={setMobileFilter}
        />
        <Aside_M mobileAside={mobileAside} setMobileAside={setMobileAside} />
      </div>
    </>
  );
}

export default App;
