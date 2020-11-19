import React from 'react'

const SearchTournament = () => {
    return ( 
        <div className="searchtournament pt-3">
            <div className="container">
                <center><h3>Search Tournament</h3></center>
            <form>
            <ul className="search-input">
                <li>
                    <label for="exampleInputEmail1">Game Username</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Wazito</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </li>
                <li>
                    <label for="exampleInputEmail1">Game name</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>FIFA 21</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </li>
                <li>
                    <label for="exampleInputEmail1">Game console</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Playstation 4</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </li>
                <li>
                    <label for="exampleInputEmail1">User's Username</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>gitx5622</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </li>
                {/* <li><br/><Button className="btn-solid">Search</Button></li> */}
            </ul>
            </form>
            </div>
        </div>
     );
}
 
export default SearchTournament;