import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../app/navbar";
import { useSelector } from "react-redux";
import { AllBookmarkPage, ArticlePage, HomePage,SearchResultPage } from "../pages";
import BookmarkSearchResult from "../components/bookmark/bookmarkSearchResult";

function AppRouter() {
  const { searchText,searchType } = useSelector((state) => state.app);

  return (
    <BrowserRouter>
      <NavBar />
      {searchText ? (
        <div className="container">
          {searchType==="all"?<SearchResultPage />:<BookmarkSearchResult/>}
        </div>
      ) : (
        <>
          <div className="container">
            <Routes>
              {pageRoute.map((v,k) => (
                <Route path={v.path} element={v.component} key={k}/>
              ))}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default AppRouter;

const pageRoute = [
  { name: "home", path: "/home", component: <HomePage /> },
  {
    name: "all_bookmarks",
    path: "/all-bookmarks",
    component: <AllBookmarkPage />,
  },
  { name: "article", path: "/article", component: <ArticlePage /> },
];
