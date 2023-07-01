import { useContext, useState } from "react";
import { Context } from "@/main";
import EntryList from "@/modules/EntryList/EntryList";
import Header from "@/modules/Header/Header";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Home = observer(() => {
  const { store } = useContext(Context);
  console.log(store);

  useEffect(() => {
    store.postStore.getPosts();
  }, []);

  return (
    <div>
      <Header />
      <EntryList entries={store.postStore.posts} />
    </div>
  );
});

export default Home;
