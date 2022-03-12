"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); //swiper

  var wiperAboutSmallg = new Swiper('.js-about-small', {
    slidesPerView: 3,
    spaceBetween: 12,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 6,
        spaceBetween: 16
      }
    }
  });
  var wiperAboutBig = new Swiper('.js-about-big', {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: wiperAboutSmallg
    }
  }); // smoth scroll

  $('.scroll-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700);
    }
  });
}); // WEB 3

$(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
  return regeneratorRuntime.wrap(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          // await tryConnect()
          $(function () {
            $('.connect-button').on('click', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return tryConnect();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()); // Mint button

            $('.mint-button').on('click', /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val().toString();

                        if (totalToMint) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 4:
                        _context2.next = 6;
                        return mint(totalToMint);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }()); // Plus button

            $('.input-wrap-right').on('click', /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val();

                        if (!totalToMint) {
                          totalToMint = 1;
                        } else if (+totalToMint + 1 > 20) {
                          totalToMint = 20;
                        } else totalToMint++;

                        $('.mint-input').val(+totalToMint);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }()); // Five button

            $('.input-five-button').on('click', /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(5);

                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()); // Ten button

            $('.input-ten-button').on('click', /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(10);

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x5) {
                return _ref6.apply(this, arguments);
              };
            }());
            $('.input-fifteen-button').on('click', /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(15);

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x6) {
                return _ref7.apply(this, arguments);
              };
            }()); // Twenty button

            $('.input-twenty-button').on('click', /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(20);

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x7) {
                return _ref8.apply(this, arguments);
              };
            }()); // Left button

            $('.input-wrap-left').on('click', /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val();

                        if (!totalToMint || +totalToMint - 1 < 1) {
                          totalToMint = 1;
                        } else totalToMint--;

                        $('.mint-input').val(totalToMint);

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x8) {
                return _ref9.apply(this, arguments);
              };
            }());
          }); // Input handler

          $('.mint-input').on('input', /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
              var totalToMint;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      e.preventDefault();
                      totalToMint = $('.mint-input').val();

                      if (totalToMint < 1) {
                        $('.mint-input').val(1);
                      }

                      if (totalToMint > 20) {
                        $('.mint-input').val(20);
                      }

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            return function (_x9) {
              return _ref10.apply(this, arguments);
            };
          }());

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _callee10);
}))); // Unpkg imports

var Web3Modal = window.Web3Modal["default"];
var WalletConnectProvider = window.WalletConnectProvider["default"]; // Web3modal instance

var web3Modal; // Chosen wallet provider given by the dialog window

var provider;

function init() {
  var providerOptions = {
    walletconnect: {
      "package": WalletConnectProvider,
      options: {
        infuraId: "06d79208cb2b43faaf8f11be40142f71"
      }
    }
  };
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    // optional
    providerOptions: providerOptions,
    // required
    disableInjectedProvider: false,
    // optional. For MetaMask / Brave / Opera.
    theme: {
      background: "#0f1315",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "1px solid #10fdff",
      hover: "rgb(16, 26, 33)",
      borderRadius: "2px"
    }
  });
}

window.addEventListener('load', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
  return regeneratorRuntime.wrap(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          init(); // getMinted();
          // document.querySelector(".connect-button").addEventListener("click", console.log('click'));
          // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);

        case 1:
        case "end":
          return _context11.stop();
      }
    }
  }, _callee11);
})));

var checkNetwork = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(provider) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!provider) {
              _context12.next = 13;
              break;
            }

            _context12.prev = 1;
            _context12.next = 4;
            return provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{
                chainId: '0x1'
              }]
            });

          case 4:
            return _context12.abrupt("return", true);

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12["catch"](1);
            console.error(_context12.t0);
            return _context12.abrupt("return", false);

          case 11:
            _context12.next = 15;
            break;

          case 13:
            console.error("Can't setup the network on metamask because window.ethereum is undefined");
            return _context12.abrupt("return", false);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 7]]);
  }));

  return function checkNetwork(_x10) {
    return _ref12.apply(this, arguments);
  };
}();

var getBalance = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var web3, address, balance, ethBalance, humanFriendlyBalance;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            web3 = new Web3(provider);
            _context13.next = 3;
            return getAccounts();

          case 3:
            address = _context13.sent[0];
            _context13.next = 6;
            return web3.eth.getBalance(address);

          case 6:
            balance = _context13.sent;
            ethBalance = web3.utils.fromWei(balance, "ether");
            humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
            return _context13.abrupt("return", humanFriendlyBalance);

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function getBalance() {
    return _ref13.apply(this, arguments);
  };
}();

var tryConnect = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return web3Modal.connect();

          case 3:
            provider = _context15.sent;

            if (provider.chainId !== 1) {
              checkNetwork(provider);
            }

            getBalance();
            document.querySelector(".connect-button").style.display = "none";
            document.querySelector(".mint-button").style.display = "block";
            provider.on("disconnect", /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(code, reason) {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return provider.close();

                      case 2:
                        console.log(code, reason);
                        document.querySelector(".connect-button").style.display = "block";
                        document.querySelector(".mint-button").style.display = "none"; // If the cached provider is not cleared,
                        // WalletConnect will default to the existing session
                        // and does not allow to re-scan the QR code with a new wallet.
                        // Depending on your use case you may want or want not his behavir.

                        _context14.next = 7;
                        return web3Modal.clearCachedProvider();

                      case 7:
                        provider = null;

                      case 8:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));

              return function (_x11, _x12) {
                return _ref15.apply(this, arguments);
              };
            }());
            _context15.next = 15;
            break;

          case 11:
            _context15.prev = 11;
            _context15.t0 = _context15["catch"](0);
            console.log("Could not get a wallet connection", _context15.t0);
            return _context15.abrupt("return");

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 11]]);
  }));

  return function tryConnect() {
    return _ref14.apply(this, arguments);
  };
}();

function getAccounts() {
  return _getAccounts.apply(this, arguments);
}

function _getAccounts() {
  _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
    var web3, acc;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            web3 = new Web3(provider); // if (!window.ethereum) return

            _context16.prev = 1;
            _context16.next = 4;
            return web3.eth.getAccounts();

          case 4:
            acc = _context16.sent;
            return _context16.abrupt("return", acc);

          case 8:
            _context16.prev = 8;
            _context16.t0 = _context16["catch"](1);
            return _context16.abrupt("return", []);

          case 11:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[1, 8]]);
  }));
  return _getAccounts.apply(this, arguments);
}

var cost = '50000000000000000';
var contractAddress = '0x3627c7019D8A1b2E4296713A3156A6De8187986E';

function mint(_x13) {
  return _mint.apply(this, arguments);
} // contract ABI


function _mint() {
  _mint = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(totalToMint) {
    var web3, contract, balance, isWalletConnect, val, transactionParameters, _provider;

    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            web3 = new Web3(provider); // eslint-disable-next-line @typescript-eslint/no-unused-vars

            contract = new web3.eth.Contract(abi, contractAddress);
            _context17.next = 4;
            return getBalance();

          case 4:
            balance = _context17.sent;
            console.log(+balance, " ", totalToMint * 0.05);
            isWalletConnect = localStorage.getItem('walletconnect');

            if (isWalletConnect) {
              val = web3.utils.toWei((totalToMint * 0.05).toFixed(3).toString(), 'ether');
            } else {
              val = parseInt(web3.utils.toWei((totalToMint * 0.05).toFixed(3).toString(), "ether")).toString(16);
            }

            _context17.t0 = contractAddress;
            _context17.next = 11;
            return getAccounts();

          case 11:
            _context17.t1 = _context17.sent[0];
            _context17.t2 = val;
            _context17.t3 = contract.methods.mintDeer(totalToMint).encodeABI();
            transactionParameters = {
              to: _context17.t0,
              from: _context17.t1,
              value: _context17.t2,
              data: _context17.t3
            };
            _context17.prev = 15;
            _context17.next = 18;
            return (_provider = provider) === null || _provider === void 0 ? void 0 : _provider.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            });

          case 18:
            _context17.next = 23;
            break;

          case 20:
            _context17.prev = 20;
            _context17.t4 = _context17["catch"](15);
            console.log(_context17.t4);

          case 23:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[15, 20]]);
  }));
  return _mint.apply(this, arguments);
}

var abi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "inputs": [],
  "name": "MAX_DEERS",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "baseURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "deerPrice",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "flipSaleState",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "getApproved",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }],
  "name": "isApprovedForAll",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "maxDeerAmount",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "mintAmount",
    "type": "uint256"
  }],
  "name": "mintDeer",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "ownerOf",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "mintAmount",
    "type": "uint256"
  }],
  "name": "premint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }, {
    "internalType": "bytes",
    "name": "_data",
    "type": "bytes"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "saleIsActive",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "baseURI",
    "type": "string"
  }],
  "name": "setBaseURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
  }],
  "name": "supportsInterface",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenOfOwnerByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "tokenURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}];