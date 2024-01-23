export const NetflixURL= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const UserURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSaJI_GbtJB_R82YCUaz_-gqZDg4ukHMXkg&usqp=CAU"

export const LoginBackgroundURL = "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // eslint-disable-next-line no-undef
      Authorization: "Bearer "+ import.meta.env.VITE_REACT_APP_TMDB_KEY
    }
  };

export const MovieCardImg = "https://image.tmdb.org/t/p/w200"

// eslint-disable-next-line no-undef
export const GOOGLEAI_KEY =  import.meta.env.VITE_REACT_APP_GOOGLEAI_KEY