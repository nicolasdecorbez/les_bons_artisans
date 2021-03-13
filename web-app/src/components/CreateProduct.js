import "../assets/css/Product.css";
import axios from "axios";

import HomeButton from "./HomeButton";

import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

class CreateProduct extends Component {

  state = {
    product_id: 0,
    name: "",
    type:"",
    price: 0,
    rating: 0,
    warranty_years: 0,
    available: false
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleCheck = name => () => {
    if (this.state.[name]) {
      this.setState({
        ...this.state,
        [name]: false
      });
    } else {
      this.setState({
        ...this.state,
        [name]: true
      });
    }
  }

  handleSumbit = event => {
    // TODO: validate
    event.preventDefault();

    const toInsert = {
      product_id: this.state.product_id,
      name: this.state.name,
      type: this.state.type,
      price: this.state.price,
      rating: this.state.rating,
      warranty_years: this.state.warranty_years,
      available: this.state.available};

    axios.post("http://localhost:8080/api/products", { toInsert })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    const { product_id, name, type, price, rating, warranty_years, available } = this.state;

    return (
      <div className="Prod-root">
        <div className="Prod-container">
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Creation of a product
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Product ID"
                               type="number"
                               value={product_id}
                               onChange={this.handleChange("product_id")}
                               required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Name"
                               type="string"
                               value={name}
                               onChange={this.handleChange("name")}
                               required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Type"
                               type="string"
                               value={type}
                               onChange={this.handleChange("type")}
                               required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Price"
                               type="number"
                               value={price}
                               onChange={this.handleChange("price")}
                               required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Rating"
                               type="number"
                               value={rating}
                               onChange={this.handleChange("rating")}
                               required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Warranty"
                               type="number"
                               value={warranty_years}
                               onChange={this.handleChange("warranty_years")}
                               required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox value={available} onChange={this.handleCheck("available")}/>}
                                      label="Available ?"
                    />
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <CardActions>
              <Button color="primary" onClick={this.handleSumbit}>
                Create product
              </Button>
            </CardActions>
          </Card>
        </div>

        <HomeButton />

      </div>
    );
  }

}

export default CreateProduct;
