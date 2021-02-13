# react-use-safe-state
[![GitHub license](https://img.shields.io/github/license/nickfla1/react-use-safe-state.svg)](https://github.com/nickfla1/react-use-safe-state/main/LICENSE)
[![GitHub release](https://img.shields.io/github/release/nickfla1/react-use-safe-state.svg)](https://github.com/nickfla1/react-use-safe-state/releases/)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

`react-use-safe-state` is an utility hook that wraps around react's `useState` with the aim to prevent the occuring of the famous `Can't perform a React state update on an unmounted component` error.

### Installation
```sh
# Yarn
yarn add react-use-safe-state

# NPM
npm install react-use-safe-state --save
```

### Usage
Using `react-use-safe-state` is as simple as replacing `useState` hooks with `useSafeState`.
