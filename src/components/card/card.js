
import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';

const { Meta } = Card;
const CardMovie = ({ movie }) => (


    <div className="col-md-4">

        <div className="card animated fadeInUp">
            <div>
                <Card
                    hoverable
                    style={{ width: 100 }}
                    cover={<img src={movie.Poster}
                        alt={movie.Title} />}
                >
                    <Meta title={`${movie.Title} (${movie.Year})`} description={`Type: ${movie.Type}`} />
                </Card>
            </div>

        </div>
    </div>
);

CardMovie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
    }).isRequired,
};

export default CardMovie;