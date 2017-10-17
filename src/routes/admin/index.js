/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Admin from './Admin';


async function action({ fetch }) {
  const resp = await fetch('https://snappyser.herokuapp.com/api', {
  
  });
  const data = await resp.json();
  console.log(data)
  if (!data) throw new Error('Failed to load the data');
  return {
    chunks: ['admin'],
    component: (
      <Layout>
        <Admin data={data} />
      </Layout>
    ),
  };
}

export default action;


