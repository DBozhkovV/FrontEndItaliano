import React, {useState, useEffect} from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Cars = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const getCars = async () => {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:8000/dealership/cars/?format=json', {mode: 'cors'});
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getCars();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filter.slice(indexOfFirstPost, indexOfLastPost);

    const filterProduct = (type) => {
        const updatedList = data.filter((x)=>x.make === type);
        setFilter(updatedList);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">All Cars</h1>
                    <hr/>
                </div>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button> 
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Audi")}>Audi</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("BMW")}>BMW</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Mercedes-Benz")}>Mercedes-Benz</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Opel")}>Opel</button> 
                </div>
                <Posts posts={currentPosts} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={filter.length} paginate={paginate} />
            </div>
        </div>
    );
}

export default Cars;