/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.css';
import { Table } from 'semantic-ui-react'

class Admin extends React.Component {
constructor(props){
super(props)

}

  render() {
    var  data =this.props.data
    return (
      <div className={s.root}>
        <div className={s.container}>
  
        <h4>Admin</h4>

    <Table singleLine>
    <Table.Header>
       <Table.Row>
       <Table.HeaderCell>First Name</Table.HeaderCell>
       <Table.HeaderCell>Last Name</Table.HeaderCell>
       <Table.HeaderCell>State</Table.HeaderCell>
       <Table.HeaderCell>City</Table.HeaderCell>
       <Table.HeaderCell>Adress</Table.HeaderCell>
       <Table.HeaderCell>Zip Code</Table.HeaderCell>
       <Table.HeaderCell>Apartment</Table.HeaderCell>
       <Table.HeaderCell>Floor</Table.HeaderCell>
       <Table.HeaderCell>Email</Table.HeaderCell>
       <Table.HeaderCell>Phone Number</Table.HeaderCell>
       <Table.HeaderCell>Notes</Table.HeaderCell>


       </Table.Row>
    </Table.Header>
    <Table.Body>
    {data.map((data, key) => {
       return (
       <Table.Row key={key}>
       <Table.Cell>{data.firstName}</Table.Cell>
       <Table.Cell>{data.lastName}</Table.Cell>
         <Table.Cell>{data.state}</Table.Cell>
         <Table.Cell>{data.city}</Table.Cell>
         <Table.Cell>{data.adress}</Table.Cell>
         <Table.Cell>{data.zipCode}</Table.Cell>
         <Table.Cell>{data.apartment}</Table.Cell>
         <Table.Cell>{data.floor}</Table.Cell>
         <Table.Cell>{data.email}</Table.Cell>
         <Table.Cell>{data.phoneNumber}</Table.Cell>
         <Table.Cell>{data.specialNotes}</Table.Cell>
       </Table.Row>
       )
    })}
    </Table.Body>
  </Table>
  
  </div>
     
      </div>
    );
  }
}

export default withStyles(s)(Admin);
