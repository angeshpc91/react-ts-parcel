
import React, { ReactNode } from 'react';
import { SlideIn } from '@Components/Animation/SlideIn.styled';
import Grid from '@Components/Grid';
import styled from 'styled-components';
import CloseBtn from './assets/close_button.svg';

interface StaggerProps {
  open: boolean;
}

interface BackdropProps {
  open: boolean;
  backdropFilter: string;
  backdropColor: string;
}

interface ModalProps {
  disableGutter: boolean;
}

const StyledStaggerContainer = styled.div<StaggerProps>`
  /* display: ${props => props.open ? 'block' : 'none'}; */
  position: fixed;
  inset: 0px;
  z-index: 1500;
  top: ${props => props.open ? 0 : window.innerHeight + 'px'};
`;
const Backdrop = styled.div<BackdropProps>`

    position: fixed;
    display: ${props => props.open ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    right: 0;
    bottom:0;
    top: 0; //${props => props.open ? 0 : window.innerHeight + 'px'};
    left: 0;
    background-color:${props => props.backdropColor};
    z-index: -1;
    opacity: ${props => props.open ? 1 : 0};
    transition: all ${props => props.open ? '390ms' : '390ms'} cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    backdrop-filter: ${props => props.backdropFilter};

  /* opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
`;
const ModalBody = styled.div<ModalProps>`
  width: ${props => props.disableGutter ? '100%' : 'calc(100% - 32px)'};
  background-color: #FFF;
  padding: ${props => props.disableGutter ? 0 : '16px'};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  // for stagger
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  bottom:0;
  position: fixed;
`;
const StyledImgGrid = styled(Grid)`
  width: inherit;
  position: fixed;
  margin-top: -72px;
`;

type SProps = {
  open: boolean;
  handleClose: () => void;
  backdropClose?: boolean;
  children: ReactNode;
  backdropFilter?: string;
  backdropColor?: string;
  disableGutter?: boolean;
  isClosable?: boolean;
};

const Stagger: React.FC<SProps> = ({
  children,
  backdropClose = false,
  open = false,
  isClosable = true,
  handleClose,
  backdropFilter = 'blur(0)',
  backdropColor = 'rgba(0,0,0,0.5)',
  disableGutter = false
}) => {
  const onBackdropClick = () => {
    if (backdropClose) {
      if (handleClose !== undefined) {
        handleClose();
      }
    }
  };
  return (
    <StyledStaggerContainer open={open}>
      <Backdrop onClick={onBackdropClick} open={open} backdropFilter={backdropFilter} backdropColor={backdropColor} />
      <SlideIn className={open ? 'active' : ''}>
        <ModalBody disableGutter={disableGutter}>
          {isClosable &&
            <StyledImgGrid flex justify="center" >
              <img src={CloseBtn} alt={'close'} onClick={handleClose} />
            </StyledImgGrid>}
          {children}
        </ModalBody>
      </SlideIn>
    </StyledStaggerContainer>
  );
};

export default Stagger;
// // import {
// //   Backdrop,
// //   createStyles,
// //   makeStyles,
// //   Modal,
// //   Slide,
// //   Theme,
// // } from "@material-ui/core";
// import { Modal } from "@subzero/polar/build/components";
// import styled from 'styled-components';
// import { SlideIn } from "../Animation/SlideIn.styled";

// // const StyledSection = styled.section`
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   backdrop-filter: blur(4px);
// //   outline: none !important;

// //   background-color: #FFFFFF;
// //   box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.08);
// //   border-radius: 16px;
// //   padding: 32px 0px 32px;
// //   width: 604px;
// //   box-sizing: border-box;
// //   position: relative;
// //   outline: none !important;
// //   @media screen and(min-width: 360px) and (max-width: 960px) {
// //     border-top-left-radius: 16;
// //     border-top-right-radius: 16;
// //     border-bottom-left-radius: 0;
// //     border-bottom-right-radius: 0;
// //     width: 100%;
// //     position: absolute;
// //     bottom: 0;
// //     padding: 8px 16px 16px;
// //   }`

// export const StyledModal = styled(Modal)`
//   /* bottom: 0;
//   height: auto;
//   width: 100%;
//   position: fixed;
//   box-sizing: border-box;
//   display: flex; */
//   /* transform:  translateY(0); */
//   /* transition: slide-out 195ms backwards; */
//   /* visibility: hidden; */
//   /* transform:  translateY(${window.innerWidth}px); */
//   /* transition: all 225ms ease; */
//   & > div{
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   }

//   /* &.active{
//     /* visibility: visible;
//     transform:  none;
//   } */
// `;

// interface ModalStaggerProps {
//   isOpen: boolean;
//   isClosable?: boolean;
//   handleClose: Function;
//   children: ReactNode;
//   backdropClose?: boolean;
//   escapeClose?: boolean;
//   isStagger?: boolean;
//   backdropRef?: React.MutableRefObject<any>;
//   backdropColor?: string;
//   backdropBlur?: number
//   // cs?: {
//   //   modalPaper?: string;
//   // };
//   // isMobileOnly?: boolean;
//   // hideBackdrop?: boolean;
// }

// const StaggerX: React.FC<ModalStaggerProps> = ({
//   isOpen,
//   isClosable = true,
//   handleClose,
//   children,
//   backdropClose,
//   escapeClose,
//   isStagger,
//   backdropRef,
//   backdropColor,
//   backdropBlur
// }) => {
//   // const classes = useStyles({ isMobileOnly: isMobileOnly });

//   const [transitionState, setTransitionState] = useState(false)

//   const handleClick = (val: boolean) => {
//     console.log('SETTING Transition');
//     setTransitionState(val)
//   }
//   // const backdropEl = React.useRef<HTMLDivElement>(null)
//   return (
//     <>
//       <StyledModal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={isOpen}
//         onClose={() => {
//           isClosable
//             ? () => handleClose
//             : () => {
//               console.log("NOT CLOSING");
//             };
//           return isClosable
//         }}
//         backdropClose={backdropClose}
//         escapeClose={escapeClose}
//         stagger={isStagger}
//         backdropColor={backdropColor}
//         backdropBlur={backdropBlur}
//         backdropRef={backdropRef}
//         className={'styledModal'}
//       >

//         <div > {children}</div>
//         {/* <StyledSection className={`${classes.paper} ${cs?.modalPaper}`}>
//         {isClosable && (
//           <header
//             className={classes.cancel}
//             onClick={handleClose && handleClose}
//           >
//             <img src={cancel} alt="cancel" />
//           </header>
//         )}
//         <header className={classes.dragger}>
//           <img
//             src={dragger}
//             alt="dragger"
//             onClick={handleClose && handleClose}
//           />
//         </header>
//         <main className={classes.modalMain}>{children}</main>
//       </StyledSection> */}
//       </StyledModal >
//       {/* <div ref={backdropEl} style={{ background: 'red' }}></div> */}
//     </>
//   );
// };
// export default StaggerX;
