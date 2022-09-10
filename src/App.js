import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            style={{ backgroundColor: "red" }}
          >
            <Profile />
          </Grid>
          <Grid item xs style={{ backgroundColor: "blue" }}>
            <Header />
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Resume />
                </Route>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
