require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dwv7CDWpwQWxGedCnZGxDk1k3_39VzbG',
      accounts: [
        '598ef1e9eb8c70a49aa6b7d7f7e8f505919835e00df637ff9b3c398e43183108',
      ],
    },
  },
}