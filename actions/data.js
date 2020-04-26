export const fetchFutureEvents = () => async dispatch => {
    try {
      const eventsRes = await fetch('localhost:8000/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Storage.get('token')}`,
        },
      });
  
      let status = await eventsRes.status;
      if (status === 401 || status === 403) {
        dispatch(logoutUser());
        return;
      }
  
      const futureEvents = await eventsRes.json();
  
      if (!futureEvents) throw new Error('Empty response from server');
      else if (futureEvents.error) throw new Error(futureEvents.error.message);
  
      dispatch({
        type: FETCH_FUTURE_EVENTS,
        payload: futureEvents.events,
      });
    } catch (error) {
      notify('Unable to fetch future events!', error.message);
      dispatch({
        type: EVENT_ERROR,
        payload: error.message,
      });
    }
  };