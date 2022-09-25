import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import ReactPaginate from 'react-paginate';

export default function Payment(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>
                <div>
                    <Table striped bordered hover variant="dark" style={{ 'textAlign': 'center' }}>
                        <thead >
                            <tr>
                                <th>Transaction ID</th>
                                <th>Amount</th>
                                <th>Name</th>
                                <th>Login ID</th>
                                <td>DURATION</td>
                            </tr>
                        </thead>
                        {currentItems.map(payment => {
                            return (
                                <tbody key={payment.pid}>
                                    <tr>
                                        <td>{payment.pid}</td>
                                        <td>₹.{payment.fees}</td>
                                        <td>{payment.name}</td>
                                        <td>{payment.loginid}</td>
                                        <td>{payment.duration}</td>
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