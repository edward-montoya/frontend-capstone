import { faRoadBarrier } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
    return(
        <section className="notfound">
            <div className="notfound__icon">
                <FontAwesomeIcon icon={faRoadBarrier} />
            </div>
            <h1 className="notfound__title">Work in progress or Page not found</h1>
        </section>
    );
}

export default NotFound;