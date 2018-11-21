import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Launch from './Launch.js';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

class Launches extends React.Component {
    render() {
        return(
            <Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {(
                        { loading, error, data }) => {
                            if(loading) return <p>loading</p>
                            if(error) console.log(error);
                            console.log(data);
                            return <Fragment>
                                {
                                    data.launches.map(launch => (
                                        <Launch key={launch.flight_number} launch={launch}/>
                                    ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launches;