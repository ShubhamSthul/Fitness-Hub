import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ReactSession } from 'react-client-session';



export default function Memberbyid(props) {
    const { data } = props;
    console.log(data);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const history = useHistory();
    const [check, setCheck] = useState(false);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
        setCheck(true)

    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    function update(id) {
        ReactSession.set("mem", id);
        history.push({
            pathname: '/updatetrainingplan',
            state: id
        })

    }

    return (
        <>
            <div>
                <div>
                    <Table striped bordered hover variant="dark" style={{ 'textAlign': 'center' }}>
                        <thead>
                            <tr>
                                <th>Member ID</th>
                                <th>Full Name</th>
                                <th>Trainer Id</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Chest</th>
                                <th>Waist</th>
                                <th>Injury</th>
                                <th>Email</th>
                                <th>ContactNo</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {check && currentItems.map(user => {
                            return (
                                <tbody key={user.tid}>
                                    <tr>
                                        <td>{user.memid}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.tid}</td>
                                        <td>{user.height}</td>
                                        <td>{user.weight}</td>
                                        <td>{user.chest}</td>
                                        <td>{user.waist}</td>
                                        <td>{user.injury}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contactno}</td>
                                        <td>{user.status}</td>
                                        <td><button className="btn btn-primary" onClick={() => { update(user.memid) }} type="button">Training Plan</button></td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </Table>
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
}