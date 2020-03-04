import React from 'react';
import '../../../Styles/MovieStyle/DetailMovieStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DetailMovie(props) {

    return (
        <div className="detail">
            <h1 style={{textAlign: "center"}}>
                {props.title}
            </h1>
            <hr />
            <div className="container" style={{ marginTop: "5px"}}>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="card-img-top" src={props.img} alt=" "/>

                    </div>
                    <div className="col-sm-6">
                        <h5 className="spanClass">
                            <span className="badge badge-secondary span">
                                {props.rated}
                            </span>
                            <span className="badge badge-secondary span">
                                {props.runtime}
                            </span>
                            <span className="badge badge-secondary span">
                                {props.genre}
                            </span>
                            <span className="badge badge-secondary span">
                                {props.year}
                            </span>
                            <span className="badge badge-secondary span">
                                {props.released}
                            </span>
                            <span className="badge badge-secondary span">
                                {props.boxoffice}
                            </span>
                            <span className="badge badge-secondary span">
                                {props.language}
                            </span>
                            <span className="badge badge-secondary span imdblink">
                                <a href={`https://www.imdb.com/title/${props.imdblink}/`}
                                >Imdb Link
                                </a>
                            </span>
                        </h5>
                        <br />
                        <h4 className="info">Info</h4>
                        <table className="table">
                            <tbody>
                            <tr>
                                <th>Directors</th>
                                <td>{props.director}</td>
                            </tr>
                            <tr>
                                <th>Actors</th>
                                <td>{props.actors}</td>
                            </tr>
                            <tr>
                                <th>Writer</th>
                                <td>{props.writer}</td>
                            </tr>
                            <tr>
                                <th>Awards</th>
                                <td>{props.awards}</td>
                            </tr>
                            <tr>
                                <th>Production</th>
                                <td>{props.production}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{props.plot}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
