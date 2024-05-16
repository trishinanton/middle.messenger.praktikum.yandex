import { getFormData } from '../../helpers/getFormData';
import { changeAvatarThunk, changePass, changeUserProfile } from '../../store/modules/user';
import { ChangeAvatar, ChangePass, ChangeUserProfile } from '../../types/user';
import { onGoRoute } from '../../helpers/router';

export const useSettingsData = () => {
  const onChangePass = async () => {
    const form = document.querySelector('form');
    const data = getFormData<ChangePass>(form as HTMLFormElement);

    try {
      await changePass({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      onGoRoute('/messenger');
    } catch (err) {
      alert(err);
    }
  };

  const onChangeUserProfile = async () => {
    const form = document.querySelector('form');
    const data = getFormData<ChangeUserProfile>(form as HTMLFormElement);

    try {
      await changeUserProfile({
        first_name: data.first_name,
        second_name: data.second_name,
        display_name: data.display_name,
        login: data.login,
        email: data.email,
        phone: data.phone,

      });
      onGoRoute('/messenger');
    } catch (err) {
      alert(err);
    }
  };

  const onChangeAvatar = async () => {
    const form = document.querySelector('form');

    const data = getFormData<ChangeAvatar>(form as HTMLFormElement);
    const formData = new FormData();
    formData.append('avatar', data.avatar as unknown as string);

    try {
      await changeAvatarThunk(formData);
      onGoRoute('/messenger');
    } catch (err) {
      alert(err);
    }
  };

  return {
    onChangePass,
    onChangeUserProfile,
    onChangeAvatar,
  };
};
