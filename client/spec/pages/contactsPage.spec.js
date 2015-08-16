'use strict';

var ContactsPage = require('../../src/js/pages/contactsPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Contacts Page', function() {

  var contactsPage;

  beforeEach(function() {
    router = new Router();
    contactsPage = new ContactsPage();
  });

  describe('contacts data', function() {

    it('should have a contacts collection', function() {
      expect(contactsPage.contactsCollection).toBeDefined();
    });

    describe('loading data', function() {
      it('should load the data from ...');
    });

  });

  describe('button events', function() {

    describe('right', function() {
      it('should take the user to the contacts page', function() {
        spyOn(contactsPage, 'goToHomePage');
        contactsPage.setButtonEvents();
        contactsPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });
    });

    describe('face', function () {
      it('should display "Oh noes!" to the user', function () {
        contactsPage.trigger('face');
        expect(contactsPage.el.innerHTML).toEqual('<div>Oh noes!</div>');
      });
    });
  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      contactsPage.render();
      expect(contactsPage.el.innerHTML).toContain('<h1>Contacts</h1>');
    });

    it('should render each of the contacts', function() {
      spyOn(contactsPage, 'createContactHTML');
      contactsPage.contactsCollection.reset([{}, {}, {}, {}]);
      contactsPage.render();
      expect(contactsPage.createContactHTML.calls.count()).toEqual(4);
    });

    it('returns the view object', function() {
      expect(contactsPage.render()).toEqual(contactsPage);
    });

  });

});
