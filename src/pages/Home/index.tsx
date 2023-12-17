import Heading from "@/components/Heading";
import List from "@/components/List";
import LayoutDefault from "@/layouts/LayoutDefault";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <LayoutDefault>
      <>
        <Heading />
        <List />
        <StatusBar animated backgroundColor="#fff" style="light" />
      </>
    </LayoutDefault>
  );
};

export default Home;
