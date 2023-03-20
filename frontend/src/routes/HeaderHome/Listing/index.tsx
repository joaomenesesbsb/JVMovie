import Moviecard from "../../../components/MovieCard";
import Pagination from "../../../components/Pagination";
import "./styles.css";

export default function Listing() {
    return (
        <main className="container mb-20">
            <Pagination />
            <div className="jv-movie-cards">
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            </div>
        </ main>
    )
}