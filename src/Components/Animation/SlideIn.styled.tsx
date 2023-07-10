import styled from 'styled-components';

export const SlideIn = styled.div`
  /* bottom: 0; */
  height: auto;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  z-index: 1235;
  /* transform:  translateY(${window.innerHeight}); */
  /* opacity: 0; */
  /* bottom: ${window.innerHeight}px; */
  transform: translateY(${window.innerHeight}px);
  transition: all 390ms;

  /* transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
   */
  /* visibility: hidden; */
  /* transform:  translateY(${window.innerWidth}px); */
  /* transition: transform 225ms ease; */
  &.active{
    /* opacity: 1; */
    bottom:0;
    transform: none;
    transition: all 255ms;
  /* transition:  395ms ; */

    /* transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
    /* visibility: visible; */
  }
`;
