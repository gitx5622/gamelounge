import React from 'react'

const SearchTournament = () => {
    return ( 
        <div className="searchtournament pt-3">
            <div className="container">
                <center><h3>Search Tournament</h3></center>
            <form>
            <ul className="search-input">
                <li>
                    <label htmlFor="exampleInputEmail1">Game Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </li>
                <li>
                    <label htmlFor="exampleInputEmail1">Game name</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>FIFA 21</option>
                    <option>MADDEN 3</option>
                    <option>NBA 2K</option>
                    <option>FIFA 20</option>
                    <option>FORNITE</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="exampleInputEmail1">Game console</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Playstation 4</option>
                    <option>X-BOX ONE</option>
                    <option>PC</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="exampleInputEmail1">User's Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </li>
                {/* <li><br/><Button className="btn-solid">Search</Button></li> */}
            </ul>
            </form>
            </div>
        </div>
     );
}
 
export default SearchTournament;