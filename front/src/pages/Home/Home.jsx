import DashboardContainer from "./../../components/Dashboard/DashboardContainer";
import CategoriesContainer from "./../../components/Categories/CategoriesContainer";
import NewBooksContainer from "./../../components/NewBooks/NewBooksContainer";
import ArticlesContainer from "./../../components/Articles/ArticlesContainer";

const Home = () => {
  return (
    <div>
      <DashboardContainer />
      <CategoriesContainer />
      <NewBooksContainer />
      <br />
      <br />
      <ArticlesContainer />
    </div>
  );
};

export default Home;
