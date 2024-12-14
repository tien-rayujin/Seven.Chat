import './serviceWorker';
import './startup/accounts';

import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.wait();

FlowRouter.notFound = {
	action: () => undefined,
};

import('./polyfills')
	.then(() => import('./meteorOverrides'))
	.then(() => import('./ecdh'))
	.then(() => import('./importPackages'))
	.then(() => Promise.all([import('./methods'), import('./startup')]))
	.then(() => import('./omnichannel'))
	.then(() => Promise.all([import('./views/admin'), import('./views/marketplace'), import('./views/account')]));
