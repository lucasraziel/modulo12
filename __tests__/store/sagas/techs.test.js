import { runSaga } from 'redux-saga';
import * as Techs from '~/store/modules/techs/actions';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { getTechs } from '~/store/modules/techs/sagas';

const apiMock = new MockAdapter(api);
describe('Techs saga', () => {
	it('should be able to fecth techs', async () => {
		const dispatch = jest.fn();

		apiMock.onGet('/techs').reply(200, ['Node.js']);

		await runSaga({ dispatch }, getTechs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(Techs.getTechsSuccess(['Node.js']));
	});

	it('should fail when api returns error', async () => {
		const dispatch = jest.fn();

		apiMock.onGet('/techs').reply(500);

		await runSaga({ dispatch }, getTechs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(Techs.getTechsFailure());
	});
});
