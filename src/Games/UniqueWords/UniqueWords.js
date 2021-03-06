import React from 'react'; 
import { Link } from 'react-router-dom'; 

class UniqueWordsApp extends React.Component {
    render() {
        return (
            <div>
                <h3 className="text-warning" style={{ paddingTop: '90px' }}>Unique Words</h3>
                <h6 className="text-white" style={{ margin: '10px', marginTop: '20px' }}>Throughout the Scripture portion, there are words that only appear ONCE in the entire book. This Fill-in-the-Blank game will test your knowledge of these unique words.</h6>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px', textAlign: 'center' }}>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc1">Chapter 1</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc2">Chapter 2</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc3">Chapter 3</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc4">Chapter 4</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc5">Chapter 5</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc6">Chapter 6</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc7">Chapter 7</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc8">Chapter 8</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc14">Chapter 14</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc15">Chapter 15</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc27">Chapter 27: Part 1 (v. 1-33)</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc27p2">Chapter 27: Part 2 (v. 34-66)</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link className="text-white" to="/uwc28">Chapter 28</Link></li>
                </ul>
                <br/>
                <br/>
            </div>
        )
    }
}

export default UniqueWordsApp; 