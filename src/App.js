/// app.js
import React from 'react';
import LayeredMap from './LayeredMap';
import FormLSOA from './FormLSOA';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path='/plot/2011' exact component={() => <LayeredMap key={'2011'} year={'2011'} />} />
                    <Route path='/plot/2012' exact component={() => <LayeredMap key={'2012'} year={'2012'} />} />
                    <Route path='/plot/2013' exact component={() => <LayeredMap key={'2013'} year={'2013'} />} />
                    <Route path='/plot/2014' exact component={() => <LayeredMap key={'2014'} year={'2014'} />} />
                    <Route path='/plot/2015' exact component={() => <LayeredMap key={'2015'} year={'2015'} />} />
                    <Route path='/plot/2016' exact component={() => <LayeredMap key={'2016'} year={'2016'} />} />
                    <Route path='/plot/2017' exact component={() => <LayeredMap key={'2017'} year={'2017'} />} />
                    <Route path='/plot/2018' exact component={() => <LayeredMap key={'2018'} year={'2018'} />} />
                    <Route path='/plot/2019' exact component={() => <LayeredMap key={'2019'} year={'2019'} />} />
                    <Route path='/form' exact component={() => <FormLSOA/>} />
                </Router>
            </div>
        );
    }
}