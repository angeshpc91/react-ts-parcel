import React from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function withRouter (Child: (new () => React.Component<any, any>) | React.FC<any>) {
  return (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<any, any, any>> & Readonly<any>) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();

    return (
      <Child
        {...props}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  };
}
