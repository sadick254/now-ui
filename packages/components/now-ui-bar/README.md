# @now-ui/bar

## Description

The Bar component provides a bar that can be used to display stats

## Installation

```jsx
npm install @now-ui/bar --save
```

## Props

| Argument         | Type                     | Required | Default | Example          |
| ---------------- | ------------------------ | -------- | ------- | ---------------- |
| width            | oneOf([string , number]) | no       | N/A     | `'24px'`         |
| height           | oneOf([string , number]) | no       | N/A     | `'24px'`         |
| backgroundColor  | string                   | no       | N/A     | `'#eee'`         |
| fillColor        | string                   | no       | N/A     | `'#eee'`         |
| fillHeight       | oneOf([string , number]) | no       | N/A     | `'24px'`         |
| titleAbove       | oneOf([node,string])     | no       | N/A     | `<h6>title</h6>` |
| titleBelow       | oneOf([node,string])     | no       | N/A     | `<h6>title</h6>` |
| barBorderRadius  | string                   | no       | N/A     | `'2px'`          |
| fillBorderRadius | string                   | no       | N/A     | `'2px'`          |

## Usage

<!-- Description of the component usage -->

```jsx
import Bar from '@now-ui/bar';

const Component = () => (
  <Bar
    width="42px"
    height="150px"
    backgroundColor="#8C4C44"
    fillColor="#D2634C"
    fillHeight="20%"
    titleAbove="27.5%"
    titleBelow="18-24"
    barBorderRadius="2px"
    fillBorderRadius="2px"
  />
);
```
