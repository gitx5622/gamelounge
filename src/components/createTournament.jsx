import React from 'react';
import { Button } from 'shards-react';

const CreateTournament = () => {
    return ( 
        <div className="createtourna p-3">
            <center><h3>Game not in the list? Create Tournament</h3>
            <Button className="btn-solid">
                Create Tournament
            </Button>
            </center>
        </div>
     );
}
 
export default CreateTournament;