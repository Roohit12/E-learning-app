import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Details from "./pages/app/details/Details";
import Courses from "./pages/app/courses/Courses";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorToast from "./components/error-toast/ErrorToast";
import Page404 from "./pages/misc/Page404/Page404";

function App() {

  const browseRouter = createBrowserRouter([
    {
      path:'/',
      element:<Nav/>,
      errorElement:<Page404/>,
      children:[
       {
        index:true,
         element:<Hero/>},
       {
         path :'/courses' ,
         children:[
          {
          index:true,
          element:<Courses/>
       }
       ,{path:':courseId',element:<Details/>,
      },
      ],
         },
         {
           path:'/learn/:courseId',
           element:<Learn/>,
           children:[
            {
              path:'chapter/:chapterId',
              element:<Chapter/>
            }
           ]
         },
    ],
  }
  ])

  return (
    <>
       <RouterProvider router={browseRouter}/>
</>
  
  );
}

export default App;
