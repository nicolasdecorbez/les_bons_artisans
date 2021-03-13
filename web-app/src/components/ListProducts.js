import React, { Component } from 'react'
import axios from 'axios';

import '../assets/css/ListProducts.css';
import HomeButton from './HomeButton'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ListProducts extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    const products = this.state.products;
    console.log(products);
    return (
      <div className="List-root">
        <div className="List-container">
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
                {products.map((row) => (
                  <TableRow key={row.product_id}>
                    <TableCell align="left">{row.product_id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.rating}</TableCell>
                    <TableCell align="right">{row.warranty_years}</TableCell>
                    <TableCell align="right">{row.available.toString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <HomeButton />

      </div>
    );
  }
}



export default ListProducts;
