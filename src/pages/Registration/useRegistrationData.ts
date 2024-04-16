import { getFormData } from '../../helpers/getFormData';
import { createUserThunk } from '../../store/modules/user';
import { CreateUserType } from '../../types/user';
import { onGoRoute } from '../../helpers/router';

export const useRegistrationData = () => {
  const onClick = async () => {
    const form = document.querySelector('form');
    const data = getFormData<CreateUserType>(form as HTMLFormElement);

    try {
      await createUserThunk(data);
      onGoRoute('/settings');
    } catch (err) {
      alert(err);
    }
  };

  return {
    onClick,
  };
};
