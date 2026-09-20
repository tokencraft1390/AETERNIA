# Phase 0 Evidence Ledger

A gate changes from ⬜ to 🟢 only when evidence exists.

| Gate | Status | Required evidence |
|---|---|---|
| NFC write | ⬜ | Device reports successful tag write |
| NFC read | ⬜ | Read returns expected payload/tag ID |
| Wallet/MWA | ⬜ | Phantom displays Aeternia identity; address returned |
| Devnet RPC | ⬜ | Confirmed Devnet slot number |
| Anchor deploy | ⬜ | Devnet program ID plus deployment evidence |
| Shell boot | ⬜ | Runtime capture showing AETERNIA, tagline and both game cards |

No placeholder wallet address or hard-coded payment recipient is production configuration.
