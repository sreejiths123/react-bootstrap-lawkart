import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './admin/posts';
import DefaultPage from './admin/DefaultPage';
import fakeDataProvider from 'ra-data-fakerest';
import Dashboard from './admin/Dashboard';
import englishMessages from './admin/i18n/en';
import { Layout, Menu } from './admin/layout';
import customRoutes from './admin/routes';

import visitors from './admin/visitors';
import orders from './admin/orders';
import products from './admin/products';
import invoices from './admin/invoices';
import categories from './admin/categories';

const i18nProvider = locale => {
    
    // Always fallback on english
    return englishMessages;
};

export default class AdminPage extends Component {	

  render() {
	  const dataProvider = fakeDataProvider({
    posts: [
        { id: 0, title: 'Hello, world!' },
        { id: 1, title: 'FooBar' },
    ],
    customers: [
  {
    "id": 30,
    "first_name": "Beau",
    "last_name": "Runolfsdottir",
    "email": "Beau_Runolfsdottir3@gmail.com",
    "address": "Botsford Cove",
    "zipcode": "79092-1570",
    "city": "Devynbury",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bboy1895/128.jpg",
    "birthday": "1987-10-01T11:15:29.799Z",
    "first_seen": "2019-01-08T04:37:00.737Z",
    "last_seen": "2019-01-29T00:45:31.114Z",
    "has_ordered": true,
    "latest_purchase": "2018-11-18T11:22:54.618Z",
    "has_newsletter": false,
    "groups": [
      "collector",
      "reviewer"
    ],
    "nb_commands": 3,
    "total_spent": 986.13
  },
  {
    "id": 82,
    "first_name": "Orland",
    "last_name": "O'Hara",
    "email": "Orland.OHara@hotmail.com",
    "address": "Maggio Rue",
    "zipcode": "91855-8085",
    "city": "Emmettchester",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/richwild/128.jpg",
    "birthday": "1983-05-26T20:24:31.127Z",
    "first_seen": "2016-06-21T20:59:38.702Z",
    "last_seen": "2017-06-13T19:48:01.569Z",
    "has_ordered": true,
    "latest_purchase": "2018-12-28T13:06:26.658Z",
    "has_newsletter": true,
    "groups": [
      "reviewer"
    ],
    "nb_commands": 4,
    "total_spent": 730
  },
  {
    "id": 91,
    "first_name": "Roslyn",
    "last_name": "Cummings",
    "email": "Roslyn9@gmail.com",
    "address": "Paxton Isle",
    "zipcode": "82981",
    "city": "New Rey",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg",
    "birthday": "1991-09-02T18:10:12.322Z",
    "first_seen": "2018-04-21T01:37:19.756Z",
    "last_seen": "2018-07-29T18:36:06.979Z",
    "has_ordered": true,
    "latest_purchase": "2018-11-19T06:05:42.753Z",
    "has_newsletter": true,
    "groups": [],
    "nb_commands": 5,
    "total_spent": 742.25
  },
  {
    "id": 161,
    "first_name": "Irma",
    "last_name": "Kunze",
    "email": "Irma84@hotmail.com",
    "address": "Cory Road",
    "zipcode": "26325",
    "city": "Brennanmouth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremery/128.jpg",
    "birthday": "1999-01-15T23:25:29.932Z",
    "first_seen": "2016-06-09T06:46:03.095Z",
    "last_seen": "2018-01-13T23:43:37.570Z",
    "has_ordered": true,
    "latest_purchase": "2018-12-12T01:50:48.838Z",
    "has_newsletter": false,
    "groups": [
      "reviewer"
    ],
    "nb_commands": 2,
    "total_spent": 125.09
  },
  {
    "id": 163,
    "first_name": "Dedric",
    "last_name": "Gerhold",
    "email": "Dedric_Gerhold@yahoo.com",
    "address": "Dagmar Rest",
    "zipcode": "02750-3720",
    "city": "West Ivoryfurt",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/diesellaws/128.jpg",
    "birthday": "2005-02-09T17:46:01.858Z",
    "first_seen": "2016-03-22T09:01:01.693Z",
    "last_seen": "2017-09-18T21:41:05.645Z",
    "has_ordered": true,
    "latest_purchase": "2019-02-10T07:39:27.178Z",
    "has_newsletter": false,
    "groups": [],
    "nb_commands": 4,
    "total_spent": 426.78
  },
  {
    "id": 186,
    "first_name": "Buster",
    "last_name": "Wunsch",
    "email": "Buster.Wunsch@gmail.com",
    "address": "Hester Neck",
    "zipcode": "00280-8107",
    "city": "East Vincent",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/isnifer/128.jpg",
    "birthday": "1977-04-03T12:56:11.931Z",
    "first_seen": "2018-01-01T07:50:32.501Z",
    "last_seen": "2018-06-18T00:29:31.487Z",
    "has_ordered": true,
    "latest_purchase": "2019-02-04T00:48:34.612Z",
    "has_newsletter": false,
    "groups": [],
    "nb_commands": 3,
    "total_spent": 649.66
  },
  {
    "id": 200,
    "first_name": "Jorge",
    "last_name": "Tromp",
    "email": "Jorge68@yahoo.com",
    "address": "Golda Flat",
    "zipcode": "09286",
    "city": "North Pattiestad",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/maikelk/128.jpg",
    "birthday": "1968-05-04T15:24:42.610Z",
    "first_seen": "2018-03-29T19:13:31.038Z",
    "last_seen": "2018-11-01T13:51:29.873Z",
    "has_ordered": true,
    "latest_purchase": "2018-11-24T18:46:24.381Z",
    "has_newsletter": true,
    "groups": [
      "regular"
    ],
    "nb_commands": 4,
    "total_spent": 598.41
  }
  ],
	invoices: [
		  {
			"id": 67,
			"date": "2019-02-13T16:16:59.601Z",
			"command_id": 766,
			"customer_id": 30,
			"total_ex_taxes": 52.6,
			"delivery_fees": 5.82,
			"tax_rate": 0.17,
			"taxes": 9.93,
			"total": 68.35
		  },
		  {
			"id": 66,
			"date": "2019-02-13T12:58:16.794Z",
			"command_id": 267,
			"customer_id": 759,
			"total_ex_taxes": 31.12,
			"delivery_fees": 4.36,
			"tax_rate": 0.2,
			"taxes": 7.1,
			"total": 42.58
		  },
		  {
			"id": 65,
			"date": "2019-02-10T07:39:27.178Z",
			"command_id": 222,
			"customer_id": 163,
			"total_ex_taxes": 226.27999999999997,
			"delivery_fees": 5.26,
			"tax_rate": 0.17,
			"taxes": 39.36,
			"total": 270.9
		  },
		  {
			"id": 64,
			"date": "2019-02-08T13:54:44.572Z",
			"command_id": 585,
			"customer_id": 369,
			"total_ex_taxes": 10.16,
			"delivery_fees": 5.52,
			"tax_rate": 0.12,
			"taxes": 1.88,
			"total": 17.56
		  },
		  {
			"id": 63,
			"date": "2019-02-08T09:42:34.545Z",
			"command_id": 340,
			"customer_id": 335,
			"total_ex_taxes": 368.69,
			"delivery_fees": 3.67,
			"tax_rate": 0.17,
			"taxes": 63.3,
			"total": 435.66
		  },
		  {
			"id": 62,
			"date": "2019-02-04T23:32:07.834Z",
			"command_id": 289,
			"customer_id": 256,
			"total_ex_taxes": 441.21,
			"delivery_fees": 3.94,
			"tax_rate": 0.12,
			"taxes": 53.42,
			"total": 498.57
		  }
		],
	 commands:[
  {
    "id": 766,
    "reference": "KCQKA2",
    "date": "2019-02-04T00:48:34.612Z",
    "customer_id": 186,
    "basket": [
      {
        "product_id": 38,
        "quantity": 3
      }
    ],
    "total_ex_taxes": 200.61,
    "delivery_fees": 3.85,
    "tax_rate": 0.2,
    "taxes": 40.89,
    "total": 245.35,
    "status": "ordered",
    "returned": false
  },
  {
    "id": 16,
    "reference": "W1G8LE",
    "date": "2019-02-13T16:16:59.601Z",
    "customer_id": 766,
    "basket": [
      {
        "product_id": 120,
        "quantity": 1
      }
    ],
    "total_ex_taxes": 52.6,
    "delivery_fees": 5.82,
    "tax_rate": 0.17,
    "taxes": 9.93,
    "total": 68.35,
    "status": "ordered",
    "returned": false
  },
  {
    "id": 36,
    "reference": "20EMHV",
    "date": "2018-11-30T02:14:08.047Z",
    "customer_id": 356,
    "basket": [
      {
        "product_id": 28,
        "quantity": 1
      }
    ],
    "total_ex_taxes": 44.34,
    "delivery_fees": 6,
    "tax_rate": 0.12,
    "taxes": 6.04,
    "total": 56.38,
    "status": "cancelled",
    "returned": false
  },
  {
    "id": 48,
    "reference": "X7WOGI",
    "date": "2019-01-25T18:19:08.262Z",
    "customer_id": 331,
    "basket": [
      {
        "product_id": 81,
        "quantity": 2
      },
      {
        "product_id": 119,
        "quantity": 1
      }
    ],
    "total_ex_taxes": 63.47,
    "delivery_fees": 7.28,
    "tax_rate": 0.17,
    "taxes": 12.03,
    "total": 82.78,
    "status": "ordered",
    "returned": false
  },
  {
    "id": 53,
    "reference": "FDVZ32",
    "date": "2019-01-19T13:12:28.183Z",
    "customer_id": 460,
    "basket": [
      {
        "product_id": 112,
        "quantity": 1
      }
    ],
    "total_ex_taxes": 38.71,
    "delivery_fees": 3.84,
    "tax_rate": 0.2,
    "taxes": 8.51,
    "total": 51.06,
    "status": "ordered",
    "returned": false
  }
],	
})
    return (
	 
     <Admin dashboard={Dashboard}  dataProvider={dataProvider} i18nProvider={i18nProvider} menu={Menu}  appLayout={Layout}  customRoutes={customRoutes}>  
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
		<Resource name="customers" {...visitors} />
         <Resource
                    name="commands"
                    {...orders}
                    options={{ label: 'Orders' }}
                />
		 <Resource name="invoices" {...invoices} />
		<Resource name="products" {...products} />
		<Resource name="categories" {...categories} />
    </Admin>
    )
  }
}
