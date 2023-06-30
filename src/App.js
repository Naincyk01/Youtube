import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
    path:"/",
    element:<MainContainer/>,
  },
    {
    path:"watch",
    element:<WatchPage/>,
  },
  ],
},
]);

function App() {
  return (
    <Provider store ={store}>
    <div>
      <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;






/*
 Debouncing:

 typing slow = 200ms
 typing fast = 30ms

 performance:
  -iphone pro max = 14 letter*1000 = 14000
  -with debouncing = 3 API calls*1000 = 3000
 
  Debouncing with 200ms
  -  if difference between 2 key strokes is <200ms - DECLINE API Call
  -  >200ms make an API Call
*/

 
/*
Cache:
time complexity tro search in array = O(n)
time complexity tro search in Object = O(1)

[i,ip,iphone]

{
  i:
  ip:
  iph:
  iphone:
}

new Map();
*/
