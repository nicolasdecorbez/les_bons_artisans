import "../assets/css/Product.css";
import axios from "axios";

import HomeButton from "./HomeButton";

import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";

class DeleteProduct extends Component {

  state = {
    product_id: 0,
    name: "",
    type:"",
    price: 0,
    rating: 0,
    warranty_years: 0,
    available: false
  }

  handleDelProduct = event => {
    event.preventDefault();
    if (this.state.product_id > 0) {
      axios.delete("http://localhost:8080/api/products/" + this.state.product_id)
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({
            ...this.state,
            product_id: 0,
            name: "",
            type:"",
            price: 0,
            rating: 0,
            warranty_years: 0,
            available: false
          });
        });
    }
  }

  handleGetProduct = event => {
    event.preventDefault();
    if (this.state.product_id > 0) {
      axios.get("http://localhost:8080/api/products/" + this.state.product_id)
        .then(res => {
          this.setState({
            ...this.state,
            name: res.data.name,
            type: res.data.type,
            price: res.data.price,
            rating: res.data.rating,
            warranty_years: res.data.warranty_years,
            available: res.data.available,
          });
        });
    }
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  render() {

    const { product_id, name, type, price, rating, warranty_years, available } = this.state;

    return (
      <div className="Prod-root">
        <div className="Prod-container">
        <Card>
          <CardContent>
            <div className="Prod-head">
              <Typography variant="h4" gutterBottom>
                Deletion of a product
              </Typography>
              <Typography variant="p" mb={10}>
                First enter a product_id, then click on Get Informations before deleting it. 
              </Typography>
            </div>
            <forms>
              <TextField label="Product ID"
                         type="number"
                         value={product_id}
                         onChange={this.handleChange("product_id")}
                         required
              />
            </forms>
            <TableContainer component={Paper}>
              <Table aria-label="get-all-products">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Rating</TableCell>
                    <TableCell align="right">Warranty</TableCell>
                    <TableCell align="right">Available</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={product_id}>
                    <TableCell align="left">{product_id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell align="right">{type}</TableCell>
                    <TableCell align="right">{price}</TableCell>
                    <TableCell align="right">{rating}</TableCell>
                    <TableCell align="right">{warranty_years}</TableCell>
                    <TableCell align="right">{available.toString()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions>
            <Button color="secondary" onClick={this.handleDelProduct}>
              Delete product
            </Button>
            <Button color="primary" onClick={this.handleGetProduct}>
              Get Informations
            </Button>
          </CardActions>
        </Card>
        </div>
        <HomeButton />
      </div>
    );
  }
}

export default DeleteProduct;
