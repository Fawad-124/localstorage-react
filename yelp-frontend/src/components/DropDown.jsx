import styled, { createGlobalStyle, css } from 'styled-components'
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import * as ReachUI from '@reach/menu-button'
// import img from 'next/img';
import arrowdown from '../imgs/icons/arrowdown.png';
import "@reach/menu-button/styles.css";
export default function CategoryDropdown(props) {
    let { title } = props;
    let [isOverButton, setIsOverButton] = useState(false);
    let [isOverList, setIsOverList] = useState(false);
    let [isOpen, setIsOpen] = useState();
    let [isTouchInput, setIsTouchInput] = useState();
    let [hasClicked, setHasClicked] = useState();
    let button = useRef(null);
    const wideOrHover = styles => ({ parent }) => css`
  ${parent}:hover & {
    ${styles};
  }
  @media (min-width: 800px) {
    ${styles};
  }
`

    const MenuButton = styled(ReachUI.MenuButton)`
    padding: 15px 15px 15px 15px !important;
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;
    letter-spacing: 0.1em; 
    text-transform: uppercase;
    // display: flex;
    border:none;
    // height:20px;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
  &:focus,
  &:hover {
    background-color: #FFA800;
    outline: none;
  }
  ${wideOrHover`
    justify-content: center;
    padding: 1.6rem 1.2rem;
  `};
`


    useLayoutEffect(() => {
        if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
            button.current.click();
            setIsOpen(false);
        } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
            button.current.click();
            setIsOpen(true);
        }
    }, [isOverButton, isOverList]);

    useEffect(() => {
        setIsTouchInput(false);
        setHasClicked(false);
    }, [hasClicked]);

    return (
        <Menu>
            <MenuButton
                ref={button}
                onTouchStart={() => {
                    setIsTouchInput(true);
                }}
                onMouseEnter={hover => {
                    setIsOverButton(true);
                }}
                onMouseLeave={hover => {
                    setIsOverButton(false);
                }}
                onClick={() => {
                    setHasClicked(true);
                    setIsOpen(!isOpen);
                }}
                onKeyDown={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <span>{title}</span><img src={arrowdown} alt="..." width={11} height={7} />
            </MenuButton>
            <MenuList
                onMouseEnter={hover => {
                    setIsOverList(true);
                }}
                onMouseLeave={hover => {
                    setIsOverList(false);
                }}
            >
                {props.data_array.map((ele) => {
                    const url = `listing/${ele[1]}`
                    return (
                        <a href={url}>
                            <MenuItem
                                onSelect={() => {
                                    setIsOpen(false);
                                }}
                            >
                                {ele[0]}
                            </MenuItem>
                        </a>
                    )
                })}
            </MenuList>
        </Menu>
    );
}
