import EntryList from "@/components/EntryList/EntryList";
import Header from "@/components/Header/Header";
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
