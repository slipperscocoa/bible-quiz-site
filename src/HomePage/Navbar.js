import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import HomePageApp from './HomePage'; 
import DottedVersesApp from './DottedVerses';
import TipsApp from './Tips';
import HelpApp from './Help';

import QuizzesApp from '../Quizzes/Quizzes'; 
import QC1S1App from '../Quizzes/Meet 1/QC1S1';
import QC1S2App from '../Quizzes/Meet 1/QC1S2';
import QC2S1App from '../Quizzes/Meet 1/QC2S1';
import QC2S2App from '../Quizzes/Meet 1/QC2S2';
import QC2S3App from '../Quizzes/Meet 1/QC2S3';
import QC3S1App from '../Quizzes/Meet 1/QC3S1';
import QC3S2App from '../Quizzes/Meet 1/QC3S2';
import QC4S1App from '../Quizzes/Meet 1/QC4S1';
import QC4S2App from '../Quizzes/Meet 1/QC4S2';
import QC4S3App from '../Quizzes/Meet 1/QC4S3';
import QC4S4App from '../Quizzes/Meet 1/QC4S4';
import QC5S1App from '../Quizzes/Meet 1/QC5S1';
import QC5S2App from '../Quizzes/Meet 1/QC5S2';
import QC5S3App from '../Quizzes/Meet 1/QC5S3';
import QC5S4App from '../Quizzes/Meet 1/QC5S4';
import QC5S5App from '../Quizzes/Meet 1/QC5S5';
import QC5S6App from '../Quizzes/Meet 1/QC5S6';
import QC5S7App from '../Quizzes/Meet 1/QC5S7';
import QC5S8App from '../Quizzes/Meet 1/QC5S8';
import QC5S9App from '../Quizzes/Meet 1/QC5S9';
import QC5S10App from '../Quizzes/Meet 1/QC5S10';
import QC6S1App from '../Quizzes/Meet 2/QC6S1';
import QC6S2App from '../Quizzes/Meet 2/QC6S2';
import QC6S3App from '../Quizzes/Meet 2/QC6S3';
import QC6S4App from '../Quizzes/Meet 2/QC6S4';
import QC6S5App from '../Quizzes/Meet 2/QC6S5';
import QC7S1App from '../Quizzes/Meet 2/QC7S1';
import QC7S2App from '../Quizzes/Meet 2/QC7S2';
import QC7S3App from '../Quizzes/Meet 2/QC7S3';
import QC7S4App from '../Quizzes/Meet 2/QC7S4';
import QC7S5App from '../Quizzes/Meet 2/QC7S5';
import QC7S6App from '../Quizzes/Meet 2/QC7S6';
import QC8S1App from '../Quizzes/Meet 2/QC8S1';
import QC8S2App from '../Quizzes/Meet 2/QC8S2';
import QC8S3App from '../Quizzes/Meet 2/QC8S3';
import QC8S4App from '../Quizzes/Meet 2/QC8S4';
import QC8S5App from '../Quizzes/Meet 2/QC8S5';
import QC8S6App from '../Quizzes/Meet 2/QC8S6';
import QC14S1App from '../Quizzes/Meet 3/QC14S1';
import QC14S2App from '../Quizzes/Meet 3/QC14S2';
import QC14S3App from '../Quizzes/Meet 3/QC14S3';
import QC15S1App from '../Quizzes/Meet 3/QC15S1';
import QC15S2App from '../Quizzes/Meet 3/QC15S2';
import QC15S3App from '../Quizzes/Meet 3/QC15S3';
import QC27S1App from '../Quizzes/Meet 4/QC27S1';
import QC27S2App from '../Quizzes/Meet 4/QC27S2';
import QC27S3App from '../Quizzes/Meet 4/QC27S3';
import QC27S4App from '../Quizzes/Meet 4/QC27S4';
import QC27S5App from '../Quizzes/Meet 4/QC27S5';
import QC27S6App from '../Quizzes/Meet 4/QC27S6';
import QC27S7App from '../Quizzes/Meet 4/QC27S7';
import QC28S1App from '../Quizzes/Meet 4/QC28S1';
import QC28S2App from '../Quizzes/Meet 4/QC28S2';
import QC28S3App from '../Quizzes/Meet 4/QC28S3';

import ChapterAnalysisApp from '../Games/ChapterAnalysis/ChapterAnalysis';
import CAC1App from '../Games/ChapterAnalysis/CAC1';
import CAC2App from '../Games/ChapterAnalysis/CAC2';
import CAC3App from '../Games/ChapterAnalysis/CAC3';
import CAC4App from '../Games/ChapterAnalysis/CAC4';
import CAC5App from '../Games/ChapterAnalysis/CAC5';
import CAC6App from '../Games/ChapterAnalysis/CAC6';
import CAC7App from '../Games/ChapterAnalysis/CAC7';
import CAC8App from '../Games/ChapterAnalysis/CAC8';
import CAC14App from '../Games/ChapterAnalysis/CAC14';
import CAC15App from '../Games/ChapterAnalysis/CAC15';
import CAC27App from '../Games/ChapterAnalysis/CAC27';
import CAC28App from '../Games/ChapterAnalysis/CAC28';

import CrosswordsApp from '../Games/Crosswords/Crosswords'; 

import UniqueWordsApp from '../Games/UniqueWords/UniqueWords';
import UWC1App from '../Games/UniqueWords/UWC1'; 
import UWC2App from '../Games/UniqueWords/UWC2';
import UWC3App from '../Games/UniqueWords/UWC3';
import UWC4App from '../Games/UniqueWords/UWC4';
import UWC5App from '../Games/UniqueWords/UWC5';
import UWC6App from '../Games/UniqueWords/UWC6';
import UWC7App from '../Games/UniqueWords/UWC7';
import UWC8App from '../Games/UniqueWords/UWC8';
import UWC14App from '../Games/UniqueWords/UWC14';
import UWC15App from '../Games/UniqueWords/UWC15';
import UWC27App from '../Games/UniqueWords/UWC27';
import UWC27P2App from '../Games/UniqueWords/UWC27P2';
import UWC28App from '../Games/UniqueWords/UWC28';


class NavbarApp extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Navbar bg="info" className="HomePageNavBar" fixed="top">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Link to="/" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Home</Link>
                            <NavDropdown title="Games" id="basic-nav-dropdown" style={{ color: "black", margin: "15px" }}>
                                <li><Link to="/crosswords" >Crosswords</Link></li>
                                <li><Link to="/chapteranalysis">Chapter Analysis</Link></li>
                                <li><Link to="/uniquewords">Unique Words</Link></li>
                            </NavDropdown>
                            <Link to="/quizzes" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Quizzes</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                
                    <Switch>
                        <Route exact path="/" component={HomePageApp} />

                        <Route exact path="/crosswords" component={CrosswordsApp} />
                            
                        <Route exact path="/chapteranalysis" component={ChapterAnalysisApp} />
                        <Route exact path="/cac1" component={CAC1App} />
                        <Route exact path="/cac2" component={CAC2App} />
                        <Route exact path="/cac3" component={CAC3App} />
                        <Route exact path="/cac4" component={CAC4App} />
                        <Route exact path="/cac5" component={CAC5App} />
                        <Route exact path="/cac6" component={CAC6App} />
                        <Route exact path="/cac7" component={CAC7App} />
                        <Route exact path="/cac8" component={CAC8App} />
                        <Route exact path="/cac14" component={CAC14App} />
                        <Route exact path="/cac15" component={CAC15App} />
                        <Route exact path="/cac27" component={CAC27App} />
                        <Route exact path="/cac28" component={CAC28App} />
                                                        
                        <Route exact path="/uniquewords" component={UniqueWordsApp} />
                        <Route exact path="/uwc1" component={UWC1App} />
                        <Route exact path="/uwc2" component={UWC2App} />
                        <Route exact path="/uwc3" component={UWC3App} />
                        <Route exact path="/uwc4" component={UWC4App} />
                        <Route exact path="/uwc5" component={UWC5App} />
                        <Route exact path="/uwc6" component={UWC6App} />
                        <Route exact path="/uwc7" component={UWC7App} />
                        <Route exact path="/uwc8" component={UWC8App} />
                        <Route exact path="/uwc14" component={UWC14App} />
                        <Route exact path="/uwc15" component={UWC15App} />
                        <Route exact path="/uwc27" component={UWC27App} />
                        <Route exact path="/uwc27p2" component={UWC27P2App} />
                        <Route exact path="/uwc28" component={UWC28App} />
                            
                        <Route exact path="/quizzes" component={QuizzesApp} />
                        <Route exact path="/qc1s1" component={QC1S1App} />
                        <Route exact path="/qc1s2" component={QC1S2App} />
                        <Route exact path="/qc2s1" component={QC2S1App} />
                        <Route exact path="/qc2s2" component={QC2S2App} />
                        <Route exact path="/qc2s3" component={QC2S3App} />
                        <Route exact path="/qc3s1" component={QC3S1App} />
                        <Route exact path="/qc3s2" component={QC3S2App} />
                        <Route exact path="/qc4s1" component={QC4S1App} />
                        <Route exact path="/qc4s2" component={QC4S2App} />
                        <Route exact path="/qc4s3" component={QC4S3App} />
                        <Route exact path="/qc4s4" component={QC4S4App} />
                        <Route exact path="/qc5s1" component={QC5S1App} />
                        <Route exact path="/qc5s2" component={QC5S2App} />
                        <Route exact path="/qc5s3" component={QC5S3App} />
                        <Route exact path="/qc5s4" component={QC5S4App} />
                        <Route exact path="/qc5s5" component={QC5S5App} />
                        <Route exact path="/qc5s6" component={QC5S6App} />
                        <Route exact path="/qc5s7" component={QC5S7App} />
                        <Route exact path="/qc5s8" component={QC5S8App} />
                        <Route exact path="/qc5s9" component={QC5S9App} />
                        <Route exact path="/qc5s10" component={QC5S10App} />
                        <Route exact path="/qc6s1" component={QC6S1App} />
                        <Route exact path="/qc6s2" component={QC6S2App} />
                        <Route exact path="/qc6s3" component={QC6S3App} />
                        <Route exact path="/qc6s4" component={QC6S4App} />
                        <Route exact path="/qc6s5" component={QC6S5App} />
                        <Route exact path="/qc7s1" component={QC7S1App} />
                        <Route exact path="/qc7s2" component={QC7S2App} />
                        <Route exact path="/qc7s3" component={QC7S3App} />
                        <Route exact path="/qc7s4" component={QC7S4App} />
                        <Route exact path="/qc7s5" component={QC7S5App} />
                        <Route exact path="/qc7s6" component={QC7S6App} />
                        <Route exact path="/qc8s1" component={QC8S1App} />
                        <Route exact path="/qc8s2" component={QC8S2App} />
                        <Route exact path="/qc8s3" component={QC8S3App} />
                        <Route exact path="/qc8s4" component={QC8S4App} />
                        <Route exact path="/qc8s5" component={QC8S5App} />
                        <Route exact path="/qc8s6" component={QC8S6App} />
                        <Route exact path="/qc14s1" component={QC14S1App} />
                        <Route exact path="/qc14s2" component={QC14S2App} />
                        <Route exact path="/qc14s3" component={QC14S3App} />
                        <Route exact path="/qc15s1" component={QC15S1App} />
                        <Route exact path="/qc15s2" component={QC15S2App} />
                        <Route exact path="/qc15s3" component={QC15S3App} />
                        <Route exact path="/qc27s1" component={QC27S1App} />
                        <Route exact path="/qc27s2" component={QC27S2App} />
                        <Route exact path="/qc27s3" component={QC27S3App} />
                        <Route exact path="/qc27s4" component={QC27S4App} />
                        <Route exact path="/qc27s5" component={QC27S5App} />
                        <Route exact path="/qc27s6" component={QC27S6App} />
                        <Route exact path="/qc27s7" component={QC27S7App} />
                        <Route exact path="/qc28s1" component={QC28S1App} />
                        <Route exact path="/qc28s2" component={QC28S2App} />
                        <Route exact path="/qc28s3" component={QC28S3App} />

                        <Route exact path="/dottedverses" component={DottedVersesApp} />

                        <Route exact path="/tips" component={TipsApp} />

                        <Route exact path="/help" component={HelpApp} />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default NavbarApp; 