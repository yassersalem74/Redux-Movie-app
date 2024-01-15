import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from 'react-redux';
import { useState , useEffect} from "react";
import { getPage } from "../redux/actions/movieAction";

const Paginationn = () => {

  const [pageCount, setpageCount] = useState(0);

  const dispatch = useDispatch()

  const pages = useSelector((state) =>state.pageCount)

  // just one time when the first component rendering
  useEffect(() => {
    // getAllMovies();
    setpageCount(pages);

  }, []);


  //pages pagination
  //get current page  
  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
 
  };


  





  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active "}

    />
  );
};

export default Paginationn;
