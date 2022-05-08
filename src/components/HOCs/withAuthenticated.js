import React from 'react'
import Loading from '../loading/LoadingAuth'
import { Navigate } from 'react-router-dom';
import { LOGIN_PATH } from '../../constants/UriPath';

const withAuthenticated = (InnerLayout) => {

  const Authenticated = ({currentUser, loadedAuth, ...props}) => {

    if (!loadedAuth){
      return <Loading />
    }else if(loadedAuth && !currentUser){
      return <Navigate to={LOGIN_PATH} />
    }

    return (
      <InnerLayout
        currentUser={currentUser}
        loadedAuth={loadedAuth}
        {...props}
      />
    )
  }


  return Authenticated
}

export default withAuthenticated