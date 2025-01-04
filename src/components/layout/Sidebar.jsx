import React from "react";
import PropTypes from "prop-types";
import "./sidebar.css";

const Sidebar = ({ menuItems }) => {
    return (
        <div className="sidebar-container">
            <ul className="sidebar-menu">
                {menuItems && menuItems.map((item, index) => (
                    <li key={index} className="sidebar-menu-item">
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Sidebar;
