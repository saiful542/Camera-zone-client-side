
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Invalid from './Pages/Invalid/Invalid';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import RoutePrivate from './Pages/RoutePrivate/RoutePrivate';
import Products from './Pages/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import ManageProducts from './Pages/Admin/ManageProducts/ManageProducts';
import ManageOrders from './Pages/Admin/ManageOrders/ManageOrders';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import MyOrders from './Pages/MyOrders/MyOrders';
import Pay from './Pages/pay/Pay';
import GiveReview from './Pages/GiveReview/GiveReview';
import SideBar from './Pages/SideBar/SideBar';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <RoutePrivate path="/Purchase/:id">
              <Purchase></Purchase>
            </RoutePrivate>
            <RoutePrivate path="/MyOrders">
              <SideBar></SideBar>
              <MyOrders></MyOrders>
            </RoutePrivate>
            <RoutePrivate path="/GiveReview">
              <SideBar></SideBar>
              <GiveReview></GiveReview>
            </RoutePrivate>
            <RoutePrivate path="/Pay">
              <SideBar></SideBar>
              <Pay></Pay>
            </RoutePrivate>
            <RoutePrivate path="/MakeAdmin">
              <SideBar></SideBar>
              <MakeAdmin></MakeAdmin>
            </RoutePrivate>
            <RoutePrivate path="/ManageProducts">
              <SideBar></SideBar>
              <ManageProducts></ManageProducts>
            </RoutePrivate>
            <RoutePrivate path="/ManageOrders">
              <SideBar></SideBar>
              <ManageOrders></ManageOrders>
            </RoutePrivate>
            <RoutePrivate path="/AddProducts">
              <SideBar></SideBar>
              <AddProduct></AddProduct>
            </RoutePrivate>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Registration">
              <Registration></Registration>
            </Route>
            <Route path="/Products">
              <Products></Products>
            </Route>
            <RoutePrivate path="/Dashboard">
              <SideBar></SideBar>
              <Dashboard></Dashboard>
            </RoutePrivate>
            <Route path="*">
              <Invalid></Invalid>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
