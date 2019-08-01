import { runSaga } from 'redux-saga';
import * as Techs from '~/store/modules/techs/actions';

import { getTechs } from '~/store/modules/techs/sagas';
describe('Techs saga', () => {
	it('should be able to fecth techs', async () => {
		const dispatch = jest.fn();

		await runSaga({ dispatch }, getTechs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(Techs.getTechsSuccess(['Node.js']));
	});
});
