
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          id: 1,
          name: "ThunderSats",
          url: "https://thundersats.com/",
          type: "apps",
          description:
            "ThunderSats is a Provably Fair Miniature Roulette Game on top of the Bitcoin Lightning Network ⚡ No login required."
        },
        {
          id: 2,
          name: "klokit",
          url: "https://klokit.co/m/6260",
          type: "apps",
          description:
            "klokit displays the value of your recorded time in Bitcoin as well as your native currency, and also enables you to receive payment in Bitcoin."
        },
        {
          id: 3,
          name: "LNswapBot",
          url: "https://t.me/LNswapBot",
          type: "apps",
          description:
            "LNswapbot is a Telegram bot that gives user the opportunity to swap BTC on a Lightning channel for BTC that is on-chain, and Vice Versa."
        },
        {
          id: 4,
          name: "LibrePatron",
          url: "https://github.com/JeffVandrewJr/patron",
          type: "apps",
          description:
            "A Self-Hosted Patreon Alternative Backed by BTCPay."
        },
        {
          id: 5,
          name: "Pretix",
          url: "https://pretix.eu/about/en/",
          type: "apps",
          description:
            "Pretix is a ticket sales software that uses BTCPay Server."
        },
        {
          id: 6,
          name: "Bitflix",
          url: "https://btcpayprovider.com/btiflix.html",
          type: "apps",
          description:
            "Btiflix is a demo of a streaming platform, powered by BTCpay."
        },
        {
          id: 7,
          name: "lightbo.lt",
          url: "https://btcpayjungle.com/Account/Login",
          type: "hosts",
          description:
            "Lightbo.lt offers managed solutions and a Bitcoin payment provider. They offer various packages and charge a monthly fee. No transaction fees."
        },
        {
          id: 8,
          name: "btcpayprovider.com",
          url: "https://btcpayprovider.com/",
          type: "hosts",
          description:
            "btcpayprovider.com is a BTCPay Server hosting provider."
        },
        {
          id: 9,
          name: "D-Central",
          url: "https://d-central.tech/shop/",
          type: "merchants",
          description:
            "D-Central is a one-stop shop for Bitcoin miners in Canada."
        },
        {
          id: 10,
          name: "MerkleSig",
          url: "https://merklesig.com/",
          type: "hosts",
          description:
            "Merklesig offers a paid BTCPayServer hosting service."
        },
        {
          id: 11,
          name: "lpay.io",
          url: "https://btcps.lpay.io/Account/Login",
          type: "hosts",
          description:
            "lpay.io offers free BTCPayServer hosting services."
        },
        {
          id: 12,
          name: "BTCPay Jungle",
          url: "https://btcpayjungle.com/Account/Login",
          type: "hosts",
          description:
            "BTCPay Jungle is a hosted, open-source cryptocurrency payment processor. It is secure, private, censorship-resistant and free."
        },
        {
          id: 13,
          name: "Nakamoto Institute",
          url: "https://nakamotoinstitute.org/donate/",
          type: "non-profit",
          description:
            "Founded in 2013, Nakamoto Institute is an educational resource for everything Bitcoin. In-depth researches to Satoshi Nakamoto quotes and forum posts archive."
        }
      ]);
    });
};
