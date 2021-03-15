(function () {
  "use strict";
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.checkOff = function (itemIndex) {
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  }
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      {
        name: "Oreo Cookies",
        quantity: "1",
      },
      {
        name: "Pringles Salt",
        quantity: "1",
      },
      {
        name: "Haribo",
        quantity: "2",
      },
      {
        name: "Milka",
        quantity: "1",
      },
      {
        name: "Honey",
        quantity: "1 Glas",
      },
      {
        name: "Salt Sticks",
        quantity: "1 Bag",
      },
      {
        name: "Coca Cola",
        quantity: "3 Bottles",
      },
      {
        name: "Punica",
        quantity: "2 Bottles",
      },
      {
        name: "Fanta",
        quantity: "1 Bottle",
      },
    ];
    var boughtItems = [];
    service.getToBuyItems = function () {
      return toBuyItems;
    };
    service.getBoughtItems = function () {
      return boughtItems;
    };
    service.checkOff = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };
  }
})();
