import { useNavigate } from 'react-router-dom';

/**
 * goBack Function
 * goBack on step on the browser history
 *
 *  */

export const goBack = () => {
  const navigate = useNavigate();
  navigate(-1);
};

/**
 * goTo Function
 * routePath to navigate
 * replace boolean param to replace the current route
 * stateVal to pass data between different states
 *
 *  */

export const goTo = (routePath: string, replace = false, stateVal?: object) => {
  const navigate = useNavigate();
  navigate(routePath, { state: stateVal, replace });
};
