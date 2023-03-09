
type IActions = { loading: any; success: any; error: any }
type IService = { (data?: {}): Promise<{ fontFamilyName: string }>; (arg0: any): any }

export default function serviceActionCreator (actions: IActions, service: IService) {
  return (data: any) => {
    return async (dispatch: (arg0: any) => void, getState: any) => {
      if (actions.loading && typeof actions.loading === 'function') {
        dispatch(actions.loading());
      }

      try {
        const response = await service(data);
        if (actions.success && typeof actions.success === 'function') {
          dispatch(actions.success(response));
        }
        return response;
      } catch (error) {
        if (actions.error && typeof actions.error === 'function') {
          dispatch(actions.error(error));
        }
        return error;
      }
    };
  };
}
