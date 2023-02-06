import { useEffect, useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {

    //1 create useState
    const [speaker, setSpeaker] = useState([])

    //2 call api
    useEffect(() => {
        fetch("api/speaker/GetSpeaker")
            .then(response => {
                return response.json()
            })
            .then(responeJson => {
                setSpeaker(responeJson)
            })
    }, [])

    //3. Create table
    return (
        <div className="container">
            <h1>Speaker</h1>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Qualification</th>
                                <th>Experience</th>
                                <th>Images</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {
                                console.log(speaker)
                            }
                            {                            
                                speaker.map((item) => (                                 
                                   <React.Fragment>
                                        
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.speakerName}</td>
                                            <td>{item.qualification}</td>
                                            <td>{item.experience}</td>
                                            <td>{item.profilePicture}</td>
                                        </tr>
                                    </React.Fragment>
                                ))
                            }             
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default App;