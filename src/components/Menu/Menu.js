import React from 'react';
import './Menu.css';
import { FaChevronDown } from 'react-icons/fa';

const Menu = () => {
    return (
        <div className="menu">
            <h1>Logotype</h1>
            <ul>
                <li>
                    <a href="#home">
                        Demos <FaChevronDown />
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#demo1">Demo 1</a>
                        </li>
                        <li>
                            <a href="#demo2">Demo 2</a>
                        </li>
                        <li>
                            <a href="#demo3">Demo 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#about">
                        Post <FaChevronDown />
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#post1">Post 1</a>
                        </li>
                        <li>
                            <a href="#post2">Post 2</a>
                        </li>
                        <li>
                            <a href="#post3">Post 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#services">
                        Features <FaChevronDown />
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#feature1">Feature 1</a>
                        </li>
                        <li>
                            <a href="#feature2">Feature 2</a>
                        </li>
                        <li>
                            <a href="#feature3">Feature 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#contact">
                        Categories <FaChevronDown />
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#category1">Category 1</a>
                        </li>
                        <li>
                            <a href="#category2">Category 2</a>
                        </li>
                        <li>
                            <a href="#category3">Category 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#shop">
                        Shop <FaChevronDown />
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#shop1">Shop 1</a>
                        </li>
                        <li>
                            <a href="#shop2">Shop 2</a>
                        </li>
                        <li>
                            <a href="#shop3">Shop 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#buy">Buy Now</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
