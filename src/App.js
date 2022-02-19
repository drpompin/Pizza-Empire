import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetails";
import Cart from "./components/Cart";
import CheckoutForm from "./components/checkout";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/cart" component={Cart} />
					<Route
						exact
						path="/item-detail/:id"
						component={ItemDetail}
					/>
					<Route exact path="/checkout" component={CheckoutForm} />
					{/* <Route path="/itemDetails" component={ItemDetail}/> */}
					{/* <Route path="/" component={Home}/> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
