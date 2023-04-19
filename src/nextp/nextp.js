'use strict';

/**
 * next-p
 *
 * Jump to start of next paragraph
 */

// If plugin needs translations, put here English one in this format:
// mejs.i18n.en["mejs.id1"] = "String 1";
// mejs.i18n.en["mejs.id2"] = "String 2";
mejs.i18n.en['mejs.nextp'] = 'Next Paragraph';

// Feature configuration
Object.assign(mejs.MepDefaults, {
	/**
	 * @type {?String}
	 */
	nextpText: null
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
	buildnextp (player, controls, layers, media)  {
		const
			t = this,
			nextpTitle = mejs.Utils.isString(t.options.nextpText) ? t.options.nextpText : mejs.i18n.t('mejs.nextp'),
			button = document.createElement('div')
		;

		button.className = `${t.options.classPrefix}button ${t.options.classPrefix}nextp-button ${t.options.classPrefix}nextp`;
		button.innerHTML = `<button type="button" aria-controls="${t.id}" title="${nextpTitle}" aria-label="${nextpTitle}" tabindex="0"></button>`;

		t.addControlElement(button, 'nextp');

		button.addEventListener('click', () => {
      // ignore click if audio not playing
      if (player.paused) {
        return;
      }
			const event = mejs.Utils.createEvent('nextp', media);
			media.dispatchEvent(event);
		});
  },

});

