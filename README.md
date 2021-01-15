# Installation
npm install

npm run build

npm install -g ./


# Usage
`the-iconic -flags`

g - gender

p - page

ps - page_size

s - sort

# Testing
Run unit tests: `npm run unit`

Run integration tests: `npm run integration`

Run all tests: `npm t`


Example:
`the-iconic -g female -p 1 -ps 70 -s popularity`

# NOTES
Rational around not using nestjs - due to the requirement being a console application I thought it'd be better to have concise encapsulation without a CMS construct that Nest uses. I wanted "show off" my knowledge of core Node & TS.
As well as *nix based architecture in the form of a distributed lib (e.g. CLI).




