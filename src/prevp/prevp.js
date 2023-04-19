'use strict';

/**
 * prevp
 *
 * Jump to start of previous paragraph
 */

// If plugin needs translations, put here English one in this format:
// mejs.i18n.en["mejs.id1"] = "String 1";
// mejs.i18n.en["mejs.id2"] = "String 2";
mejs.i18n.en['mejs.prevp'] = 'Previous Paragraph';

// Feature configuration
Object.assign(mejs.MepDefaults, {
	/**
	 * @type {?String}
	 */
	prevpText: null
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
	buildprevp (player, controls, layers, media)  {
		const
			t = this,
			prevpTitle = mejs.Utils.isString(t.options.prevpText) ? t.options.prevpText : mejs.i18n.t('mejs.prevp'),
			button = document.createElement('div')
		;

		button.className = `${t.options.classPrefix}button ${t.options.classPrefix}prevp-button ${t.options.classPrefix}prevp`;
		button.innerHTML = `<button type="button" aria-controls="${t.id}" title="${prevpTitle}" aria-label="${prevpTitle}" tabindex="0"></button>`;

		t.addControlElement(button, 'prevp');

		button.addEventListener('click', () => {
      // ignore click if audio not playing
      if (player.paused) {
        return;
      }
			const event = mejs.Utils.createEvent('prevp', media);
			media.dispatchEvent(event);
		});
  },

});

