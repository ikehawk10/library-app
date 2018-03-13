import { computed } from '@ember/object';
import { 
	gte, 
	and, 
	empty, 
	notEmpty,
	not 
} from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({


	emailAddress: '',
	message: '',
	messageNotSent: true,

	validMessageLength: gte('message.length', 5),
	validEmail: notEmpty('emailAddress'),

	isValid: and('validEmail', 'validMessageLength'),
	isDisabled: not('isValid'),

	actions: {
		sendMessage() {
			this.set('emailAddress', '');
			this.set('message', '');
			this.set('messageNotSent', false);
		}
	}

});
