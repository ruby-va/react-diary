import EntryList from "@/modules/EntryList/EntryList";
import Header from "@/modules/Header/Header";
import data from "@/data";

function Home() {
  return (
    <div>
      <Header />
      <EntryList entries={data} />
    </div>
  );
}
export default Home;
