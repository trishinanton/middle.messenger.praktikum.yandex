import { MainPage } from '../main';
import { Authorization } from '../pages/Authorization/Authorization';
import { Profile } from '../pages/Profile/Profile';
import { Registration } from '../pages/Registration/Registration';
import { Settings } from '../pages/Settings/Settings';
import { router } from '.';

router.use('/', MainPage);
router.use('/sign-in', Authorization);
router.use('/messenger', Profile);
router.use('/sign-up', Registration);
router.use('/settings', Settings);

router.start();
