# Phase 0 Evidence Gate

AETERNIA does not promote a gate to PASS without runtime evidence.

| # | Gate | Required evidence | State |
|---|---|---|---|
| 1 | NFC write | Physical Android device reports successful tag write | UNVERIFIED |
| 2 | NFC read | Physical Android device reads the expected AETERNIA payload | UNVERIFIED |
| 3 | Wallet | Phantom/MWA opens and displays Aeternia identity, returning an address | UNVERIFIED |
| 4 | Devnet | Live Devnet RPC returns a slot number | UNVERIFIED |
| 5 | Anchor | Deployment transaction succeeds and final program ID is recorded | UNVERIFIED |
| 6 | Shell | Device/emulator renders AETERNIA, tagline, SIGIL and ECOSYSTEM cards | UNVERIFIED |

## Safety rule

No placeholder wallet address or placeholder program ID is treated as production evidence. NFC payloads must be generated from validated runtime state rather than a hard-coded payment destination.
