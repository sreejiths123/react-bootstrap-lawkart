import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './admin/posts';
import DefaultPage from './admin/DefaultPage';
import fakeDataProvider from 'ra-data-fakerest';
import Dashboard from './admin/Dashboard';
import englishMessages from './admin/i18n/en';

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
    comments: [
        { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
        { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
    ],
})
    return (
	 
     <Admin dashboard={Dashboard}  dataProvider={dataProvider} i18nProvider={i18nProvider} >  
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
    )
  }
}
