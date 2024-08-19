import DefaultMovies from './components/pages/DefaultMovies.jsx';
import PopularMovies from './components/pages/PopularMovies.jsx';
import TrendingMovies from './components/pages/TrendingMovies.jsx';
import TopRatedMovies from './components/pages/TopRatedMovies.jsx';
import UpcomingMovies from './components/pages/UpcomingMovies.jsx';
import MovieDetailsPage from './components/pages/MovieDetailsPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultMovies />,
  },
  {
    path: "/popular-movies",
    element: <PopularMovies />,
  },
  {
    path: "/trending-movies",
    element: <TrendingMovies />,
  },
  {
    path: "/top-rated-movies",
    element: <TopRatedMovies />,
  },
  {
    path: "/upcoming-movies",
    element: <UpcomingMovies />,
  },
  {
    path: "/movie/:slug",
    element: <MovieDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
