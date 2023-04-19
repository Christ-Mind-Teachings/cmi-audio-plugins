'use strict';

/**
 * ptoggle.js
 *
 * Jump to start of next paragraph
 */

// If plugin needs translations, put here English one in this format:
// mejs.i18n.en["mejs.id1"] = "String 1";
// mejs.i18n.en["mejs.id2"] = "String 2";
mejs.i18n.en['mejs.ptoggle'] = 'Show/Hide Paragraph Jump Markers';

// Feature configuration
Object.assign(mejs.MepDefaults, {
	/**
	 * @type {?String}
	 */
	ptoggleText: null
});


Object.assign(MediaElementPlayer.prototype, {

    // Public variables (also documented according to JSDoc specifications)

    /**
     * Feature constructor.
     *
     * Always has to be prefixed with `build` and the name that will be used in MepDefaults.features list
     * @param {MediaElementPlayer} player
     * @param {HTMLElement} controls
     * @param {HTMLElement} layers
     * @param {HTMLElement} media
     */
	buildptoggle (player, controls, layers, media)  {
		const
			t = this,
			ptoggleTitle = mejs.Utils.isString(t.options.ptoggleText) ? t.options.ptoggleText : mejs.i18n.t('mejs.ptoggle'),
			button = document.createElement('div')
		;

		button.className = `${t.options.classPrefix}button ${t.options.classPrefix}ptoggle-button ${t.options.classPrefix}ptoggle`;
		button.innerHTML = `<button type="button" aria-controls="${t.id}" title="${ptoggleTitle}" aria-label="${ptoggleTitle}" tabindex="0"></button>`;

		t.addControlElement(button, 'ptoggle');

		button.addEventListener('click', () => {
			const event = mejs.Utils.createEvent('ptoggle', media);
			media.dispatchEvent(event);
		});
  },

});

