# rps-typescript
Rock Paper Scissors Kata from: http://www.tddbuddy.com/katas/Rock%20Paper%20Scissors.pdf

# Tech Defaults
```shell script
npm -v # 7.15.1
node -v # v16.3.0
```
# Notes
Steps I used to setup a typescript / node project: https://levelup.gitconnected.com/tdd-with-typescript-and-jest-starter-project-cca94fd089f5 with the following caveats:
1. Used [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) instead npm
1. Swapped npm commands with yarn equivalents e.g:
```shell script
  npm install typescript --save-dev -> yarn add typescript -D
  npm init -y -> yarn init -y
```
1. Could be worth explaining some of the concepts in this repo before jumping into the kata e.g what is typescript, what `yarn init -y` does, why certain configurations are needed. Here are some helpful docs:
    1. [Why typescript](https://serokell.io/blog/why-typescript)
    1. [Typescript node setup with explanations](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
