'use strict';

/**
 * capture.js
 *
 * Toggle paragraph capture symbols (bullseye)
 */

// If plugin needs translations, put here English one in this format:
// mejs.i18n.en["mejs.id1"] = "String 1";
// mejs.i18n.en["mejs.id2"] = "String 2";
mejs.i18n.en['mejs.capture'] = 'Show/Hide Audio Capture Markers';

// Feature configuration
Object.assign(mejs.MepDefaults, {
	/**
	 * @type {?String}
	 */
	capture: null
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
	buildcapture (player, controls, layers, media)  {
		const
			t = this,
			captureTitle = mejs.Utils.isString(t.options.captureText) ? t.options.captureText : mejs.i18n.t('mejs.capture'),
			button = document.createElement('div')
		;

		button.className = `${t.options.classPrefix}button ${t.options.classPrefix}capture-button ${t.options.classPrefix}capture`;
		button.innerHTML = `<button type="button" aria-controls="${t.id}" title="${captureTitle}" aria-label="${captureTitle}" tabindex="0"></button>`;

		t.addControlElement(button, 'capture');

		button.addEventListener('click', () => {
			const event = mejs.Utils.createEvent('capture', media);
			media.dispatchEvent(event);
		});
  },

});

