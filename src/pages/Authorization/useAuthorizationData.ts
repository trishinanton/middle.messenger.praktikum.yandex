import { getFormData } from '../../helpers/getFormData';
import { SignInUserType } from '../../types/user';
import { signInUserThunk } from '../../store/modules/user';
import { onGoRoute } from '../../helpers/router';

export const useAuthorizationData = () => {
  const onClick = async () => {
    const form = document.querySelector('form');
    const data = getFormData<SignInUserType>(form as HTMLFormElement);

    try {
      await signInUserThunk(data);
      onGoRoute('/messenger');
    } catch (err) {
      const textErr = JSON.parse(err);
      if (textErr.reason && textErr.reason.includes('User already in system')) {
        onGoRoute('/messenger');
      } else {
        alert(err);
      }
    }
  };

  return {
    onClick,
  };
};
