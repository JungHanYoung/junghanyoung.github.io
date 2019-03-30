import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


const propTypes = {
    allTagsInfo: PropTypes.shape({
        [PropTypes.string]: PropTypes.number
    })
};


const TagList = ({ allTagsInfo }) => {
    const tagList = Object.keys(allTagsInfo)
    return (
        <div className="tag tag--list">
            {tagList.map(tag =>
                <Link
                    key={`tag--page_${tag}`}
                    className="tag  tag--item"
                    to={`/tags/${tag}`}
                >
                    <span className="tag--item--name">{tag}</span>
                    <span className="tag--item--count">{allTagsInfo[tag]}</span>
                </Link>)}
        </div>
    );
};


TagList.propTypes = propTypes;


export default TagList;
