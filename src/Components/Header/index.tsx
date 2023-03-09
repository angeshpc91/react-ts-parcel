import React, { FC, useEffect, useState } from 'react';

import { IHeaderProps } from './Header.type';
import { useAppSelector, useAppDispatch } from '@hooks/useRedux';
// import styles from './Header.module.scss';
import { themeSelection } from '@Redux/User';


import { useLocation, useNavigate } from 'react-router';
import { ROUTES } from '@Constants/routes';
import { $WHITE } from '@Constants/color';

import styled from 'styled-components';

const StyledCircleBack = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 44px;
  height: 44px;
  left: 16px;
  top: 32px;

  /* Light/Surface/Primary ($sz-colour-surface-primary)

  Surface color to be used only as background color of of component background. 
  */
  background: #FFFFFF;
  /* Light/Stroke/Default ($sz-colour-stroke-default)

  Default stroke color to be used as default color on component/UI element borders
  */
  border: 1px solid #E2E2E2;
  /* Elevation/8dp */

  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  z-index: 1;
`;


/* Search Styles for header */
type SearchContainerProps = {
  focusSlide: boolean
}
const StyledSearchContainer = styled.section<SearchContainerProps>`
  height: ${location.pathname === ROUTES.SEARCH ? 'calc(100vh - 62px)' : '100vh'};
  width: 100%;
  visibility: ${props => props.focusSlide ? 'visible' : 'hidden'};
  background: ${$WHITE};
`;
const StyledSearchContainerHeader = styled.header`
  display: ${location.pathname === ROUTES.SEARCH ? 'none' : 'flex'};
  align-items: center;
  padding: 16px;
`;

const Header: FC<IHeaderProps> = ({ switched, onThemeChange }) => {
  // const count = useAppSelector((state) => state.user.theme);
  const dispatch = useAppDispatch();
  // const location = useLocation();

  // const [headerSearchText, setHeaderSearchText] = useState('');
  // const [isSearch, setIsSearch] = useState(true);
  // const [focusSlide, setFocusSlide] = useState(false);
  // const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // const navigate = useNavigate();

  const { state } = useLocation();
  // if (location.pathname.includes('category')) {
  //   const { categoryName } = state
  // }
  useEffect(() => {
    if (switched) { dispatch(themeSelection(switched)); }
  }, [switched]);


  return (
    <>
      <header>header
      </header>
      {/* <SlideIn className={isCategoryOpen ? 'active' : ''}>

          <h1 onClick={() => { setIsCategoryOpen(false) }}>hello</h1>
      </SlideIn> */}
    </>
  );
};

export default Header;
